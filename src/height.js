const DATA_COUNT = 12;
const height_labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
    height_labels.push(i.toString());
}
const hdatapoints = [0, 20, 20, 60, 60, 120, 150, 180, 120, 125, 105, 110, 170];

const height_config = {
    type: 'line',
    data: {
        labels: height_labels,
        datasets: [
            {
                data: hdatapoints,
                label: "@",
                borderColor: "#ff0000",
                fill: false,
                cubicInterpolationMode: 'monotone',
                tension: 0.4
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Height?'
            },
            tooltip:{
                events: []
            }
        },
        interaction: {
            intersect: false,
        },
        elements: {
            point: {
                radius:0,
                hoverRadius: 0
          }
        },
        scales: {
            x: {
                display: false,
                title: {
                    display: true,
                    text: 'time?'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Meters'
                },
                suggestedMin: 0,
                suggestedMax: 1000
            }
        }
    },
};

const height_ctx = document.getElementById('height-canvas');
let line_chart = new Chart(height_ctx, height_config); //TODO: use AddData from battery
