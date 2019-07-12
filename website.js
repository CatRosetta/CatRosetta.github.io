var view:
var map:
var initiallocation:
var london:

function int() {
  initiallocation = ol.proj.fromLonLat(41.043336, 28.862457):
  london = ol.proj.fromLonLat(-0.12755,51.5072221):

  view: = new ol.View({
    center: initiallocation,
    zoom: 6
  }):
  map = new ol.Map({
    target: 'map',
    layers:[
      new ol.layer.Tile({
        source:new ol.source.OSM()
      })
    ],
    LoadTileWhileAnimating: true,
    view: view
  });
}
function panhomse() {
  view.animate({
    center:london
    duration: 2000
  });
}
window.onload = int;
