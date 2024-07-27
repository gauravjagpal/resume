function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 1,
        center: {
            lat: 51.5112,
            lng: -0.3756
        }
    });

var labels = "ABCDEFGHIJKLMNOPQRSTUVQXYZ";

var locations = [
    { lat: 45.1000, lng: 15.7607},
    { lat: 32.6669, lng: -16.9240},
    { lat: 35.1264, lng: 33.4299},
    { lat: 41.3874, lng: 2.1686},
    { lat: 4.2105, lng: 101.9758},
    { lat: 1.3521, lng: 103.8198},
    { lat: 40.7128, lng: -74.0060},
    { lat: 41.8719, lng: 12.5674},
    { lat: 20.5937, lng: 78.9629},
    { lat: 35.2401, lng: 24.8093},
];

var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
    })
});

var markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

}