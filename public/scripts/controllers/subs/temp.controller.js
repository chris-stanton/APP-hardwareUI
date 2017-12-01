myApp.controller('TempController',['InitFactory', '$location', 'alertify', function(InitFactory, $location, alertify) {

  console.log('TempController running...');

  // defining this
  const self = this;

  // init data from arduino
  self.uistatus = InitFactory.arduinoObject;

  // range state change listener for footer status
  self.tempChange = (uistatus) => {
    if(uistatus <= 69) {
      self.status = 'Temp is to LOW';
    } else if(uistatus > 69 && uistatus < 80) {
      self.status = 'Temp is OPTIMAL';
    } else if(uistatus >= 80) {
      self.status = 'Temp is to HIGH';
    } else {
      self.status = 'Error finding TEMP status';
      alertify.error("Error finding TEMP status");
      console.log("Error finding TEMP status");
    }
  };

  // gets footer status on init
  let uistatus = self.uistatus.temp;
  // controller value on init
  self.tempChange(uistatus);

  // chart.js config
  let ctx = document.getElementById("tempChart").getContext('2d');
  let myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["", "", "", "", "", "", "", "", "", ""],
      datasets: [
        {
          label: 'Temp (F)',
          hidden: false,
          data: [70, 71, 72, 73, 74, 75, 76, 72, 71, 70],
          backgroundColor: [
              '#000000'
          ],
          borderColor: [
              '#ff0000',
          ],
          borderWidth: 1,
          fill: false
        },
        {
          label: 'Humidity (%)',
          hidden: true,
          data: [45, 47, 50, 52, 56, 60, 65, 63, 65, 61],
          backgroundColor: [
              '#000000'
          ],
          borderColor: [
              '#0012ff'
          ],
          borderWidth: 1,
          fill: false
        },
      ]
    },
    options: {
      legend: {
                position: 'top',
                labels: {
                  fontColor: '#ffffff'
                }
              },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:false
              }
          }]
      }
    }
  });







}]); // end controller code block
