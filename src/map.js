function onLoad() {

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

    var rocket_marker = L.marker([32.75, 35.05], {icon: rocket_icon}).addTo(mymap); //TODO: make it from input
    var base_marker = L.marker([32.777, 35.022], {icon: baser_icon}).addTo(mymap); //TODO: make it from user GPS
}