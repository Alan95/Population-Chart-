'use strict';

    //Global options
    Chart.defaults.global.defaultFontFamily = 'Lato';

    //Function

    const createConfig = (config, left = 0 , right = 0, bottom = 0, top = 0) => {

        return {
          type: config ,
          data: {
            labels: ['Tokyo', 'Delhi', 'Shanghai', 'Mexico City', 'São Paulo', 'Mumbai', 'Osaka', 'Beijing'],
            datasets: [{
              label: 'Population',
              data: [
                37833000,

                24953000,

                22991000,

                20843000,

                20831000,

                20741000,

                20123000,

                19520000,
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',

              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              display: true ,
              yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
              }]
            },
          title:{
              display: true,
              fontSize: 25,
            },
            legend: {
              display: false,
                labels: {
                  fontColor: 'black',
                  fontSize: '16',
                }
              },
            layout:{
              padding: {
                left: left,
                right: right,
                bottom: bottom,
                top: top
              }
            }
           }
         };
}
      //Initialization
window.onload = () => {
         let myChart = document.getElementById('myChart').getContext('2d');
         let massBarChart = new Chart(myChart, createConfig('bar'));
         let secondChart = document.getElementById('secondChart').getContext('2d');
         let massLineChart = new Chart(secondChart, createConfig('line'));
         let thirdChart = document.getElementById('thirdChart').getContext('2d');
         let massPieChart = new Chart(thirdChart, createConfig('polarArea', 0, 0, 200, 0));
         let fourthChart = document.getElementById('fourthChart').getContext('2d');
         let massRadarChart = new Chart(fourthChart, createConfig('horizontalBar'));
}
