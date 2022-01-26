// Essai de groupement non encore réussi 

 

  //        var monum = L.WMS.overlay('http://mappingforyou.eu/geoserver/wms?', { 

// layers: 'france.patrim.mhareas', 

// 'format': 'image/png', 

// 'transparent': true, 

 //     }); 

 //     var mon = L.layerGroup([featureLayer, monum]); 

 
// mise sous reference

        var aerial = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');

        var hotels = L.tileLayer.wms('http://mappingforyou.eu/geoserver/wms?', { 
       layers: 'france.poi.hebergement', 
        format: 'image/png',
                 transparent: true,               
}); 

        var restaurants = L.tileLayer.wms('http://mappingforyou.eu/geoserver/wms?', { 
       layers: 'france.poi.barrest', 
        format: 'image/png',
                 transparent: true,               
}); 


        var stores = L.tileLayer.wms('http://mappingforyou.eu/geoserver/wms?', { 
       layers: 'france.poi.stores', 
        format: 'image/png',
                 transparent: true,               
}); 


        var services = L.tileLayer.wms('http://mappingforyou.eu/geoserver/wms?', { 
       layers: 'france.poi.services', 
        format: 'image/png',
                 transparent: true,               
}); 


        var leisure = L.tileLayer.wms('http://mappingforyou.eu/geoserver/wms?', { 
       layers: 'france.poi.loisirs', 
        format: 'image/png',
                 transparent: true,               
}); 


        var monuments = L.tileLayer.wms('http://mappingforyou.eu/geoserver/wms?', { 
       layers: 'france.patrim.mhareas', 
        format: 'image/png',
                 transparent: true,               
}); 


        var wines = L.tileLayer.wms('http://mappingforyou.eu/geoserver/wms?', { 
       layers: 'france.patrim.aocigp_simpl500_alcools', 
        format: 'image/png',
                 transparent: true,               
}); 

        var specialities = L.tileLayer.wms('http://mappingforyou.eu/geoserver/wms?', { 
       layers: 'france.patrim.aocigp_simpl500_specialites', 
        format: 'image/png',
                 transparent: true,               
}); 

        var historical = L.tileLayer.wms('http://mappingforyou.eu/geoserver/wms?', { 
       layers: 'france.histoire.provinces', 
        format: 'image/png',
                 transparent: true,               
}); 

        var bus = L.tileLayer.wms('http://mappingforyou.eu/geoserver/wms?', { 
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
       layers: 'SRTM30-contour', 
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

icon: '<i class="icon icon-tente"></i>', 

layer: hotels
	
},

{ 

active: false, 

name: "Restauration (catering)", 

icon: '<i class="icon icon-restaurant"></i>', 

layer: restaurants
	
}, 



{ 

active: false, 

name: "Alimentation (food goods)", 

icon: '<i class="icon icon-supermarche"></i>', 

layer: stores
}, 

  

{ 

active: false, 

name: "Services/urg. (serv./emerg.)", 

icon: '<i class="icon icon-emergency"></i>', 

layer: services
}, 

{ 

active: false, 

name: "Loisirs (going out)", 

icon: '<i class="icon icon-loisirs"></i>', 

layer: leisure 

}, 

  

{ 

active: false, 

name: "Mon.historiques(listed bldg)", 

icon: '<i class="icon icon-monument"></i>', 

layer: monuments
}, 

// { 

// name: "Fusion MH (test)", 

// icon: '<i class="icon icon-velo"></i>', 

// layer: mon 

// }, 

{ 

active: false, 

name: "Mon.hist.info(listed bldg inf)", 

icon: '<i class="icon icon-monument"></i>', 

layer: featureLayer, 

}, 

 { 

 active: false, 

 name: "Photos Flickr", 

 icon: '<i class="icon icon-monument"></i>', 

 layer: flickr, 

 }, 

{ 

active: false, 

name: "App.vins/spir.(cert,wine/liq.)", 

icon: '<i class="icon icon-vins"></i>', 

layer: wines

}, 

{ 

active: false, 

name: "App.spté rég.(cers,ot.prod.)", 

icon: '<i class="icon icon-specialites"></i>', 

layer: specialities
}, 

{ 

active: false, 

name: "Provinces hist. (hist. prov.)", 

icon: '<i class="icon icon-provinces"></i>', 

layer: historical
}, 

	 { 

active: false, 

name: "Wikipedia", 

icon: '<i class="icon icon-restaurant"></i>', 

layer: wiki, 
	     minZoom: 11


}, 
	
{ 

active: false, 

name: "Bus", 

icon: '<i class="icon icon-bus"></i>', 

layer: bus

}, 

 

 

{ 

name: "Routes (roads)", 

icon: '<i class="icon icon-road"></i>', 

layer: roads

}, 

 

{ 

name: "Voies vélo (cycling)", 

icon: '<i class="icon icon-velo"></i>', 

layer: cycling

}, 

 

 

{ 

name: "Randonnée (hiking)", 

icon: '<i class="icon icon-randonnee"></i>', 

layer: hiking

}, 

 

{ 

name: "Ski (skiing)", 

icon: '<i class="icon icon-mountains"></i>', 

layer: skiing

}, 

 

 

{ 

active: false, 

name: "Courbes de niv.(cont. lines)", 

icon: '<i class="icon icon-mountains"></i>', 

layer: contourlines

}, 

{ 

active: false, 

name: "Dessins (drawn items)", 

icon: '<i class="icon icon-monument"></i>', 

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
		     'loisirs': loisirs,
		     '1900': a1900,
		     '1880': a1880,
		     '1815': a1815,
		     '1783': a1783,
		     '1715': a1715,
		     '1650': a1650,
		     '1600': a1600,
		     '1530': a1530,
		     '1500': a1500,
		     '1492': a1492,
		     '1400': a1400,
		     '1300': a1300,
		     '1279': a1279,
		     '1200': a1200,
		     '1100': a1100,
	    
	  }
	    ;
    var hash = new L.Hash(map, allMapLayers);
 

