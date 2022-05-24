// DEPENDENCIES
//  inputA
//      autocomplete
//  inputB
//      autocomplete
//  generate button

//  .map  == render map here

//  #results-container(append results cards to this)
//

//  #sortBy == grab the value of one of the options

// STATE

// FUNCTIONS

//  Collect pointA and pointB and store                     1 *

//  Use Google Maps to find a midway point                  1
//      Maps SDKs
//          render map == staticcally
//          get coordinates for a
//          get coordinates for b
//              average out the x's and y's of two coordinates
//          return betweenCoordinate                        1

//  Use Google Places                                       2
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
var apiKeyTheo = "AIzaSyCfMIOuEOERlmSzDzHkHs23VNYCBeUTQ70";
var dummyLoc = "40.78143,-73.97378";
var setRadius = "1500";

var requestUrl =
  "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
  dummyLoc +
  "&radius=" +
  setRadius +
  "&type=restaurant&key=" +
  apiKeyTheo;

//  Function to Generate cards for places and place them                    2 *

//  Sort the cards based on the filter value

// USER INTERFACE

//  input a
//  input b
//  press submit
//  individual cards have information: type, name,

// INITIALIZATION

//      render world map
