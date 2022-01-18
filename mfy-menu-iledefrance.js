// Essai de groupement non encore réussi 

 

  //        var monum = L.WMS.overlay('http://mappingforyou.eu/geoserver/wms?', { 

// layers: 'france.patrim.mhareas', 

// 'format': 'image/png', 

// 'transparent': true, 

 //     }); 

 //     var mon = L.layerGroup([featureLayer, monum]); 

 
// mise sous reference


        var hebergement = L.tileLayer.wms('http://mappingforyou.eu/geoserver/wms?', { 
       layers: 'france.poi.hebergement', 
          maxZoom: 20, 
          minZoom: 16,
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

layer: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { 

    maxZoom:20, 

  

}) 

}, 


{ 

active: false, 

name: "Heberg. (accommodation)", 

icon: '<i class="icon icon-tente"></i>', 

layer: { 

type: "tileLayer.wms", 

args: ["http://mappingforyou.eu/geoserver/wms", { 

layers: 'france.poi.hebergement', 

format: 'image/png', 

transparent: true, 

    maxZoom:20, 

//minZoom: 13 

} 

] 

} 

}, 

{ 

active: false, 

name: "Restauration (eating out)", 

icon: '<i class="icon icon-restaurant"></i>', 

layer: { 

type: "tileLayer.wms", 

args: ["http://mappingforyou.eu/geoserver/wms", { 

layers: 'france.poi.barrest', 

format: 'image/png', 

transparent: true, 

    maxZoom:20, 

//minZoom: 13 

} 

] 

} 

}, 

{ 

active: false, 

name: "Test active hebe", 

icon: '<i class="icon icon-restaurant"></i>', 

layer: hebergement, 

}, 

{ 

active: false, 

name: "Alimentation (food goods)", 

icon: '<i class="icon icon-supermarche"></i>', 

layer: { 

type: "tileLayer.wms", 

args: ["http://mappingforyou.eu/geoserver/wms", { 

layers: 'france.poi.stores', 

format: 'image/png', 

transparent: true, 

    maxZoom:20, 

//minZoom: 13 

} 

] 

} 

}, 

  												{
					active: false,
					name: "Ts commerces (all stores)",
					icon: '<i class="icon icon-supermarche"></i>',
					layer: {
						type: "tileLayer.wms",
						args: ["http://mappingforyou.eu/geoserver/wms", {
								layers: 'france.poi.commercesmagell',
								format: 'image/png',
								transparent: true,
								maxZoom: 20
								//minZoom: 13
							}
						]
					}
							},

{ 

active: false, 

name: "Services/urg. (serv./emerg.)", 

icon: '<i class="icon icon-emergency"></i>', 

layer: { 

type: "tileLayer.wms", 

args: ["http://mappingforyou.eu/geoserver/wms", { 

layers: 'france.poi.services', 

format: 'image/png', 

transparent: true, 

    maxZoom:20, 

//minZoom: 13 

} 

] 

} 

}, 

{ 

active: false, 

name: "Loisirs (going out)", 

icon: '<i class="icon icon-loisirs"></i>', 

layer: { 

type: "tileLayer.wms", 

args: ["http://mappingforyou.eu/geoserver/wms", { 

layers: 'france.poi.loisirs', 

format: 'image/png', 

transparent: true, 

    maxZoom:20, 

//minZoom: 13 

} 

] 

} 

  

}, 

  

{ 

active: false, 

name: "Mon.historiques(listed bldg)", 

icon: '<i class="icon icon-monument"></i>', 

layer: { 

type: "tileLayer.wms", 

args: ["http://mappingforyou.eu/geoserver/wms", { 

layers: 'france.patrim.mhareas', 

format: 'image/png', 

transparent: true, 

    maxZoom:20, 

//minZoom: 13 

} 

] 

} 

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

name: "Wikipedia", 

icon: '<i class="icon icon-restaurant"></i>', 

layer: wiki, 

}, 
	

{ 

active: false, 

name: "App.vins/spir.(cert,wine/liq.)", 

icon: '<i class="icon icon-vins"></i>', 

layer: { 

type: "tileLayer.wms", 

args: ["http://mappingforyou.eu/geoserver/wms", { 

layers: 'france.patrim.aocigp_simpl500_alcools', 

format: 'image/png', 

transparent: true, 

//minZoom: 13 

} 

] 

} 

}, 

{ 

active: false, 

name: "App.spté rég.(cers,ot.prod.)", 

icon: '<i class="icon icon-specialites"></i>', 

layer: { 

type: "tileLayer.wms", 

args: ["http://mappingforyou.eu/geoserver/wms", { 

layers: 'france.patrim.aocigp_simpl500_specialites', 

format: 'image/png', 

transparent: true, 

//minZoom: 13 

} 

] 

} 

}, 

{ 

active: false, 

name: "Provinces hist. (hist. prov.)", 

icon: '<i class="icon icon-provinces"></i>', 

layer: { 

type: "tileLayer.wms", 

args: ["http://mappingforyou.eu/geoserver/wms", { 

layers: 'france.histoire.provinces', 

format: 'image/png', 

transparent: true, 

//minZoom: 13 

} 

] 

} 

}, 

{ 

active: false, 

name: "Bus", 

icon: '<i class="icon icon-bus"></i>', 

layer: { 

type: "tileLayer.wms", 

args: ["http://mappingforyou.eu/geoserver/wms", { 

layers: 'france.roads.bus10m', 

format: 'image/png', 

transparent: true, 

    maxZoom:20, 

//minZoom: 13 

} 

] 

} 

}, 

 

 

{ 

name: "Routes (roads)", 

icon: '<i class="icon icon-road"></i>', 

layer: L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lines/{z}/{x}/{y}{r}.{ext}', { 

		subdomains: 'abcd',


    maxZoom:20, 
	ext: 'png'

  

}) 

}, 

 

{ 

name: "Voies vélo (cycling)", 

icon: '<i class="icon icon-velo"></i>', 

layer: L.tileLayer('https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png', { 

    maxZoom:20, 

  

}) 

}, 

 

 

{ 

name: "Randonnée (hiking)", 

icon: '<i class="icon icon-randonnee"></i>', 

layer: L.tileLayer('https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png', { 

    maxZoom:20, 

  

}) 

}, 

 

{ 

name: "Ski (skiing)", 

icon: '<i class="icon icon-mountains"></i>', 

layer: L.tileLayer('https://tiles.opensnowmap.org/pistes/{z}/{x}/{y}.png', { 

    maxZoom:20, 

  

}) 

}, 

 

 

{ 

active: false, 

name: "Courbes de niv.(cont. lines)", 

icon: '<i class="icon icon-mountains"></i>', 

layer: { 

type: "tileLayer.wms", 

args: ["https://ows.terrestris.de/osm/service?", { 

layers: 'SRTM30-Contour', 

format: 'image/png', 

transparent: true, 

    maxZoom:20, 

//minZoom: 13 

} 

] 

} 

}, 

					{
					active: false,
					name: "Découpage admin. et stat.",
					icon: '<i class="icon icon-monument"></i>',
					layer: {
						type: "tileLayer.wms",
						args: ["http://mappingforyou.eu/geoserver/wms", {
								layers: 'france.admin.limites',
								format: 'image/png',
								transparent: true,
								//minZoom: 13
							}
						]
					}
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

collapsibleGroups: true 

}); 

  
map.addControl(panelLayers);
