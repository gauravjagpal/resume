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
    { lat: 45.1000, lng: 15.2},
    { lat: 32.7607, lng: 32.7607}
];

var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
    })
});

var markerClusterer = MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

}
