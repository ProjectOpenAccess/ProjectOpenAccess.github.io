// Init map
var mymap = L.map('mapid').setView([41.459, 12.700], 7);

// Wikimedia tile
var Wikimedia = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
  attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
  minZoom: 1,
  maxZoom: 19
});

//mapbox tile
var Mapbox = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1Ijoic3Bpbm85MzMwIiwiYSI6ImNqb2gzMXFtaTAwMDIzdnFkMGlsOG1iZGUifQ.udQVi4fDBh0cKQO9CxC5gQ'
})

// Add tile
Wikimedia.addTo(mymap)

// Add GeoJson layer online from the url
var url = "https://raw.githubusercontent.com/stefanocudini/leaflet-geojson-selector/master/examples/italy-regions.json"
var geojsonLayer = new L.GeoJSON.AJAX(url);
geojsonLayer.addTo(mymap);

// Anchor map
mymap.dragging.disable();
mymap.touchZoom.disable();
mymap.doubleClickZoom.disable();
mymap.scrollWheelZoom.disable();
mymap.boxZoom.disable();
mymap.keyboard.disable();
if (mymap.tap) mymap.tap.disable();
document.getElementById('mapid').style.cursor = 'default';