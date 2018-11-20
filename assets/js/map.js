/**
 * 
 * 
 */

// Init map
var mymap = L.map('mapid', {
  zoomControl: false,
  maxZoom: 9,
  minZoom: 6
}).setView([41.459, 12.700], 6);

//#region Tiles

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
  minZoom: 6,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1Ijoic3Bpbm85MzMwIiwiYSI6ImNqb2gzMXFtaTAwMDIzdnFkMGlsOG1iZGUifQ.udQVi4fDBh0cKQO9CxC5gQ'
})

// Thunderforest
var Thunderforest_SpinalMap = L.tileLayer('https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey={apikey}', {
  attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  apikey: '<your apikey>',
  maxZoom: 22
});

//#endregion

// Add tile
mymap.addLayer(Wikimedia)

// Add GeoJson layer online from the url
var url_regions = "https://raw.githubusercontent.com/stefanocudini/leaflet-geojson-selector/master/examples/italy-regions.json"

// Define provinces url
var url_provinces = {
  piemonte: "https://raw.githubusercontent.com/Dataninja/geo-shapes/master/italy/regions/1/provinces.geojson",
  valle_d_aosta: "https://raw.githubusercontent.com/Dataninja/geo-shapes/master/italy/regions/2/provinces.geojson",
  lombardia: "https://raw.githubusercontent.com/Dataninja/geo-shapes/master/italy/regions/3/provinces.geojson",
  trentino_alto_adige: "https://raw.githubusercontent.com/Dataninja/geo-shapes/master/italy/regions/4/provinces.geojson",
  veneto: "https://raw.githubusercontent.com/Dataninja/geo-shapes/master/italy/regions/5/provinces.geojson",
  friuli_venezia_giulia: "https://raw.githubusercontent.com/Dataninja/geo-shapes/master/italy/regions/6/provinces.geojson",
  liguria: "https://raw.githubusercontent.com/Dataninja/geo-shapes/master/italy/regions/7/provinces.geojson",
  emilia_romagna: "https://raw.githubusercontent.com/Dataninja/geo-shapes/master/italy/regions/8/provinces.geojson",
  toscana: "https://raw.githubusercontent.com/Dataninja/geo-shapes/master/italy/regions/9/provinces.geojson",
  umbria: "https://raw.githubusercontent.com/Dataninja/geo-shapes/master/italy/regions/10/provinces.geojson",
  marche: "https://raw.githubusercontent.com/Dataninja/geo-shapes/master/italy/regions/11/provinces.geojson",
  lazio: "https://raw.githubusercontent.com/Dataninja/geo-shapes/master/italy/regions/12/provinces.geojson",
  abruzzo: "https://raw.githubusercontent.com/Dataninja/geo-shapes/master/italy/regions/13/provinces.geojson",
  molise: "https://raw.githubusercontent.com/Dataninja/geo-shapes/master/italy/regions/14/provinces.geojson",
  campania: "https://raw.githubusercontent.com/Dataninja/geo-shapes/master/italy/regions/15/provinces.geojson",
  puglia: "https://raw.githubusercontent.com/Dataninja/geo-shapes/master/italy/regions/16/provinces.geojson",
  basilicata: "https://raw.githubusercontent.com/Dataninja/geo-shapes/master/italy/regions/17/provinces.geojson",
  calabria: "https://raw.githubusercontent.com/Dataninja/geo-shapes/master/italy/regions/18/provinces.geojson",
  sicilia: "https://raw.githubusercontent.com/Dataninja/geo-shapes/master/italy/regions/19/provinces.geojson",
  sardegna: "https://raw.githubusercontent.com/Dataninja/geo-shapes/master/italy/regions/20/provinces.geojson"
}

var region_style = {
  style: {
    fillColor: 'rgb(255, 159, 64)',
    weight: 2,
    opacity: .5,
    color: 'rgb(255, 159, 64)', //Outline color
    fillOpacity: 0.7
  }
}

var province_style = {
  style: {
    fillColor: 'rgb(255, 99, 132)',
    opacity: 1,
    color: 'rgb(255, 99, 132)',
    fillOpacity: 0.7
  }
}

// Define regions layer
var region_layer = new L.GeoJSON.AJAX(url_regions, region_style)

// Define provinces layers
var piemonte_layer = new L.GeoJSON.AJAX(url_provinces.piemonte, province_style)
var valle_d_aosta_layer = new L.GeoJSON.AJAX(url_provinces.valle_d_aosta, province_style)
var lombardia_layer = new L.GeoJSON.AJAX(url_provinces.lombardia, province_style)
var trentino_alto_adige_layer = new L.GeoJSON.AJAX(url_provinces.trentino_alto_adige, province_style)
var veneto_layer = new L.GeoJSON.AJAX(url_provinces.veneto, province_style)
var friuli_venezia_giulia_layer = new L.GeoJSON.AJAX(url_provinces.friuli_venezia_giulia, province_style)
var liguria_layer = new L.GeoJSON.AJAX(url_provinces.liguria, province_style)
var emilia_romagna_layer = new L.GeoJSON.AJAX(url_provinces.emilia_romagna, province_style)
var toscana_layer = new L.GeoJSON.AJAX(url_provinces.toscana, province_style)
var umbria_layer = new L.GeoJSON.AJAX(url_provinces.umbria, province_style)
var marche_layer = new L.GeoJSON.AJAX(url_provinces.marche, province_style)
var lazio_layer = new L.GeoJSON.AJAX(url_provinces.lazio, province_style)
var abruzzo_layer = new L.GeoJSON.AJAX(url_provinces.abruzzo, province_style)
var molise_layer = new L.GeoJSON.AJAX(url_provinces.molise, province_style)
var campania_layer = new L.GeoJSON.AJAX(url_provinces.campania, province_style)
var puglia_layer = new L.GeoJSON.AJAX(url_provinces.puglia, province_style)
var basilicata_layer = new L.GeoJSON.AJAX(url_provinces.basilicata, province_style)
var calabria_layer = new L.GeoJSON.AJAX(url_provinces.calabria, province_style)
var sicilia_layer = new L.GeoJSON.AJAX(url_provinces.sicilia, province_style)
var sardegna_layer = new L.GeoJSON.AJAX(url_provinces.sardegna, province_style)


