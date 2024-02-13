var opts = {
    angle: 0.10, // The span of the gauge arc
    lineWidth: 0.20, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.5, // // Relative to gauge radius
        strokeWidth: 0.050, // The thickness
        color: '#000000' // Fill color
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    highDpiSupport: true,     // High resolution support
    // renderTicks is Optional
    renderTicks: {
        divisions: 8,
        divWidth: 2,
        divLength: 1,
        divColor: '#333333',
        subDivisions: 0,
        subLength: 0.5,
        subWidth: 0.6,
        subColor: '#666666'
    },
    staticZones: [
    {strokeStyle: "#F03E3E", min: -20, max: -10},
    {strokeStyle: "#FFDD00", min: -10, max: -5},
    {strokeStyle: "#30B32D", min: -5, max: 5},
    {strokeStyle: "#FFDD00", min: 5, max: 10},
    {strokeStyle: "#F03E3E", min: 10, max: 20}
    ],
    staticLabels: {
        font: "10px sans-serif",  // Specifies font
        labels: [0, 5, 10, 15, 20, -5, -10, -15, -20],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
    },
};
var target = document.getElementById('accel-canvas'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.maxValue = 20; // set max gauge value
gauge.setMinValue(-20);  // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 32; // set animation speed (32 is default value)
function updateAccel(accel) {
    gauge.set(accel);
}