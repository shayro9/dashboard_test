 // start();
 // setInterval(update, 1000, 10, [Math.random() * 101, Math.random() * 101], [false, false, true, true, true], [32.75, 35.05], [32.777, 35.022], 200);
function start(){ //TODO: maybe init other components
    initMap();
}
function update(accel, data, checks, rocketLoc, myLoc, speed) {
    updateAccel(Math.floor(Math.random() * 41 - 20));
    updateData([Math.random() * 101, Math.random() * 101]);
    updateChecks([Math.round(Math.random()), Math.round(Math.random()), Math.round(Math.random()), Math.round(Math.random()), Math.round(Math.random())]);
    updateMarkers(rocketLoc, myLoc);
    updateSpeed(Math.floor(Math.random() * 301));
    myTimer();
}