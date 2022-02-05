// Essai de groupement non encore réussi 

 

  //        var monum = L.WMS.overlay('https://mappingforyou.eu/geoserver/wms?', { 

// layers: 'france.patrim.mhareas', 

// 'format': 'image/png', 

// 'transparent': true, 

 //     }); 

 //     var mon = L.layerGroup([featureLayer, monum]); 

 
// mise sous reference

        var aerial = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');

        var hotels = L.tileLayer.wms('https://mappingforyou.eu/geoserver/wms?', { 
       layers: 'france.poi.hebergement', 
        format: 'image/png',
                 transparent: true,               
}); 

        var restaurants = L.tileLayer.wms('https://mappingforyou.eu/geoserver/wms?', { 
       layers: 'france.poi.barrest', 
        format: 'image/png',
                 transparent: true,               
}); 


        var stores = L.tileLayer.wms('https://mappingforyou.eu/geoserver/wms?', { 
       layers: 'france.poi.stores', 
        format: 'image/png',
                 transparent: true,               
}); 


        var services = L.tileLayer.wms('https://mappingforyou.eu/geoserver/wms?', { 
       layers: 'france.poi.services', 
        format: 'image/png',
                 transparent: true,               
}); 


        var leisure = L.tileLayer.wms('https://mappingforyou.eu/geoserver/wms?', { 
       layers: 'france.poi.loisirs', 
        format: 'image/png',
                 transparent: true,               
}); 


        var monuments = L.tileLayer.wms('https://mappingforyou.eu/geoserver/wms?', { 
       layers: 'france.patrim.mhareas', 
        format: 'image/png',
                 transparent: true,               
}); 


        var wines = L.tileLayer.wms('https://mappingforyou.eu/geoserver/wms?', { 
       layers: 'france.patrim.aocigp_simpl500_alcools', 
        format: 'image/png',
                 transparent: true,               
}); 

        var specialities = L.tileLayer.wms('https://mappingforyou.eu/geoserver/wms?', { 
       layers: 'france.patrim.aocigp_simpl500_specialites', 
        format: 'image/png',
                 transparent: true,               
}); 

        var historical = L.tileLayer.wms('https://mappingforyou.eu/geoserver/wms?', { 
       layers: 'france.histoire.provinces', 
        format: 'image/png',
                 transparent: true,               
}); 

        var bus = L.tileLayer.wms('https://mappingforyou.eu/geoserver/wms?', { 
       layers: 'france.roads.bus10m', 
        format: 'image/png',
                 transparent: true,               
}); 


        var roads = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lines/{z}/{x}/{y}{r}.{ext}', { 
       subdomains: 'abcd', 
        ext: 'png'           
}); 

        var cycling = L.tileLayer('https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png'); 

        var hiking = L.tileLayer('https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png');

        var skiing = L.tileLayer.wms('https://tiles.opensnowmap.org/pistes/{z}/{x}/{y}.png');

        var contourlines = L.tileLayer.wms('https://ows.terrestris.de/osm/service?', { 
       layers: 'SRTM30-Contour', 
        format: 'image/png',
                 transparent: true,               
}); 

      

// Categories 

 

// panel layers 

// base layers fonctionne sur la même architecture, mais je n'en veux pas donc caché 

var baseLayers = [ 

// { 

// name: "Carte paysagère", 

// layer: vdlibraries 

// }, 

]; 

  

