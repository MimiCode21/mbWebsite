
          const ctx = document.getElementById('myChart');
        
          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'],
              datasets: [{
                label: 'GBP £',
                data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
                backgroundColor: [
                  '#D68060',
                  '#D68060',
                  '#B4CFB0',
                  '#BA704F',
                  '#D68060',
                  '#D68060',
                  '#D68060',
                ],
                borderColor: [

                  '#D68060',
                  '#D68060',
                  '#B4CFB0',
                  '#BA704F',
                  '#D68060',
                  '#D68060',
                  '#D68060',

                ],
          
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
       