 
let map;

function initMap() {
    
const myLatLng = {lat: 41.878113,lng: -87.629799};
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.878113, lng: -87.629799},
    zoom: 5,
  });
  map.addListener("click", function(e) {
    addMarker(e.latLng);
    console.log(e);
  });



}

function addMarker(latLng) {
  var marker = new google.maps.Marker({
      position: latLng,
      map: map,
    });
  
  var infoWindow = new google.maps.InfoWindow({
  });

  infoWindow.setContent(
    JSON.stringify(latLng.toJSON(),null,2)
  );
  
  marker.addListener('click',function(mapsMouseEvent){
    infoWindow.open(map,marker);
  });

}