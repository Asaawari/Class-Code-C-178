mapboxgl.accessToken = 'pk.eyJ1IjoiYXNhYXdhcmlzYWhhaSIsImEiOiJja3VvMGdpd3MyNnN3MnBuNjd5YmMxbGgxIn0.K-e55kiTiuq-0mKKAR4eRg'
let latitude = 22.7868542, longitude = 88.3643296;

var map = new mapboxgl.Map({
    container: 'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude,latitude],
    zoom:16
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:true
    })
);

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),'top-left'
)