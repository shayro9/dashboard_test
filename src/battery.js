const battery_labels = ['Battery', 'Fuel?'];
const battery_config = {
    type: 'bar',
    data: {
        labels: battery_labels,
        datasets: [
            {
                data: [89, 36],
                borderColor: "#2dfa00",
                backgroundColor: "#2dfa00",
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Battery'
            },
        },
        scales: {
            y: {
                min: 0,
                max: 100
            }
        }
    },
};

const battery_ctx = document.getElementById('battery-canvas');
new Chart(battery_ctx, battery_config);
