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

//  Function to Generate cards for places and place them                    2 *

//  Sort the cards based on the filter value

// USER INTERFACE

//  input a
//  input b
//  press submit
//  individual cards have information: type, name, 

// INITIALIZATION

//      render world map

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