const chart = document.querySelector("#chart").getContext('2d');

// create new chart instance
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['jan', 'Feb', 'Mar', 'Avr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

        datasets: [
            {
                label: 'BTC',
                data: [15225, 30450, 15226, 30452, 15227, 30454, 15228, 15226, 30452, 15227, 30454
                ],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [25225, 34450, 55226, 30452, 12227, 31454, 55228, 15006, 34452, 55227, 30454
                ],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
});

