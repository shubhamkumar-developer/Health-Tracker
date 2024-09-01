document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('data-form');
  const chartElement = document.getElementById('chart').getContext('2d');
  
  const data = {
      dates: [],
      waterIntake: [],
      exerciseMinutes: [],
      moods: []
  };

  const chart = new Chart(chartElement, {
      type: 'line',
      data: {
          labels: data.dates,
          datasets: [
              {
                  label: 'Water Intake (liters)',
                  data: data.waterIntake,
                  borderColor: 'blue',
                  fill: false
              },
              {
                  label: 'Exercise Minutes',
                  data: data.exerciseMinutes,
                  borderColor: 'green',
                  fill: false
              },
              {
                  label: 'Mood (1-10)',
                  data: data.moods,
                  borderColor: 'red',
                  fill: false
              }
          ]
      },
      options: {
          scales: {
              x: {
                  type: 'time',
                  time: {
                      unit: 'day'
                  },
                  title: {
                      display: true,
                      text: 'Date'
                  }
              },
              y: {
                  title: {
                      display: true,
                      text: 'Value'
                  }
              }
          }
      }
  });

  form.addEventListener('submit', (e) => {
      e.preventDefault();

      const date = new Date(document.getElementById('date').value);
      const water = parseFloat(document.getElementById('water').value);
      const exercise = parseInt(document.getElementById('exercise').value);
      const mood = parseInt(document.getElementById('mood').value);

      data.dates.push(date);
      data.waterIntake.push(water);
      data.exerciseMinutes.push(exercise);
      data.moods.push(mood);

      chart.data.labels = data.dates;
      chart.data.datasets[0].data = data.waterIntake;
      chart.data.datasets[1].data = data.exerciseMinutes;
      chart.data.datasets[2].data = data.moods;
      chart.update();
      
      form.reset();
  });
});
