/*
var colors = {
  blue: "rgb(54, 162, 235)",
  green: "rgb(75, 192, 192)",
  grey: "rgb(201, 203, 207)",
  orange: "rgb(255, 159, 64)",
  purple: "rgb(153, 102, 255)",
  red: "rgb(255, 99, 132)",
  yellow: "rgb(255, 205, 86)"
}*/

var colors = {
  red: "#FE0000",
  red_orange: "#FD610E",
  orange: "#FF8001",
  orange_yellow: "#FDA609",
  yellow: "#FFFF02",
  yellow_green: "#A1D01E",
  green: "#4C954C",
  super_green: "#497C42"
}

var chart
var ctx = document.getElementById('chart_autovalutazione').getContext('2d')

var background_color = [
  colors.red_orange,
  colors.orange,
  colors.orange_yellow,
  colors.yellow,
  colors.yellow_green,
  colors.green,
  colors.super_green
]

var regions_disambiguation = {
  "piemonte": "PIEMONTE",
  "lombardia": "LOMBARDIA",
  "veneto": "VENETO",
  "friuli venezia giulia": "FRIULI-VENEZIA G.",
  "liguria": "LIGURIA",
  "emilia-romagna": "EMILIA ROMAGNA",
  "umbria": "UMBRIA",
  "toscana": "TOSCANA",
  "marche": "MARCHE",
  'abruzzo': "ABRUZZO",
  'lazio': "LAZIO",
  'molise': "MOLISE",
  'campania': "CAMPANIA",
  'puglia': "PUGLIA",
  'basilicata': "BASILICATA",
  'calabria': "CALABRIA",
  'sicilia': "SICILIA",
  'sardegna': "SARDEGNA"
}

function updateChartRegion(region_name) {

  url_region_data = "https://raw.githubusercontent.com/sebucci/sebucci.github.io/master/Json/percregioni.json"

  $.ajax({
      url: url_region_data,
      type: 'GET'
    })

    // On success
    .done(function (regions) {

      regions = JSON.parse(regions)

      let data = []

      // Get right region
      for (region of regions) {
        if (region["regione"] == regions_disambiguation[region_name]) {
          data = fixData(region)
          break
        }
      }

      updateChart(data)
    })
}

function updateChartProvince(province_name) {

  url_province_data = 'https://raw.githubusercontent.com/sebucci/sebucci.github.io/master/Json/percprov.json'

  $.ajax({
      url: url_province_data,
      type: 'GET'
    })

    // On success
    .done(function (provinces) {

      provinces = JSON.parse(provinces)

      let data = []

      // Get right region
      for (province of provinces) {
        if (province["provincia"] == province_name) {
          data = fixData(province)
          break
        }
      }

      updateChart(data)
    })
}

function setupChart() {

  url_italy_data = "https://raw.githubusercontent.com/sebucci/sebucci.github.io/master/Json/percitalia.json"

  // Get data
  $.ajax({
      url: url_italy_data,
      type: 'GET'
    })

    // On success
    .done(function (data) {

      let real_data = []

      for (elem of JSON.parse(data))
        real_data.push(Number(elem["percentuale"]).toFixed(2))

      // Labels
      var labels = ["1", "2", "3", "4", "5", "6", "7"]

      chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
          label: 'TMP',
          datasets: [{
            backgroundColor: background_color,
            data: real_data
          }],
          labels: labels
        },

        // Configuration options go here
        options: {
          responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Autovalutazione scuole'
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      })
    })
}

/**
 * 
 * @param {*} data 
 */
function updateChart(data) {

  let real_data = []

  for (elem of data)
    real_data.push(Number(elem["percentuale"]).toFixed(2))

  // Remove dataset 
  chart.data.datasets.forEach((dataset) => {
    dataset.data = []
  })

  console.log(chart.data.datasets)

  // Re-add dataset
  chart.data.datasets.forEach((dataset) => {
    dataset.data = real_data
  })

  console.log(chart.data.datasets)

  // Update dataset
  chart.update()

}

/**
 * 
 * @param {*} element 
 */
function fixData(element) {

  return [{
    "valutazione": "1",
    "percentuale": element["1perc"],
    "numero": element["1tot"]
  }, {
    "valutazione": "2",
    "percentuale": element["2perc"],
    "numero": element["2tot"]
  }, {
    "valutazione": "3",
    "percentuale": element["3perc"],
    "numero": element["3tot"]
  }, {
    "valutazione": "4",
    "percentuale": element["4perc"],
    "numero": element["4tot"]
  }, {
    "valutazione": "5",
    "percentuale": element["5perc"],
    "numero": element["5tot"]
  }, {
    "valutazione": "6",
    "percentuale": element["6perc"],
    "numero": element["6tot"]
  }, {
    "valutazione": "7",
    "percentuale": element["7perc"],
    "numero": element["7tot"]
  }]
}

setupChart()