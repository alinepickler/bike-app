function googleMaps(key, callback) {
  var script = document.createElement('script');
  script.src = "https://maps.googleapis.com/maps/api/js?key=" + key + "&callback=" + callback;
  script.async = true
  script.defer = true
  document.body.appendChild(script);
}
