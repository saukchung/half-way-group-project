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

fetch(requestUrl, { mode: "no-cors" }).then(function (data) {
  for (var i = 0; i < 20; i++) {
    console.log(data[i]);
  }
});
