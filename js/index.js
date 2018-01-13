document.addEventListener("deviceready", geolocc, false);




function geolocc(){

    navigator.geolocation.getCurrentPosition(onSuccess, onError,{maximumAge: 3000, timeout:10000,enableHighAccuracy:true });



}

function onSuccess(position){

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



function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}



