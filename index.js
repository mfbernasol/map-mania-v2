var favPlaces = [
  {
    content: "Los Angleles",
    coords: { lat: 34.052235, lng: -118.243683 },
  },
  {
    content: "Chicago",
    coords: { lat: 41.878113, lng: -87.629799 },
  },
  {
    content: "New York",
    coords: { lat: 40.73061, lng: -73.935242 },
  },
  {
    content: "Tokyo",
    coords: { lat: 35.652832, lng: 139.839478 },
  },
  {
    content: "London",
    coords: { lat: 51.509865, lng: -0.118092 },
  },
  {
    content: "Beijing",
    coords: { lat: 39.916668, lng: 116.383331},
  },
  {
    content: "Quebec City",
    coords: { lat: 46.829853, lng: -71.254028 },
  },
  {
    content: "Cape Town",
    coords: { lat: -33.92487, lng: 18.424055 },
  },
  {
    content: "Barcelona",
    coords: { lat: 41.385063, lng: -2.173404 },
  },
  {
    content: "Sydney",
    coords: { lat: -33.86882, lng: 151.209900},
  }
];

// array of hints, contains only 9, first hint will be an alert
var hints = [
  "Home of the Bean and Willis Tower",
  "The Big Apple",
  "Bullet Trains and Shibuya Crosswalk",
  "Has Big Ben and the Queen",
  "2008 Olympics were held here",
  "They speak French in this Canadian City",
  "Tabletop mountain in South Africa",
  "Known for its world famous soccer team",
  "Nicknamed Down Under",
];

var locIndex = 0;
var currentLoc = favPlaces[locIndex];

function initMap() {
  // window.confirm("Getting Started: To play, just follow the hints and zoom in at level 7 or higher. If you wanna skip that, just click the button to win!");
  window.confirm("Your first hint: Hollywood is here");
  const myLatLng = { lat: 41.878113, lng: -87.629799 };

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.878113, lng: -87.629799 },
    zoom: 3,
  });

  google.maps.event.addListener(map, "bounds_changed", function () {
    // console.log(map.getBounds());
  });

  google.maps.event.addListener(map, "idle", function () {
    checkPlace();
  });

  //listens to clicks to add markers
  map.addListener("click", function (e) {
    addMarker(e.latLng);
    // console.log(e);
  });

  map.addListener("zoom_changed", function () {
    // console.log("zoom level: " + map.getZoom());
  });

 document.getElementById('cheat').addEventListener('click',function(){
  cheatButton();
  });

}

//initializes markers
function addMarker(latLng) {
  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
  });

  var infoWindow = new google.maps.InfoWindow({});

  infoWindow.setContent(JSON.stringify(latLng.toJSON(), null, 2));

  marker.addListener("click", function (mapsMouseEvent) {
    infoWindow.open(map, marker);
  });
}

//Checks array for favorite place
function checkPlace() {  
  var total = 10; 
  if(map.getBounds().contains({lat: favPlaces[0].coords.lat,lng: favPlaces[0].coords.lng}) && map.getZoom() >= 7) {
    giveHint(hints[0]);
    giveScore(total);
  }else if(map.getBounds().contains({lat: favPlaces[1].coords.lat,lng: favPlaces[1].coords.lng}) && map.getZoom() >= 7){
    giveHint(hints[1]);
    giveScore(total+10);
  }else if(map.getBounds().contains({lat: favPlaces[2].coords.lat,lng: favPlaces[2].coords.lng}) && map.getZoom() >= 7){
    giveHint(hints[2]);
    giveScore(total+20);
  }else if(map.getBounds().contains({lat: favPlaces[3].coords.lat,lng: favPlaces[3].coords.lng}) && map.getZoom() >= 7){
    giveHint(hints[3]);
    giveScore(total+30);
  }else if(map.getBounds().contains({lat: favPlaces[4].coords.lat,lng: favPlaces[4].coords.lng}) && map.getZoom() >= 7){
    giveHint(hints[4]);
    giveScore(total+40);
  }else if(map.getBounds().contains({lat: favPlaces[5].coords.lat,lng: favPlaces[5].coords.lng}) && map.getZoom() >= 7){
    giveHint(hints[5]);
    giveScore(total+50);
  }else if(map.getBounds().contains({lat: favPlaces[6].coords.lat,lng: favPlaces[6].coords.lng}) && map.getZoom() >= 7){
    giveHint(hints[6]);
    giveScore(total+60);
  }else if(map.getBounds().contains({lat: favPlaces[7].coords.lat,lng: favPlaces[7].coords.lng}) && map.getZoom() >= 7){
    giveHint(hints[7]);
    giveScore(total+70);
  }else if(map.getBounds().contains({lat: favPlaces[8].coords.lat,lng: favPlaces[8].coords.lng}) && map.getZoom() >= 7){
    giveHint(hints[8]);
    giveScore(total+80);
  }else if(map.getBounds().contains({lat: favPlaces[9].coords.lat,lng: favPlaces[9].coords.lng}) && map.getZoom() >= 7){
    document.getElementById('hint').value= "You win! Thanks for playing!"
    giveScore(total+90);
  }


}

function cheatButton(){
  document.getElementById('score').value = 100;
  alert("Took the easy way out!");
}


//Count Score
function giveScore(score){
  document.getElementById('score').value = score; 
}

//Give hints
function giveHint(hint) {
  document.getElementById("hint").value = hint;
}

