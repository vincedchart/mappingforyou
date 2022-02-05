// local callers 

var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var hillshading = L.tileLayer('http://{s}.tiles.wmflabs.org/hillshading/{z}/{x}/{y}.png', { maxZoom: 20, opacity: 0  }); 
  
var mapbase = L.tileLayer.wms('https://mappingforyou.eu/geoserver/wms?', { 
       layers: 'pays.portugal', 
       maxZoom: 20, 
       format: 'image/png', 
       attribution: '↖Menu . Categories↗)' 
}); 

var minZoom = 6; 
var maxZoom = 20; 
var wfs1 = 'worldmap:france.patrim.mh.toutpoint'; 
var wfs2 = 'worldmap:france.poi.barrest'; 
var init = {"lat": 39, "lng": -8, "zoom": 8 }  
var southWest = L.latLng(36, -30), 
    northEast = L.latLng(48, -5), 
    bounds = L.latLngBounds(southWest, northEast); 
        
 // Flickr localisé

var flickrAPI = ""; 
flickrAPI += "https://api.flickr.com/services/rest/?"; 
flickrAPI += "&method=flickr.photos.search"; 
flickrAPI += "&api_key=11d9a83951636a94885f5145f1a33727"; 
/* Comment or Uncomment for user_id to show only specific user geo-photos*/  
//flickrAPI += "&user_id=194715090%40N08"; 
flickrAPI += "&has_geo=1"; 
// essai pour local 
flickrAPI += "&tags=Portugal" 
flickrAPI += "&extras=geo,url_t,owner_name,date_upload,license"; 
//flickrAPI += "&per_page=5";  // Nº máximo de fotos para visualizar 
//flickrAPI += "&page=1"; 
flickrAPI += "&format=json"; 
// UPDATE: Request plain old JSON 
flickrAPI += "&nojsoncallback=1"; 
