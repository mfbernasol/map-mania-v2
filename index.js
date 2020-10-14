let map;

function initMap() {
    
const myLatLng = {lat: 41.878113,lng: -87.629799};
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.878113, lng: -87.629799},
    zoom: 5,
  });
  map.addListener("click", (e) => {
    placeMarkerAndPanTo(e.latLng, map);
    console.log(e);
  });



}

function placeMarkerAndPanTo(latLng, map) {
    new google.maps.Marker({
      position: latLng,
      map: map,
    });
    map.panTo(latLng);
}