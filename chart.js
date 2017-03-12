var verizonLine = [80, 140, 160, 180];
var attLine = [60, 115, 135, 155];
var tmobLine = [70, 100, 140, 160];
var sprintLine = [50, 90, 90, 90];
var numberOfLines = ['1 Line', '2 Lines', '3 Lines', '4 Lines'];

var ctx = document.getElementById('myChart').getContext('2d');

var chartData = {
  type: 'bar',
  data: {
    labels: numberOfLines,
    datasets: [
      {
      label: 'AT&T',
      data: attLine,
      backgroundColor: 'blue',
      borderColor: 'orange',
      borderWidth: 1,
    },
      {
      label: 'Verizon',
      data: verizonLine,
      backgroundColor: 'red',
      borderColor: 'grey',
      borderWidth: 1,
    },
      {
      label: 'T-Mobile',
      data: tmobLine,
      backgroundColor: 'magenta',
      borderColor: 'black',
      borderWidth: 1,
    },
      {
      label: 'Sprint',
      data: sprintLine,
      backgroundColor: 'yellow',
      borderColor: 'black',
      borderWidth: 1,
    },
  ],
  },
};

var myChart = new Chart(ctx, chartData);
