const battery_labels = ['Battery', 'Fuel?'];
const battery_config = {
    type: 'bar',
    data: {
        datasets: [
            {
                borderColor: "#2dfa00",
                backgroundColor: "#2dfa00",
            }
        ]
    },
    options: {
        animation: false,
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
bar_chart = new Chart(battery_ctx, battery_config);
function updateData(newData){
    for (const data in newData) {
        removeData(bar_chart);
    }
    for (const l in battery_labels) {
        addData(bar_chart, battery_labels[l], newData[l]);
    }
}
function addData(chart, label, newData) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(newData);
    });
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}