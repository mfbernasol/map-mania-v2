 
var favPlaces = [
{
  content: 'Los Angleles',
  coords:{lat:34.052235,lng: -118.243683}
},
{
  content: 'Chicago',
  coords:{lat: 41.878113,lng: -87.629799}
}

];
var locIndex = 0;
var currentLoc = favPlaces[locIndex];


function initMap() {
    
  const myLatLng = {lat: 41.878113,lng: -87.629799};

   map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.878113, lng: -87.629799},
    zoom: 3,
  });

  google.maps.event.addListener(map, 'bounds_changed', function() {
		console.log(map.getBounds());
	});

  //listens to clicks to add markers
  map.addListener("click", function(e) {
    addMarker(e.latLng);
    console.log(e);
  });


  map.addListener('zoom_changed',function(){
    console.log("zoom level: " + map.getZoom());
  });

}

//initializes markers
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

var locIndex = 0;
var currentLoc = favPlaces[locIndex];


//Checks array for favorite place 
function checkPlace() {
  

}


//Count Sore



//Give hints