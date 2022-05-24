var apiKeyTheo = "AIzaSyCfMIOuEOERlmSzDzHkHs23VNYCBeUTQ70";
var dummyLoc = "40.78143,-73.97378";
var setRadius = "1500";

// function getApi() {
var requestUrl =
  "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
  dummyLoc +
  "&radius=" +
  setRadius +
  "&type=restaurant&key=" +
  apiKeyTheo;

console.log(requestUrl);
