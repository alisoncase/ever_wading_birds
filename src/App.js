import React, { useEffect, useState, Suspense, useRef } from 'react';
import MapView from '@arcgis/core/views/MapView.js';
import WebMap from '@arcgis/core/WebMap.js';
import Locate from '@arcgis/core/widgets/Locate.js';
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
    date: new Date().toISOString().split('T')[0], // Pre-populate with the current date in YYYY-MM-DD format
    time: new Date().toLocaleTimeString('en-US', { hour12: false }).slice(0, 5), // Pre-populate with the current time in HH:mm format
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [sightingsLayer, setSightingsLayer] = useState(null); // Add state for sightings layer
  const [sightingsFeatures, setSightingsFeatures] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState('');
  const [isSightingsLayerVisible, setIsSightingsLayerVisible] = useState(false);
  const [isPOILayersMinimized, setIsPOILayersMinimized] = useState(false);
  const [isSightingsLayersMinimized, setIsSightingsLayersMinimized] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

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
      zoom: 9,
      ui: {
        components: ["zoom", "attribution"], // Enable default zoom and attribution controls
      },
      popup: {
        dockEnabled: false, // Ensure the popup is not docked
        visible: true,      // Ensure the popup is visible
      },
    });

    viewRef.current = view;

    // Add the Locate widget
    const locateWidget = new Locate({
      view: view, // Attach the widget to the MapView
      useHeadingEnabled: false, // Disable map rotation based on device heading
      goToOverride: (locateViewpoint) => {
        locateViewpoint.target.scale = 5000; // Set the zoom scale when locating
        return locateViewpoint;
      },
    });

    // Add the Locate widget to the top-left corner of the map
    view.ui.add(locateWidget, {
      position: "top-left",
    });

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
              color: `rgba(${color}, 0.5)`,
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

      const roadsLayer = await fetchLayerData('roads', 'Roads', '255, 255, 255'); // RGB for roads
      const trailsLayer = await fetchLayerData('trails', 'Trails', '77, 80, 75'); // RGB for trails

      if (roadsLayer) webMap.add(roadsLayer);
      if (trailsLayer) webMap.add(trailsLayer);

      // Reorder Trails and Roads to the back
      if (roadsLayer) webMap.layers.reorder(roadsLayer, 0); // Move Roads to the back
      if (trailsLayer) webMap.layers.reorder(trailsLayer, 0); // Move Trails to the back
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
        "Boat Launch": `${process.env.PUBLIC_URL}/img/Boat_Launch.svg`,
        "Campground": `${process.env.PUBLIC_URL}/img/Campground.svg`,
        "Campsite": `${process.env.PUBLIC_URL}/img/Campsite.svg`,
        "Canoe / Kayak Access": `${process.env.PUBLIC_URL}/img/Canoe_Kayak_Access.svg`,
        "Entrance Station": `${process.env.PUBLIC_URL}/img/Entrance_Station.svg`,
        "Food Service": `${process.env.PUBLIC_URL}/img/Food_Service.svg`,
        "Parking Lot": `${process.env.PUBLIC_URL}/img/Parking_Lot.svg`,
        "Picnic Area": `${process.env.PUBLIC_URL}/img/Picnic_Area.svg`,
        "Ranger Station": `${process.env.PUBLIC_URL}/img/Ranger_Station.svg`,
        "Restroom": `${process.env.PUBLIC_URL}/img/Restroom.svg`,
        "Trailhead": `${process.env.PUBLIC_URL}/img/Trailhead.svg`,
        "Visitor Center": `${process.env.PUBLIC_URL}/img/Visitor_Center.svg`,
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

    const fetchSightingsLayer = async () => {
      const { data, error } = await supabase.from('sightings').select('*');
      if (error) {
        console.error('Error fetching sightings:', error);
        return null;
      }
    
      const features = data.map((sighting, index) => ({
        geometry: {
          type: 'point',
          longitude: sighting.lon,
          latitude: sighting.lat,
        },
        attributes: {
          sighting_id: sighting.sighting_id,
          species: sighting.species,
          formatted_date: new Date(sighting.date).toLocaleDateString('en-US'), // Ensure this is a string
          time: sighting.time,
        },
      }));
    
      setSightingsFeatures(features); // Store the features in state
      console.log('Fetched Sightings Data:', data);
    
      const sightingsLayer = new FeatureLayer({
        source: features,
        fields: [
          { name: 'sighting_id', alias: 'Sighting ID', type: 'oid' },
          { name: 'species', alias: 'Species', type: 'string' },
          { name: 'formatted_date', alias: 'Date', type: 'string' }, // Field name is 'formatted_date'
          { name: 'time', alias: 'Time', type: 'string' },
        ],
        objectIdField: 'sighting_id',
        geometryType: 'point',
        spatialReference: { wkid: 4326 },
        renderer: {
          type: 'simple',
          symbol: {
            type: 'picture-marker',
            url: '/img/Bird.svg', // Path to the Bird.svg icon
            width: '24px',
            height: '24px',
          },
        },
        title: 'Sightings',
        visible: false, // Initially hidden
        popupTemplate: {
          title: 'Sighting Details',
          content: `
            <b>Species:</b> {species}<br>
            <b>Date:</b> {formatted_date}<br> <!-- Use the renamed field -->
            <b>Time:</b> {time}
          `,
        },
      });
    
      webMap.add(sightingsLayer);
      setSightingsLayer(sightingsLayer); // Save the layer in state for toggling and filtering
    };

    fetchSightingsLayer();

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

  const toggleLayerVisibility = (layerType) => {
    const view = viewRef.current;
  
    if (layerType === 'sightings') {
      if (sightingsLayer) {
        const newVisibility = !isSightingsLayerVisible;
        sightingsLayer.visible = newVisibility;
  
        // Explicitly update the layer visibility in the map
        if (view) {
          const layerInMap = view.map.findLayerById(sightingsLayer.id);
          if (layerInMap) {
            layerInMap.visible = newVisibility;
          }
        }
  
        setIsSightingsLayerVisible(newVisibility); // Update the visibility state
      }
    } else {
      const layer = poiLayers[layerType];
      if (layer) {
        layer.visible = !layer.visible;
  
        // Explicitly update the layer visibility in the map
        if (view) {
          const layerInMap = view.map.findLayerById(layer.id);
          if (layerInMap) {
            layerInMap.visible = layer.visible;
          }
        }
  
        setPoiLayers({ ...poiLayers, [layerType]: layer });
      }
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
  
      // Re-fetch sightings data and update the layer
      const { data, error: fetchError } = await supabase.from('sightings').select('*');
      if (fetchError) {
        console.error('Error fetching updated sightings:', fetchError);
      } else {
        console.log('Updated sightings data:', data);
        console.log('Sightings data:', data.map((s) => s.date));
  
        // Update the sightings features in state
        const updatedFeatures = data.map((sighting, index) => ({
          geometry: {
            type: 'point',
            longitude: sighting.lon,
            latitude: sighting.lat,
          },
          attributes: {
            sighting_id: sighting.sighting_id,
            species: sighting.species,
            formatted_date: new Date(sighting.date).toLocaleDateString('en-US'), // Ensure this is a string
            time: sighting.time,
          },
        }));
        setSightingsFeatures(updatedFeatures);
        console.log('Updated Features:', updatedFeatures);
  
        // Remove the old sightings layer from the map
        const view = viewRef.current;
        if (view && sightingsLayer) {
          const layerInMap = view.map.findLayerById(sightingsLayer.id);
          if (layerInMap) {
            view.map.remove(layerInMap);
          }
        }
  
        // Create a new sightings layer with the updated features
        const newSightingsLayer = new FeatureLayer({
          source: updatedFeatures,
          fields: [
            { name: 'sighting_id', alias: 'Sighting ID', type: 'oid' },
            { name: 'species', alias: 'Species', type: 'string' },
            { name: 'formatted_date', alias: 'Date', type: 'string' }, // Field name is 'formatted_date'
            { name: 'time', alias: 'Time', type: 'string' },
          ],
          objectIdField: 'sighting_id',
          geometryType: 'point',
          spatialReference: { wkid: 4326 },
          renderer: {
            type: 'simple',
            symbol: {
              type: 'picture-marker',
              url: `${process.env.PUBLIC_URL}/img/Bird.svg`, // Use PUBLIC_URL for the correct path
              width: '24px',
              height: '24px',
            },
          },
          title: 'Sightings',
          visible: isSightingsLayerVisible, // Use the current visibility state
          popupTemplate: {
            title: 'Sighting Details',
            content: (feature) => {
              const attributes = feature.graphic.attributes;
              console.log('Popup Attributes:', attributes);
              return `
                <b>Species:</b> ${attributes.species}<br>
                <b>Date:</b> ${attributes.formatted_date}<br>
                <b>Time:</b> ${attributes.time}
              `;
            },
          },
        });
  
        // Add the new sightings layer to the map
        if (view) {
          view.map.add(newSightingsLayer);
        }
        setSightingsLayer(newSightingsLayer); // Update the state with the new layer
      }
    }
  };

  const resetForm = () => {
    setFormData({ species: '', lat: '', lon: '', date: '', time: '' });
    setSelectedBird(null);
    setFormSubmitted(false); // Show the form again
  };

  const applySightingsFilters = () => {
    if (!sightingsLayer || sightingsFeatures.length === 0) {
      console.error('Sightings layer or its features are not initialized.');
      return;
    }
  
    const filteredFeatures = sightingsFeatures.filter((feature) => {
      const { species, date } = feature.attributes;
  
      // Filter by species
      if (selectedSpecies && species !== selectedSpecies) {
        return false;
      }
  
      // Filter by date range
      if (startDate && new Date(date) < new Date(startDate)) {
        return false;
      }
      if (endDate && new Date(date) > new Date(endDate)) {
        return false;
      }
  
      return true;
    });
  
    const view = viewRef.current;
  
    // Remove the existing sightings layer from the map
    if (view && sightingsLayer) {
      const layerInMap = view.map.findLayerById(sightingsLayer.id);
      if (layerInMap) {
        view.map.remove(layerInMap);
      }
    }
  
    // Create a new sightings layer with the filtered features
    const newSightingsLayer = new FeatureLayer({
      source: filteredFeatures,
      fields: [
        { name: 'sighting_id', alias: 'Sighting ID', type: 'oid' },
        { name: 'species', alias: 'Species', type: 'string' },
        { name: 'formatted_date', alias: 'Date', type: 'string' }, // Field name is 'formatted_date'
        { name: 'time', alias: 'Time', type: 'string' },
      ],
      objectIdField: 'sighting_id',
      geometryType: 'point',
      spatialReference: { wkid: 4326 },
      renderer: {
        type: 'simple',
        symbol: {
          type: 'picture-marker',
          url: '/img/Bird.svg', // Path to the Bird.svg icon
          width: '24px',
          height: '24px',
        },
      },
      title: 'Sightings',
      visible: isSightingsLayerVisible, // Use the current visibility state
      popupTemplate: {
        title: 'Sighting Details',
        content: `
          <b>Species:</b> {species}<br>
          <b>Date:</b> {expression/formatDate}<br>
          <b>Time:</b> {time}
        `,
        expressionInfos: [
          {
            name: 'formatDate',
            title: 'Formatted Date',
            expression: `
              var dateField = $feature.formatted_date;
              if (IsEmpty(dateField)) {
                return "No Date";
              }
              return dateField; // Use the preformatted string
            `,
          },
        ],
      },
    });
  
    // Add the new layer to the map and update the state
    if (view) {
      view.map.add(newSightingsLayer);
    }
    setSightingsLayer(newSightingsLayer);
  };

  return (
    <Router basename="/ever_wading_birds"> {/* Add the basename */}
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
                            className="img-fluid bird-image mb-2" // Add the bird-image class here
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

                      {/* Add the message here */}
                      <p className="text-muted mb-3">
                        Click anywhere on the map to populate the latitude and longitude fields.
                      </p>

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
                          value={formData.date} // Bind to formData.date
                          onChange={handleFormChange} // Allow user to modify
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
                          value={formData.time} // Bind to formData.time
                          onChange={handleFormChange} // Allow user to modify
                          required
                        />
                      </div>

                      <button type="submit" className="btn btn-primary w-100">Submit Sighting</button>
                    </form>
                  )}
                </div>
                {/* Points of Interest Layer */}
                  <div
                    className={`layer-toggles-wrapper ${isPOILayersMinimized ? 'minimized' : ''}`}
                    style={{
                      position: 'absolute',
                      bottom: '10px', // Position at the bottom
                      left: '10px', // Align to the bottom-left corner
                      zIndex: 1000, // Ensure it is above the map
                    }}
                  >
                    <div className="layer-toggles">
                      <div className="layer-header">
                        <h5>Points of Interest</h5>
                        <button
                          className="btn btn-sm btn-outline-secondary minimize-button"
                          onClick={() => {
                            setIsPOILayersMinimized(!isPOILayersMinimized);
                            console.log('isPOILayersMinimized:', !isPOILayersMinimized);
                          }}
                        >
                          {isPOILayersMinimized ? '+' : '-'}
                        </button>
                      </div>
                      {!isPOILayersMinimized && (
                        <>
                          {Object.keys(poiLayers)
                            .sort((a, b) => a.localeCompare(b)) // Sort the keys alphabetically
                            .map((poitype) => (
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
                        </>
                      )}
                    </div>
                  </div>

                  {/* Sightings Layer */}
                  <div
                    className={`layer-toggles-wrapper ${isSightingsLayersMinimized ? 'minimized' : ''}`}
                    style={{
                      position: 'absolute',
                      bottom: '10px', // Position at the bottom
                      left: '50%', // Center horizontally
                      transform: 'translateX(-50%)', // Adjust to center the container
                      zIndex: 1000, // Ensure it is above the map
                    }}
                  >
                    <div className="layer-toggles">
                      <div className="layer-header">
                        <h5>Sightings</h5>
                        <button
                          className="btn btn-sm btn-outline-secondary minimize-button"
                          onClick={() => {
                            setIsSightingsLayersMinimized(!isSightingsLayersMinimized);
                            console.log('isSightingsLayersMinimized:', !isSightingsLayersMinimized);
                          }}
                        >
                          {isSightingsLayersMinimized ? '+' : '-'}
                        </button>
                      </div>
                      {!isSightingsLayersMinimized && (
                        <>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              id="sightingsLayerToggle"
                              className="form-check-input"
                              checked={isSightingsLayerVisible}
                              onChange={() => toggleLayerVisibility('sightings')}
                            />
                            <label htmlFor="sightingsLayerToggle" className="form-check-label">
                              View Sightings
                            </label>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="speciesFilter" className="form-label">Filter by Species:</label>
                            <select
                              id="speciesFilter"
                              className="form-select"
                              value={selectedSpecies}
                              onChange={(e) => setSelectedSpecies(e.target.value)}
                            >
                              <option value="">-- All Species --</option>
                              {birds.map((bird) => (
                                <option key={bird.species} value={bird.species}>
                                  {bird.species}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="startDate" className="form-label">Start Date:</label>
                            <input
                              type="date"
                              id="startDate"
                              className="form-control"
                              value={startDate}
                              onChange={(e) => setStartDate(e.target.value)}
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="endDate" className="form-label">End Date:</label>
                            <input
                              type="date"
                              id="endDate"
                              className="form-control"
                              value={endDate}
                              onChange={(e) => setEndDate(e.target.value)}
                            />
                          </div>

                          <button className="btn btn-primary w-100" onClick={applySightingsFilters}>
                            Apply Filters
                          </button>
                        </>
                      )}
                    </div>
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
