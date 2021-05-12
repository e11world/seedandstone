const points = [
  {
    id: 0,
    latitude: 49.1483933,
    longitute: -122.0085082,
    class: "loc-1",
    title: "Chilliwack",
    desc:
      "8050 Lickman Rd #103<br>Chilliwack, BC V2R 0Y3<br>604-392-7772",
  },
  {
    id: 1,
    latitude: 49.035227,
    longitute: -122.7846575,
    class: "loc-2",
    title: "White Rock",
    desc:
      "1421 Johnston Road<br>White Rock, BC",
  },
  {
    id: 2,
    latitude: 49.021343,
    longitute: -122.805389,
    class: "loc-3",
    title: "White Rock",
    desc:
      "15053 Marine Drive<br>White Rock, BC",
  },
  {
    id: 3,
    latitude: 48.423631,
    longitute: -123.367193,
    class: "loc-4",
    title: "Victoria",
    desc:
      "616 Fort Street<br>Victoria, BC",
  },
  {
    id: 4,
    latitude: 48.424945,
    longitute: -123.367363,
    class: "loc-5",
    title: "Victoria",
    desc:
      "901 Gordon Street<br>Victoria, BC",
  },
];

const names = {
  0: "Chilliwack",
  1: "White Rock",
  2: "White Rock",
  3: "Victoria",
  4: "Victoria",
};

var side_bar_html = "";
// arrays to hold copies of the markers and html used by the side_bar

var gmarkers = [];
var marker;
// create the map
var myOptions = {
  center: new google.maps.LatLng(48.933917, -122.630434),
  zoom: 9,
  disableDefaultUI: true,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
};
var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
var t = 1;

function initialize() {
  google.maps.event.addListener(map, "click", function () {
    infowindow.close();
  });

  let markerPoint;
  let marker;

  points.map((markerPoint) => {
    markerPoint = new google.maps.LatLng(
      markerPoint.latitude,
      markerPoint.longitute
    );
    marker = createMarker(
      markerPoint,
      `<div class="location ${markerPoint.class}"><div class="location-info"> <h2>${markerPoint.title}</h2> <p>${markerPoint.desc}</p></div></div>`
    );
  });

  // console.log(points);

  // var point1 = new google.maps.LatLng(49.1483933, -122.0085082);
  // var marker = createMarker(point1, '<div class="location loc-1"><div class="location-info"> <h2>Seed &amp; Stone</h2> <p>Lickman Road, Chilliwack, BC</p></div></div>', '<span><b>Seed &amp; Stone</b><br /><em>address goes here</em><span>');
  // let point2 = new google.maps.LatLng(49.0327183, -122.8028631);
  // marker = createMarker(point2, '<div class="location loc-2"><div class="location-info"> <h2>Monark Group</h2> <p>Another Road, Surrey, BC</p></div></div>', '<span><b>Monark Group</b><br /><em>address goes here</em><span>');
  // let point3 = new google.maps.LatLng(49.1946032, -123.0662658);
  // marker = createMarker(point3, '<div class="location loc-3"><div class="location-info"> <h2>Third Loc</h2> <p>Test Road, Surrey, BC</p></div></div>', '<span><b>Third Loc</b><br /><em>address goes here</em><span>');
  // let point4 = new google.maps.LatLng(49.2458283, -123.1175777);
  // marker = createMarker(point4, '<div class="location loc-4"><div class="location-info"> <h2>4th Loc</h2> <p>New Road, Surrey, BC</p></div></div>', '<span><b>4th Loc</b><br /><em>address goes here</em><span>');

  initSearchBox(map, "search_store");
}

// google.maps.event.addDomListener(window, 'load', initialize);

var infowindow = new google.maps.InfoWindow({
  size: new google.maps.Size(150, 50),
});

// This function picks up the click and opens the corresponding info window
function myclick(i) {
  google.maps.event.trigger(gmarkers[i], "click");
}

