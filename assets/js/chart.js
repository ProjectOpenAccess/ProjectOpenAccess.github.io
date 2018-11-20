var colors = {
  blue: "rgb(54, 162, 235)",
  green: "rgb(75, 192, 192)",
  grey: "rgb(201, 203, 207)",
  orange: "rgb(255, 159, 64)",
  purple: "rgb(153, 102, 255)",
  red: "rgb(255, 99, 132)",
  yellow: "rgb(255, 205, 86)"
}

// Data
var data = [0, 10, 5, 2, 20, 30, 45]

// Labels
var labels = ["1", "2", "3", "4", "5", "6", "7"]

var ctx = document.getElementById('chart_autovalutazione').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'doughnut',

  // The data for our dataset
  data: {

    datasets: [{
      backgroundColor: [
        colors.blue,
        colors.green,
        colors.grey,
        colors.orange,
        colors.purple,
        colors.red,
        colors.yellow
      ],
      data: data
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
});