var view;
var map;
var initialLocation;
var london;
var bern;



function init() {
  initialLocation = ol.proj.fromLonLat([41.043336, 28.862457]);
  london = ol.proj.fromLonLat([-0.12755,51.5072221]);

  view = new ol.View({
    center: initialLocation,
    zoom: 6
  });
  map = new ol.Map({
    target: 'map',
    layers:[
      new ol.layer.Tile({
        source:new ol.source.OSM()
      })
    ],
    loadTilesWhileAnimating: true,
    view: view
  });
}
function panHome() {
  view.animate({
    center:london,
    duration: 2000
  });
}
function flyTo(location, done) {
    var duration = 2000;
    var zoom = view.getZoom();
    var parts = 2;
    var called = false;
    function callback(complete) {
      --parts;
      if (called) {
        return;
      }
      if (parts === 0 || !complete) {
        called = true;
        done(complete);
      }
    }
    view.animate({
      center: location,
      duration: duration
    }, callback);
    view.animate({
      zoom: zoom - 1,
      duration: duration / 2
    }, {
      zoom: zoom,
      duration: duration / 2
    }, callback);
}
function fly_to_bern() {
  bern = ol.proj.fromLonLat([7.4458, 46.95]);
  flyTo(bern, function() {});
  };
window.onload = init;
