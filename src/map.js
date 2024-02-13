let my_marker, rocket_marker;
function initMap() {

    const mymap = L.map('mapid').setView([32.75, 35.05], 11);

    L.tileLayer('UMP-pcPL/{z}/{x}/{y}.png',
        {minZoom: 11,    maxZoom: 16  }).addTo(mymap);

    var rocket_icon = L.icon({
        iconUrl: 'leaflet/images/marker-icon.png',

        iconSize:     [40, 40], // size of the icon
    });
    var baser_icon = L.icon({
        iconUrl: 'leaflet/images/base-icon.png',

        iconSize:     [40, 40], // size of the icon
    });

    rocket_marker = L.marker([0,0], {icon: rocket_icon}).addTo(mymap);
    my_marker = L.marker([0,0], {icon: baser_icon}).addTo(mymap);
    updateMarkers([32.75, 35.05], [32.777, 35.022]);
}

function updateMarkers(rocket_location, my_location) {
    rocket_marker.setLatLng(rocket_location);
    my_marker.setLatLng(my_location);
}