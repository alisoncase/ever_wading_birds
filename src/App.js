import React, { useEffect, useState, Suspense, useRef } from 'react';
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

  const mapDivRef = useRef(null);

  useEffect(() => {
    console.log("Initializing WebMap and MapView...");

    // Initialize the map
    const webMap = new WebMap({
      basemap: 'gray-vector',
    });

    const view = new MapView({
      container: mapDivRef.current, // Use the ref here
      map: webMap,
      center: [-80.898651, 25.286615],
      zoom: 8,
      ui: {
        components: ["zoom", "attribution"], // Enable default zoom and attribution controls
      },
    });

    view.when(() => {
      console.log("MapView successfully initialized.");

      // Explicitly position the zoom buttons in the top-left corner
      view.ui.move("zoom", "top-left");
      console.log("Zoom buttons positioned in the top-left corner of the map container.");

      // Attach event listeners
      console.log("Attaching event listeners...");
      view.on('click', (event) => {
        console.log("Map click event triggered.");
        if (event.mapPoint) {
          const { latitude, longitude } = event.mapPoint;
          console.log(`Clicked at latitude: ${latitude}, longitude: ${longitude}`);
          setFormData((prevFormData) => ({
            ...prevFormData,
            lat: latitude.toFixed(6),
            lon: longitude.toFixed(6),
          }));
        } else {
          console.error("Map click event did not return a valid mapPoint.");
        }
      });

      view.on("mouse-wheel", (event) => {
        console.log("Mouse wheel event triggered.");
        // Allow default zoom behavior
      });

      view.on("drag", (event) => {
        console.log("Drag event triggered.");
        // Allow default pan behavior
      });

      // Debugging: Add logs for zoom button clicks
      const zoomInButton = document.querySelector(".esri-ui-top-left .esri-widget--zoom-in");
      const zoomOutButton = document.querySelector(".esri-ui-top-left .esri-widget--zoom-out");

      if (zoomInButton) {
        zoomInButton.addEventListener("click", () => {
          console.log("Zoom In button clicked.");
        });
      }

      if (zoomOutButton) {
        zoomOutButton.addEventListener("click", () => {
          console.log("Zoom Out button clicked.");
        });
      }
    }).catch((error) => {
      console.error("Error initializing MapView:", error);
    });

    // Debugging: Ensure the container is not blocked
    const mapContainer = mapDivRef.current;
    if (!mapContainer) {
      console.error("MapView container not found.");
      return;
    } else {
      console.log("MapView container found.");
    }

    // Ensure no other elements are blocking the map
    mapContainer.style.pointerEvents = "auto";

    // Debugging: Check if the map container has the correct dimensions
    console.log(`Map container dimensions: width=${mapContainer.offsetWidth}, height=${mapContainer.offsetHeight}`);

    // Debugging: Check if the MapView is properly attached to the container
    console.log("Checking MapView DOM attachment...");
    const mapViewElement = document.querySelector('#mapViewDiv');
    if (mapViewElement) {
      console.log("MapView DOM element found:", mapViewElement);
    } else {
      console.error("MapView DOM element not found.");
    }

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

    // Cleanup function to destroy the map view when the component unmounts
    return () => {
      console.log("Destroying MapView...");
      if (view) {
        view.destroy();
      }
    };
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
                <div id="mapViewDiv" ref={mapDivRef} style={{ height: '100vh', width: '100%' }}></div>
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
