$scope.mapInit = function() {
    //creates a map centered at Minneapolis
    $scope.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {lat: 44.9778, lng: -93.2650}
    });

    $scope.map.addListener('bounds_changed', function() {

        var mapElement = $('#map div');
        if(mapElement.height() >= window.innerHeight && mapElement.width() >= window.innerWidth && !$scope.isFullScreen) {

            //  if the map element is fullscreen but isFullscreen has not been flagged, make the fullscreen css changes
            $scope.isFullscreen = true;
            $('#input-card').addClass('fixed');

        }

    });

    $scope.geocoder = new google.maps.Geocoder;
};


// DEPENDENCIES
var apiKeyTheo = "AIzaSyCfMIOuEOERlmSzDzHkHs23VNYCBeUTQ70";
var apiKeyBrian = "AIzaSyBcWRkRyguOY-1Up9HLRlIlqR8ApfkqGGQ";


// DEPENDENCIES             
//  inputA
var inputA = document.getElementById("pointa");
//      autocomplete
//  inputB
var inputB = document.getElementById("pointb");
//      autocomplete
//  generate button



// function initAutocomplete() {
//   var address = document.getElementById('address');
//   var autocomplete = new google.maps.places.Autocomplete(address);
// }

// function mounted() {
//   new google.maps.places.Autocomplete(
//     document.getElementById("pointa")
//   )
// };

//  .map  == render map here

//  #results-container(append results cards to this)
//  

//  #sortBy == grab the value of one of the options


// STATE

// FUNCTIONS
// Initialize and add the map
function initMap() {
    // The location of Uluru
    console.log("mapit");
    const nyctribeca = { lat: 40.7163, lng: -74.0086 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: nyctribeca,
    });
    
    // The marker, positioned at Uluru
    const markera = new google.maps.Marker({
      position: { lat: 40.7063, lng: -74.0066 },
      map: map,
    });
    const markerb = new google.maps.Marker({
      position: { lat: 40.7263, lng: -74.0096 },
      map: map,
    });
   
    // color this one gold?
    const markerm = new google.maps.Marker({
      position: { lat: 40.7163, lng: -74.0081 },
      map: map,
    });
    
    var pointa = document.getElementById("pointa");
    var autocomplete = new google.maps.places.Autocomplete(pointa);
    autocomplete.addListener('place_changed', function() {
      var place = autocomplete.getPlace();
    });
  }
 
  
// function autocomplete() {
//   const autocomplete = new google.maps.places.Autocomplete(inputA, 
//     {
//     bounds: defaultBounds,
//     componentRestrictions: { country: "us" },
//     fields: ["address_components", "name"],
//     strictBounds: false,
//     types: ["establishment"]
//   })
// }


//  Collect pointA and pointB and store                     1 *   

//  Collect pointA and pointB and store                     1 *

//  Collect pointA and pointB and store                     1 * 
//      include auto-complete function to get the place
//      get the lon and lat from the place selected


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

//  Function to Generate cards for places and place them                    2 *

//  Sort the cards based on the filter value

// USER INTERFACE

//  input a
//  input b
//  press submit
//  individual cards have information: type, name, 

// INITIALIZATION

//      render world map

// initGoogle();
  window.initMap = initMap;

[
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
            {
                "weight": "0.01"
            },
            {
                "saturation": "100"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#99d4d4"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
