let map;

function initMap() {
    
const myLatLng = {lat: 41.878113,lng: -87.629799};
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.878113, lng: -87.629799},
    zoom: 5,
  });




map.addListener('drag', function() {
    console.log(map.getBounds());
    console.log(map.getBounds().contains(Latlng));
    console.log(map.getZoom());
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

