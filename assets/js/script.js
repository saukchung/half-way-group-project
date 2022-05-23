// DEPENDENCIES
//  inputA
//      autocomplete
//  inputB
//      autocomplete
//  generate button

//  .map

//  #results-container(append results cards to this)
//  

// STATE

// FUNCTIONS

//  Collect pointA and pointB and store

//  Use Google Maps to find a midway point
//      Maps SDKs
//          render map
//          get coordinates for a
//          get coordinates for b
//              function to average out the x's and y's of two coordinates
//          betweenCoordinate

//  Use Google Places
//      Geocoding
//          Create a circle around the betweenCoordinate and get the places

//==========================================================
//=============FROM GOOGLE PLACES LIBRARY===================

    // var map;
    // var service;
    // var infowindow;

    // function initMap() {
    //   var sydney = new google.maps.LatLng(BETWEENLAT, BETWEENLONG);

    //   infowindow = new google.maps.InfoWindow();

    //   map = new google.maps.Map(
    //       document.getElementById('map'), {center: sydney, zoom: 15});

    //   var request = {
    //     query: 'Museum of Contemporary Art Australia',
    //     fields: ['name', 'geometry'],
    //   };

    //   var service = new google.maps.places.PlacesService(map);

    //   service.findPlaceFromQuery(request, function(results, status) {
    //     if (status === google.maps.places.PlacesServiceStatus.OK) {
    //       for (var i = 0; i < results.length; i++) {
    //         createMarker(results[i]);
    //       }
    //       map.setCenter(results[0].geometry.location);
    //     }
    //   });
    // }
    // ===========================================================    

//  Generate cards for places and place them

// USER INTERFACE

// INITIALIZATION