// Add default layer
mymap.addLayer(region_layer)

//#region Map events

// Handle click event
region_layer.on('click', function (e) {

  removeProvinceLayer()

  // Zoom over the region
  mymap.fitBounds(e.layer.getBounds())

  // Take name
  let region_name = e.layer.feature.properties.name

  // Remove regions layer
  //mymap.removeLayer(region_layer)

  // Add province layer
  switch (region_name) {

    case 'valle d\'aosta':
      mymap.addLayer(valle_d_aosta_layer)
      break

    case 'piemonte':
      mymap.addLayer(piemonte_layer)
      break

    case 'lombardia':
      mymap.addLayer(lombardia_layer)
      break

    case 'piemonte':
      mymap.addLayer(piemonte_layer)
      break

    case 'trentino-alto adige/sudtirol':
      mymap.addLayer(trentino_alto_adige_layer)
      break

    case 'veneto':
      mymap.addLayer(veneto_layer)
      break

    case 'friuli venezia giulia':
      mymap.addLayer(friuli_venezia_giulia_layer)
      break

    case 'liguria':
      mymap.addLayer(liguria_layer)
      break

    case 'emilia-romagna':
      mymap.addLayer(emilia_romagna_layer)
      break

    case 'umbria':
      mymap.addLayer(umbria_layer)
      break

    case 'toscana':
      mymap.addLayer(toscana_layer)
      break

    case 'marche':
      mymap.addLayer(marche_layer)
      break

    case 'abruzzo':
      mymap.addLayer(abruzzo_layer)
      break

    case 'lazio':
      mymap.addLayer(lazio_layer)
      break

    case 'molise':
      mymap.addLayer(molise_layer)
      break

    case 'campania':
      mymap.addLayer(campania_layer)
      break

    case 'puglia':
      mymap.addLayer(puglia_layer)
      break

    case 'basilicata':
      mymap.addLayer(basilicata_layer)
      break

    case 'calabria':
      mymap.addLayer(calabria_layer)
      break

    case 'sicilia':
      mymap.addLayer(sicilia_layer)
      break

    case 'sardegna':
      mymap.addLayer(sardegna_layer)
      break
  }

}).addTo(mymap)

// Handle zoom
mymap.on('zoomend', function () {

  // Zoom level
  let zoom_level = mymap.getZoom()

  if (zoom_level < 7) {

    // Remove all layer
    removeProvinceLayer()

    // Add map and layer
    mymap.addLayer(Wikimedia)
    mymap.addLayer(region_layer)
  }
})

//#endregion

//#region functions

/**
 * Remove all layers
 */
function removeProvinceLayer() {
  mymap.removeLayer(piemonte_layer)
  mymap.removeLayer(valle_d_aosta_layer)
  mymap.removeLayer(lombardia_layer)
  mymap.removeLayer(trentino_alto_adige_layer)
  mymap.removeLayer(veneto_layer)
  mymap.removeLayer(friuli_venezia_giulia_layer)
  mymap.removeLayer(liguria_layer)
  mymap.removeLayer(emilia_romagna_layer)
  mymap.removeLayer(toscana_layer)
  mymap.removeLayer(umbria_layer)
  mymap.removeLayer(marche_layer)
  mymap.removeLayer(lazio_layer)
  mymap.removeLayer(umbria_layer)
  mymap.removeLayer(lazio_layer)
  mymap.removeLayer(abruzzo_layer)
  mymap.removeLayer(molise_layer)
  mymap.removeLayer(campania_layer)
  mymap.removeLayer(puglia_layer)
  mymap.removeLayer(basilicata_layer)
  mymap.removeLayer(calabria_layer)
  mymap.removeLayer(sicilia_layer)
  mymap.removeLayer(sardegna_layer)
}

/** */
function reset() {
  removeProvinceLayer()
  mymap.setZoom(6)
}

//#endregion

// Anchor map
mymap.dragging.disable();
mymap.touchZoom.disable();
mymap.doubleClickZoom.disable();
mymap.scrollWheelZoom.disable();
mymap.boxZoom.disable();
mymap.keyboard.disable();
if (mymap.tap) mymap.tap.disable();
document.getElementById('mapid').style.cursor = 'default';

$(document).ready(function () {
  $('#btn_reset_view').on('click', function () {
    reset()
  })
})