import React, { useEffect, useState, Suspense } from 'react';
import MapView from '@arcgis/core/views/MapView.js';
import WebMap from '@arcgis/core/WebMap.js';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { supabase } from './supabaseClient.js';

const Home = React.lazy(() => import('./pages/Home.js'));
const About = React.lazy(() => import('./pages/About.js'));

function App() {
  const [sightings, setSightings] = useState([]);
  const [poiLayers, setPoiLayers] = useState({});
  const [birds, setBirds] = useState([]);
  const [selectedBird, setSelectedBird] = useState(null);
  const [formData, setFormData] = useState({
    species: '',
    lat: '',
    lon: '',
    date: '',
    time: '',
  });

  useEffect(() => {
    // Initialize the map
    const webMap = new WebMap({
      basemap: 'gray-vector',
    });

    const view = new MapView({
      container: 'mapViewDiv',
      map: webMap,
      center: [-80.898651, 25.286615],
      zoom: 8,
      ui: {
        components: ["attribution"], // Disable default zoom controls, keep attribution
      },
    });

    // Ensure panning and zooming work
    view.navigation.mouseWheelZoomEnabled = true; // Enable zooming with the mouse wheel
    view.navigation.browserTouchPanEnabled = true; // Enable touch-based panning
    view.on("drag", (event) => {
      event.stopPropagation(); // Allow dragging for panning
    });

    // Create a custom container for the controls
    const customControls = document.createElement("div");
    customControls.className = "custom-controls";

    // Add a "Locate Me" button
    const locateButton = document.createElement("button");
    locateButton.innerHTML = "Locate Me";
    locateButton.className = "esri-widget esri-widget--button esri-interactive locate-me-button";
    locateButton.title = "Zoom to your location";

    locateButton.addEventListener("click", () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            view.goTo({ center: [longitude, latitude], zoom: 12 });
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    });

    // Add zoom in and zoom out buttons
    const zoomInButton = document.createElement("button");
    zoomInButton.innerHTML = "+";
    zoomInButton.className = "esri-widget esri-widget--button esri-interactive zoom-button";
    zoomInButton.title = "Zoom In";

    zoomInButton.addEventListener("click", () => {
      view.zoom += 1;
    });

    const zoomOutButton = document.createElement("button");
    zoomOutButton.innerHTML = "−";
    zoomOutButton.className = "esri-widget esri-widget--button esri-interactive zoom-button";
    zoomOutButton.title = "Zoom Out";

    zoomOutButton.addEventListener("click", () => {
      view.zoom -= 1;
    });

    // Append buttons to the custom container
    customControls.appendChild(zoomInButton);
    customControls.appendChild(zoomOutButton);
    customControls.appendChild(locateButton);

    // Add the custom container to the top-left corner of the map
    view.ui.add(customControls, "top-left");

    // Ensure buttons are clickable by preventing pointer events from being blocked
    customControls.style.pointerEvents = "auto";

    // Fetch and add roads and trails layers from Supabase
    const fetchRoadsAndTrails = async () => {
      const fetchLayerData = async (tableName, title, color) => {
        const { data, error } = await supabase.from(tableName).select('geom_geojson');
        if (error) {
          console.error(`Error fetching ${title} data:`, error);
          return null;
        }

        const features = data.map((item, index) => {
          const geom = JSON.parse(item.geom_geojson);
          return {
            geometry: {
              type: 'polyline',
              paths: geom.coordinates,
            },
            attributes: {
              ObjectID: index + 1,
            },
          };
        });

        return new FeatureLayer({
          source: features,
          fields: [{ name: 'ObjectID', alias: 'ObjectID', type: 'oid' }],
          objectIdField: 'ObjectID',
          geometryType: 'polyline',
          spatialReference: { wkid: 4326 },
          renderer: {
            type: 'simple',
            symbol: {
              type: 'simple-line',
              color: color,
              width: 1,
            },
          },
          title: title,
          visible: true,
        });
      };

      const roadsLayer = await fetchLayerData('roads', 'Roads', 'rgb(161, 118, 107)');
      const trailsLayer = await fetchLayerData('trails', 'Trails', 'rgb(77, 80, 75)');

      if (roadsLayer) webMap.add(roadsLayer);
      if (trailsLayer) webMap.add(trailsLayer);
    };

    fetchRoadsAndTrails();

    // Fetch POI layers from Supabase
    const fetchPOILayers = async () => {
      const { data, error } = await supabase.from('pois').select('poitype, geom_geojson');
      if (error) {
        console.error('Error fetching POIs:', error);
        return;
      }

      const poiLayersData = {};
      data.forEach((poi) => {
        if (!poiLayersData[poi.poitype]) {
          poiLayersData[poi.poitype] = new FeatureLayer({
            source: [], // Empty source to start
            fields: [
              { name: 'ObjectID', alias: 'ObjectID', type: 'oid' },
              { name: 'poitype', alias: 'POI Type', type: 'string' },
            ],
            objectIdField: 'ObjectID',
            geometryType: 'point',
            spatialReference: { wkid: 4326 },
            renderer: {
              type: 'simple',
              symbol: {
                type: 'simple-marker',
                color: 'blue',
                size: 8,
                outline: { color: 'white', width: 1 },
              },
            },
            title: poi.poitype,
            visible: false,
          });
          webMap.add(poiLayersData[poi.poitype]); // Add POI layers after roads and trails
        }

        // Parse GeoJSON and add to layer source
        const geom = JSON.parse(poi.geom_geojson);
        poiLayersData[poi.poitype].source.push({
          geometry: {
            type: 'point',
            longitude: geom.coordinates[0],
            latitude: geom.coordinates[1],
          },
          attributes: {
            ObjectID: poiLayersData[poi.poitype].source.length + 1,
            poitype: poi.poitype,
          },
        });
      });

      setPoiLayers(poiLayersData);
    };

    fetchPOILayers();

    // Add a click event listener to populate lat/lon in the form
    view.on('click', (event) => {
      const { latitude, longitude } = event.mapPoint;
      setFormData((prevFormData) => ({
        ...prevFormData,
        lat: latitude.toFixed(6),
        lon: longitude.toFixed(6),
      }));
    });

    // Fetch bird species from the "birds" table
    const fetchBirds = async () => {
      const { data, error } = await supabase.from('birds').select('*');
      if (error) {
        console.error('Error fetching birds:', error);
      } else {
        setBirds(data);
      }
    };

    fetchBirds();
  }, []);

  const toggleLayerVisibility = (poitype) => {
    const layer = poiLayers[poitype];
    if (layer) {
      layer.visible = !layer.visible;
      setPoiLayers({ ...poiLayers, [poitype]: layer });
    }
  };

  const handleBirdChange = (event) => {
    const bird = birds.find((b) => b.species === event.target.value);
    setSelectedBird(bird);
    setFormData({ ...formData, species: event.target.value });
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { species, lat, lon, date, time } = formData;

    const newSighting = {
      species,
      latitude: parseFloat(lat),
      longitude: parseFloat(lon),
      date,
      time,
    };

    const { error } = await supabase.from('sightings').insert([newSighting]);
    if (error) {
      console.error('Error submitting sighting:', error);
    } else {
      console.log('Sighting submitted successfully:', newSighting);
      setSightings((prev) => [...prev, newSighting]);
      setFormData({ species: '', lat: '', lon: '', date: '', time: '' });
      setSelectedBird(null);
    }
  };

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div id="mapViewDiv"></div>
                <div className="form-panel">
                  <h3 className="text-center">Submit a Bird Sighting</h3>
                  <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                      <label htmlFor="species" className="form-label">Select Bird Species:</label>
                      <select
                        id="species"
                        name="species"
                        className="form-select"
                        value={formData.species}
                        onChange={handleBirdChange}
                        required
                      >
                        <option value="">-- Select a Species --</option>
                        {birds.map((bird) => (
                          <option key={bird.species} value={bird.species}>
                            {bird.species}
                          </option>
                        ))}
                      </select>
                    </div>

                    {selectedBird && (
                      <div className="bird-details mb-3">
                        <h4>{selectedBird.species}</h4>
                        <img
                          src={selectedBird.photo}
                          alt={selectedBird.species}
                          className="img-fluid mb-2"
                        />
                        <p>
                          <strong>Photo Attribution:</strong>{' '}
                          <span
                            dangerouslySetInnerHTML={{ __html: selectedBird.photo_attr }}
                          ></span>
                        </p>
                        <p>{selectedBird.info}</p>
                        <a href={selectedBird.info_link} target="_blank" rel="noopener noreferrer">
                          Learn More
                        </a>
                      </div>
                    )}

                    <div className="mb-3">
                      <label htmlFor="lat" className="form-label">Latitude:</label>
                      <input
                        type="number"
                        id="lat"
                        name="lat"
                        className="form-control"
                        value={formData.lat}
                        onChange={handleFormChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="lon" className="form-label">Longitude:</label>
                      <input
                        type="number"
                        id="lon"
                        name="lon"
                        className="form-control"
                        value={formData.lon}
                        onChange={handleFormChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="date" className="form-label">Date:</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        className="form-control"
                        value={formData.date}
                        onChange={handleFormChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="time" className="form-label">Time:</label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        className="form-control"
                        value={formData.time}
                        onChange={handleFormChange}
                        required
                      />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Submit Sighting</button>
                  </form>
                </div>
                <div className="layer-toggles">
                  <h5>Points of Interest</h5>
                  {Object.keys(poiLayers).map((poitype) => (
                    <div key={poitype} className="form-check">
                      <input
                        type="checkbox"
                        id={poitype}
                        className="form-check-input"
                        checked={poiLayers[poitype].visible}
                        onChange={() => toggleLayerVisibility(poitype)}
                      />
                      <label htmlFor={poitype} className="form-check-label">{poitype}</label>
                    </div>
                  ))}
                </div>
              </div>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
