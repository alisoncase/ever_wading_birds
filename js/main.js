// An interactive web map of wading bird sightings in Everglades National Park. 
// The primary user is the casual park visitor interested in learning about – and hoping to see – wading 
// birds commonly found in the park. Users will be able to look up information on the 16 different 
// wading bird species found in the park and submit a location-based sighting of a selected species 
// to the supabase database, which displays the sightings as a layer on the map for other visitors to view.


import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ekimvjwlyruqwmcnphoq.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY; // Corrected environment variable name
const supabase = createClient(supabaseUrl, supabaseKey)

import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';

// Initialize the map object
const map = L.map('map');

// Add US Topo Map tilelayer
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 20, 
    minZoom: 7,
    ext: 'png'
}).addTo(map);

// Set the view to Everglades National Park
map.setView([25.286615, -80.898651], 9); // Coordinates and zoom level

// Use only the required modules
const webMap = new WebMap({
  portalItem: {
    id: 'your-webmap-id'
  }
});

const view = new MapView({
  container: 'map',
  map: webMap
});