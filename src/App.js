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
  const [formSubmitted, setFormSubmitted] = useState(false);

  const mapDivRef = useRef(null);
  const viewRef = useRef(null);

  useEffect(() => {
    console.log("Initializing WebMap and MapView...");

    // Initialize the map
    const webMap = new WebMap({
      basemap: 'gray-vector',
    });

    const view = new MapView({
      container: mapDivRef.current, // Use the mapDivRef
      map: webMap,
      center: [-80.898651, 25.286615],
      zoom: 8,
      ui: {
        components: ["zoom", "attribution"], // Enable default zoom and attribution controls
      },
      popup: {
        dockEnabled: false, // Ensure the popup is not docked
        visible: true,      // Ensure the popup is visible
      },
    });

    viewRef.current = view;

    // Disable popups for basemap layers
    webMap.basemap.baseLayers.forEach((layer) => {
      layer.popupEnabled = false;
    });

    view.when(() => {
      console.log("MapView successfully initialized.");

      // Explicitly position the zoom buttons in the top-left corner
      view.ui.move("zoom", "top-left");

      // Attach click event listener for popups and form auto-population
      view.on('click', async (event) => {
        const response = await view.hitTest(event);
        const results = response.results;

        // Filter results to include only valid graphics with a popupTemplate
        const validResult = results.find((result) => {
          const layer = result.graphic.layer;
          return layer && layer.popupTemplate; // Ensure the layer has a popupTemplate
        });

        if (validResult) {
          const graphic = validResult.graphic;
          const attributes = graphic.attributes || {};
          const popupTemplate = graphic.layer.popupTemplate;

          view.popup.open({
            location: event.mapPoint,
            title: attributes.maplabel || popupTemplate.title || "No Title",
            content: popupTemplate.content || "No Content",
          });
        } else {
          view.popup.close();

          // Handle click-to-populate functionality
          const { latitude, longitude } = event.mapPoint;
          setFormData((prevFormData) => ({
            ...prevFormData,
            lat: latitude.toFixed(6), // Limit to 6 decimal places for clarity
            lon: longitude.toFixed(6),
          }));
        }
      });
    }).catch((error) => {
      console.error("Error initializing MapView:", error);
    });

    // Fetch and add roads and trails layers from Supabase
    const fetchRoadsAndTrails = async () => {
      const fetchLayerData = async (tableName, title, color) => {
        const { data, error } = await supabase.from(tableName).select('geom_geojson, maplabel');
        if (error) {
          console.error(`Error fetching ${title} data:`, error);
          return null;
        }

        const features = data.map((item, index) => {
          const geom = JSON.parse(item.geom_geojson);
          return {
            geometry: {
              type: 'polyline', // For roads and trails
              paths: geom.coordinates,
            },
            attributes: {
              objectid: index + 1, // Unique identifier for each feature
              maplabel: item.maplabel, // Name of the road or trail
            },
          };
        });

        return new FeatureLayer({
          source: features,
          fields: [
            { name: 'objectid', alias: 'ObjectID', type: 'oid' },
            { name: 'maplabel', alias: 'Name', type: 'string' },
          ],
          objectIdField: 'objectid',
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
          popupEnabled: true,
          popupTemplate: {
            title: '{maplabel}',
            content: '{maplabel}',
          },
          elevationInfo: {
            mode: "on-the-ground", // Ensure roads and trails are rendered on the ground
          },
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
      const { data, error } = await supabase.from('pois').select('poitype, geom_geojson, maplabel');
      if (error) {
        console.error('Error fetching POIs:', error);
        return;
      }

      const poitypeIcons = {
        "Boat Launch": "/img/Boat_Launch.svg",
        "Campground": "/img/Campground.svg",
        "Campsite": "/img/Campsite.svg",
        "Canoe / Kayak Access": "/img/Canoe_Kayak_Access.svg",
        "Entrance Station": "/img/Entrance_Station.svg",
        "Food Service": "/img/Food_Service.svg",
        "Parking Lot": "/img/Parking_Lot.svg",
        "Picnic Area": "/img/Picnic_Area.svg",
        "Ranger Station": "/img/Ranger_Station.svg",
        "Restroom": "/img/Restroom.svg",
        "Trailhead": "/img/Trailhead.svg",
        "Visitor Center": "/img/Visitor_Center.svg",
      };

      const poiLayersData = {};
      const poiLayers = []; // Keep track of POI layers for reordering

      data.forEach((poi) => {
        if (!poiLayersData[poi.poitype]) {
          const layer = new FeatureLayer({
            source: [],
            fields: [
              { name: 'objectid', alias: 'ObjectID', type: 'oid' },
              { name: 'poitype', alias: 'POI Type', type: 'string' },
              { name: 'maplabel', alias: 'Name', type: 'string' },
            ],
            objectIdField: 'objectid',
            geometryType: 'point',
            spatialReference: { wkid: 4326 },
            renderer: {
              type: 'simple',
              symbol: {
                type: 'picture-marker',
                url: poitypeIcons[poi.poitype],
                width: '24px',
                height: '24px',
              },
            },
            title: poi.poitype,
            visible: false,
            popupEnabled: true,
            popupTemplate: {
              title: '{maplabel}',
              content: `
                <b>Type:</b> {poitype}<br>
                <b>Name:</b> {maplabel}
              `,
            },
          });

          poiLayersData[poi.poitype] = layer;
          poiLayers.push(layer);
          webMap.add(layer);
        }

        const geom = JSON.parse(poi.geom_geojson);
        poiLayersData[poi.poitype].source.push({
          geometry: {
            type: 'point',
            longitude: geom.coordinates[0],
            latitude: geom.coordinates[1],
          },
          attributes: {
            objectid: poiLayersData[poi.poitype].source.length + 1,
            poitype: poi.poitype,
            maplabel: poi.maplabel,
          },
        });
      });

      view.when(() => {
        const allLayers = view.map.layers;
        poiLayers.forEach((layer) => {
          allLayers.remove(layer);
          allLayers.add(layer);
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

  const reorderLayersToTop = (poiLayers) => {
    const view = viewRef.current; // Access the view instance from the ref
    if (view) {
      view.when(() => {
        const allLayers = view.map.layers;
        console.log("Reordering POI layers to the top...");
        poiLayers.forEach((layer) => {
          if (allLayers.includes(layer)) {
            allLayers.remove(layer); // Remove the layer
            allLayers.add(layer); // Add it back to the top
            console.log(`Layer "${layer.title}" moved to the top.`);
          } else {
            console.warn(`Layer "${layer.title}" not found in map layers.`);
          }
        });
      });
    } else {
      console.error("View is not initialized.");
    }
  };

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

    // Use "lat" and "lon" to match the Supabase table schema
    const newSighting = {
      species,
      lat: parseFloat(lat), // Ensure lat is a number
      lon: parseFloat(lon), // Ensure lon is a number
      date,
      time,
    };

    const { error } = await supabase.from('sightings').insert([newSighting]);
    if (error) {
      console.error('Error submitting sighting:', error);
    } else {
      console.log('Sighting submitted successfully:', newSighting);
      setFormSubmitted(true); // Show the thank-you message
    }
  };

  const resetForm = () => {
    setFormData({ species: '', lat: '', lon: '', date: '', time: '' });
    setSelectedBird(null);
    setFormSubmitted(false); // Show the form again
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
                  {formSubmitted ? (
                    <div className="thank-you-message text-center">
                      <h4>Thank you for your submission!</h4>
                      <button className="btn btn-primary mt-3" onClick={resetForm}>
                        Submit Another Sighting
                      </button>
                    </div>
                  ) : (
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
                  )}
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
