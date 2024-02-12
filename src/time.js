setInterval(myTimer, 1000);
function myTimer() {
    var currentdate = new Date();
    document.getElementById("time").innerHTML = "Last Sync: " + currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.toLocaleTimeString();

}