var overLayers = [ 

{ 

group: " ", 

layers: [ 

{ 

name: "Vue aérienne (aerial view)", 

layer: aerial 

}, 



{ 

active: false, 

name: "Heberg. (lodging)", 

icon: '<img src="https://mappingforyou.eu/icons2/accommodation_hotel2.svg">', 

layer: hotels
	
},

{ 

active: false, 

name: "Restauration (catering)", 

icon: '<img src="https://mappingforyou.eu/icons2/restaurant2.png">', 

layer: restaurants
	
}, 



{ 

active: false, 

name: "Alimentation (food goods)", 

icon: '<img src="https://mappingforyou.eu/icons2/restaurant2.png">', 

layer: stores
}, 

  

{ 

active: false, 

name: "Services/urg. (serv./emerg.)", 

icon: '<img src="https://mappingforyou.eu/icons2/restaurant2.png">', 

layer: services
}, 

{ 

active: false, 

name: "Loisirs (going out)", 

icon: '<img src="https://mappingforyou.eu/icons2/restaurant2.png">', 

layer: leisure 

}, 

  

{ 

active: false, 

name: "Mon.historiques(listed bldg)", 

icon: '<img src="https://mappingforyou.eu/icons2/restaurant2.png">', 

layer: monuments
}, 

// { 

// name: "Fusion MH (test)", 

// icon: '<img src="https://mappingforyou.eu/icons2/restaurant2.png">', 

// layer: mon 

// }, 

{ 

active: false, 

name: "Mon.hist.info(listed bldg inf)", 

icon: '<img src="https://mappingforyou.eu/icons2/restaurant2.png">', 

layer: featureLayer, 

}, 

 { 

 active: false, 

 name: "Photos Flickr", 

 icon: '<img src="https://mappingforyou.eu/icons2/restaurant2.png">', 

 layer: flickr, 

 }, 

{ 

active: false, 

name: "App.vins/spir.(cert,wine/liq.)", 

icon: '<img src="https://mappingforyou.eu/icons2/restaurant2.png">', 

layer: wines

}, 

{ 

active: false, 

name: "App.spté rég.(cers,ot.prod.)", 

icon: '<img src="https://mappingforyou.eu/icons2/restaurant2.png">', 

layer: specialities
}, 

{ 

active: false, 

name: "Provinces hist. (hist. prov.)", 

icon: '<img src="https://mappingforyou.eu/icons2/restaurant2.png">', 

layer: historical
}, 

	 { 

active: false, 

name: "Wikipedia", 

icon: '<img src="https://mappingforyou.eu/icons2/restaurant2.png">', 

layer: wiki, 
	     minZoom: 11


}, 
	
{ 

active: false, 

name: "Bus", 

icon: '<img src="https://mappingforyou.eu/icons2/restaurant2.png">', 

layer: bus

}, 

 

 

{ 

name: "Routes (roads)", 

icon: '<img src="https://mappingforyou.eu/icons2/restaurant2.png">', 

layer: roads

}, 

 

{ 

name: "Voies vélo (cycling)", 

icon: '<img src="https://mappingforyou.eu/icons2/restaurant2.png">', 

layer: cycling

}, 

 

 

{ 

name: "Randonnée (hiking)", 

icon: '<img src="https://mappingforyou.eu/icons2/restaurant2.png">', 

layer: hiking

}, 

 

{ 

name: "Ski (skiing)", 

icon: '<img src="https://mappingforyou.eu/icons2/restaurant2.png">', 

layer: skiing

}, 

 

 

{ 

active: false, 

name: "Courbes de niv.(cont. lines)", 

icon: '<img src="https://mappingforyou.eu/icons2/restaurant2.png">', 

layer: contourlines

}, 

{ 

active: false, 

name: "Dessins (drawn items)", 

icon: '<img src="https://mappingforyou.eu/icons2/restaurant2.png">', 

layer: drawnItems, 

}, 

// { 

// active: true, 

// name: "River", 

// layer: (function() { 

// var l = L.geoJson(); 

// $.getJSON('data/river.json', function(j) { 

// l.addData(j); 

// }); 

// return l; 

// }()) 

// }, 

] 

}, 

]; 

  

// panel

var panelLayers = new L.Control.PanelLayers(baseLayers, overLayers, { 

compact: true, 

collapsed: true, 

collapsibleGroups: false 

}); 

  
map.addControl(panelLayers);

	    var allMapLayers = {
	      'base': mapbase,
	    'aerial': aerial,
	  'hotels': hotels,
 'restaurants': restaurants,
		     'stores': stores,
		     'services': services,
		     'leisure': leisure,
		     'monuments': monuments,
		     'monumentsdb': featureLayer,
		     'flickr': flickr,
		     'wines': wines,
		     'specialities': specialities,
		     'historical': historical,
		     'wikipedia': wiki,
		     'bus': bus,
		     'roads': roads,
		     'cycling': cycling,
		     'hiking': hiking,
		     'skiing': skiing,
		     'contourlines': contourlines,
	    
	  }
	    ;
    var hash = new L.Hash(map, allMapLayers);
 

