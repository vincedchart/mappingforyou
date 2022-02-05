// local callers 

var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var hillshading = L.tileLayer('http://{s}.tiles.wmflabs.org/hillshading/{z}/{x}/{y}.png', { maxZoom: 20, opacity: 0  }); 
  
var mapbase = L.tileLayer.wms('https://mappingforyou.eu/geoserver/wms?', { 
       layers: 'regions.iledefrance', 
       maxZoom: 20, 
       format: 'image/png', 
       attribution: '↖Menu . Categories↗)' 
}); 

var minZoom = 11; 
var maxZoom = 20; 
var wfs1 = 'worldmap:france.patrim.mh.toutpoint'; 
var wfs2 = 'worldmap:france.poi.barrest'; 
var init = {"lat": 48.85, "lng": 2.35, "zoom": 13 }  
var southWest = L.latLng(48, 1), 
    northEast = L.latLng(50, 4), 
    bounds = L.latLngBounds(southWest, northEast); 
        
 // Flickr localisé

var flickrAPI = ""; 
flickrAPI += "https://api.flickr.com/services/rest/?"; 
flickrAPI += "&method=flickr.photos.search"; 
flickrAPI += "&api_key=11d9a83951636a94885f5145f1a33727"; 
/* Comment or Uncomment for user_id to show only specific user geo-photos*/  
flickrAPI += "&user_id=194715090%40N08"; 
flickrAPI += "&has_geo=1"; 
// essai pour local 
flickrAPI += "&tags=france" 
flickrAPI += "&extras=geo,url_t,owner_name,date_upload,license"; 
//flickrAPI += "&per_page=5";  // Nº máximo de fotos para visualizar 
//flickrAPI += "&page=1"; 
flickrAPI += "&format=json"; 
// UPDATE: Request plain old JSON 
flickrAPI += "&nojsoncallback=1"; 
