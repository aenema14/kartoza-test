var map;
var wms_server = "http://192.168.55.11:8080/geoserver/kartoza/wms";
$(function()
{
    createMap();
});


function createMap()
{
    var osm = new ol.layer.Tile({source: new ol.source.OSM()});
    var distrito = new ol.layer.Tile({source: new ol.source.TileWMS({url: wms_server,params: {'LAYERS': 'kartoza:distrito', 'TILED': true,'VERSION': '1.1.1'},serverType: 'geoserver', transition: 0,}),});
    var fallas = new ol.layer.Tile({source: new ol.source.TileWMS({url: wms_server,params: {'LAYERS': 'kartoza:geologic_fault', 'TILED': true,'VERSION': '1.1.1'},serverType: 'geoserver', transition: 0,}),});
    map = new ol.Map({
      layers: [
        osm,distrito,fallas
    ],
      target: 'map',
      view: new ol.View({
          projection: 'EPSG:4326',
        center: [-84,10],
        zoom: 7,
      }),
    });

}
