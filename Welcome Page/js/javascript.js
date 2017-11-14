function initMap() {
    var iit = {lat: 41.8349, lng: -87.6270};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: iit
    });
    var marker = new google.maps.Marker({
      position: iit,
      map: map
    });
  }
google.maps.event.addDomListener(window, 'load', initialize);

function mobileNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}