function initSearchBox(map, controlId) {
  // Create the search box and link it to the UI element.
  var input = document.getElementById(controlId);

  // show input inside map
  // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var searchBox = new google.maps.places.SearchBox(input, {
    types: ["geocode"],
    rankBy: google.maps.places.RankBy.DISTANCE,
  });

  // [START region_getplaces]
  // Listen for the event fired when the user selects an item from the
  // pick list. Retrieve the matching places for that item.
  google.maps.event.addListener(searchBox, "places_changed", function () {
    var places = searchBox.getPlaces();
    // console.log(places);
    // side_bar_html = google.maps.places.RankBy.DISTANCE;

    if (places.length === 0) {
      return;
    }

    //get first place
    var place = places[0];

    var infowindow = new google.maps.InfoWindow({
      size: new google.maps.Size(150, 50),
      content: place.info,
    });

    document.getElementById("side_bar").innerHTML = side_bar_html;

    t -= 1; //This is so if you search again, it doesn't display again in sidebar

    map.fitBounds(place.geometry.viewport);

    var location = place.geometry.location;
    var lat = location.lat();
    var lng = location.lng();

    // document.getElementById('s_latitude').innerHTML = lat;
    // document.getElementById('s_longitude').innerHTML = lng;

    function calculateDistance(lat1, lon1, lat2, lon2) {
      if (lat1 === lat2 && lon1 === lon2) {
        return 0;
      } else {
        var radlat1 = (Math.PI * lat1) / 180;
        var radlat2 = (Math.PI * lat2) / 180;
        var radlon1 = (Math.PI * lon1) / 180;
        var radlon2 = (Math.PI * lon2) / 180;
        var theta = lon1 - lon2;
        var radtheta = (Math.PI * theta) / 180;
        var dist =
          Math.sin(radlat1) * Math.sin(radlat2) +
          Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
          dist = 1;
        }
        dist = Math.acos(dist);
        dist = (dist * 180) / Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344;
        return dist;
      }
    }

    let result = [];
    let resultDiv = document.getElementById("side_bar");
    for (let i = 0; i < points.length; i++) {
      let point = points[i];
      let distance = calculateDistance(
        point.latitude,
        point.longitute,
        lat,
        lng
      );
      result.push({
        name: names[point.id],
        distance: Math.round(distance),
        title: point.title,
        desc: point.desc,
        class: point.class,
      });
      // console.log(points[i].class);
      // resultDiv = "";

      // resultDiv.innerHTML += points[i]['class'];
      // resultDiv.innerHTML += `<div class="location ${points[i].class}"><div class="location-info"> <h2>${points[i].title}</h2> <p>${points[i].desc}</p></div></div>`;
      // console.log(point.class + 'afa');
      // $("#side_bar").children('div').each(function () { result.push(point.innerHTML) });
    }

    // side_bar_html = "";

    result.sort(function (a, b) {
      return a.distance - b.distance;
    });

    result.map((p) => {
      resultDiv.innerHTML += `<div class="location ${p.class}"><div class="location-info"> <h2>${p.title}</h2> <p>${p.desc}</p></div></div>`;
    });

    // console.log(result);

    // i not defined here
    // resultDiv.innerHTML += points[i]['class'];
  });
}

// A function to create the marker and set up the event window function
function createMarker(latlng, name, html) {
  var contentString = html;

  var marker = new google.maps.Marker({
    position: latlng,
    // position: map.location,
    animation: google.maps.Animation.DROP,
    map: map,
    //zIndex: Math.round(latlng.lat()*-100000)<<5
  });
  // console.log(latlng, name, html);

  google.maps.event.addListener(marker, "click", function () {
    infowindow.setContent(contentString);
    infowindow.open(map, marker);
  });

  // save the info we need to use later for the side_bar
  gmarkers.push(marker);

  // $("#side_bar").children('div').each(function () { result.push(this.innerHTML) });
  // document.getElementById('results').value = marker.geometry.lat();

  // add a line to the side_bar html
  // side_bar_html += '<a href="javascript:myclick(' + (gmarkers.length - 1) + ')">' + name + '<\/a><br>';
}

google.maps.event.addListenerOnce(map, "idle", initialize);
