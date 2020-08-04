function initMap() {
  // image for bus icons
  let image = "bus-marker.png";

  // making the map with the center being the first bus location
  let map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: parseFloat(busLocations[0].LATITUDE),
      lng: parseFloat(busLocations[0].LONGITUDE),
    },
    zoom: 15,
    scrollwheel: false,
  });

  // content inside of the info window
  let contentString = "${bus.VEHICLE}";

  // info window
  let infoWindow = new google.maps.InfoWindow({
    content: contentString,
  });

  // for loop getting bus locations in array
  for (i = 0; i < busLocations.length; i++) {
    let marker = new google.maps.Marker({
      position: {
        lat: parseFloat(busLocations[i].LATITUDE),
        lng: parseFloat(busLocations[i].LONGITUDE),
      },
      map: map,

      // bounce animation for icons
      animation: google.maps.Animation.DROP,

      // icons using image set from above
      icon: image,
    });

    // animation toggle bounce when clicked
    marker.addListener("click", toggleBounce);

    // info window open when clicked
    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });

    // function for toggling bounce animation
    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }

    // end of for loop
  }
  // end of initMap()
}
