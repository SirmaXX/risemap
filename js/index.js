document.addEventListener("deviceready", init, false);




function init(){

    getir();
    initMap();


}




var map, infoWindow;


function initMap() {
  var mapc=document.getElementById('map');
  var options={

    center: {lat: -34.397, lng: 150.644},
    zoom: 6,
    mapTypeId:google.maps.MapTypeId.HYBRID
  }
  map = new google.maps.Map(mapc,options);

  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(findme,handleLocationError,options);
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }




}



function findme(position) {
  // location information
  var pos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };
  // setting location 
  infoWindow.setPosition(pos);
  infoWindow.setContent('Location found.');
  infoWindow.open(map);
  map.setCenter(pos);


}



function getir(){

  navigator.geolocation.getCurrentPosition(info, onError,{maximumAge: 3000, timeout:10000,enableHighAccuracy:true });

}

function info(position){

    var latt=document.getElementById('lat');
     latt.value = position.coords.latitude;

    var longg= document.getElementById('long');
    long.value=position.coords.longitude;

    var altii=document.getElementById('alti');
    altii.value=position.coords.altitude;

    var accu=document.getElementById('acco');
    accu.value=position.coords.accuracy; 

    var altiac= document.getElementById('altac');
    altiac.value=position.coords.altitudeAccuracy;
    
    var headn=document.getElementById('headd');
   headn.value= position.coords.heading; 

    var spdd=document.getElementById('spd'); 
    spdd.value=position.coords.speed;

     var tmp=document.getElementById('tmsp'); 
     tmp.value= position.timestamp;     
        
   

}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}


function onError(error) {
  switch(error.code) {
      case error.PERMISSION_DENIED:
          x.innerHTML = "User denied the request for Geolocation."
          break;
      case error.POSITION_UNAVAILABLE:
          x.innerHTML = "Location information is unavailable."
          break;
      case error.TIMEOUT:
          x.innerHTML = "The request to get user location timed out."
          break;
      case error.UNKNOWN_ERROR:
          x.innerHTML = "An unknown error occurred."
          break;
  }
}
