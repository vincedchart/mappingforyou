// Essai de groupement non encore réussi 

 

  //        var monum = L.WMS.overlay('http://mappingforyou.eu/geoserver/wms?', { 

// layers: 'france.patrim.mhareas', 

// 'format': 'image/png', 

// 'transparent': true, 

 //     }); 

 //     var mon = L.layerGroup([featureLayer, monum]); 

 

 

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
		name: "Luchtfoto (vue aérienne)",
	layer: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {

		})
			},
		
			{
				active: false,
				name: "Accommodatie (hébérgement)",
				icon: '<i class="icon icon-tente"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'benelux.poi.hebergement',
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
				name: "Restauratie (restauration)",
				icon: '<i class="icon icon-restaurant"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'benelux.poi.barrest',
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
				name: "Winkels (commerces)",
				icon: '<i class="icon icon-supermarche"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'benelux.poi.stores',
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
				name: "Diensten/noodgev. (services/urg.)",
				icon: '<i class="icon icon-emergency"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'benelux.poi.services',
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
				name: "Activiteiten (activités)",
				icon: '<i class="icon icon-loisirs"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'benelux.poi.loisirs',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}

			},

				
                                                 {
                                active: false,
                                name: "Beschermde mon. (mon. protégés)",
                                icon: '<i class="icon icon-monument"></i>',
                                layer: {
                                        type: "tileLayer.wms",
                                        args: ["http://mappingforyou.eu/geoserver/wms", {
                                                        layers: 'benelux.patrim.monuments',
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
				name: "Foto Flickr (photos)",
				icon: '<i class="icon icon-monument"></i>',
				layer: flickr,
							},
						
						
			
				
	

{ 

name: "Wegen (routes)", 

icon: '<i class="icon icon-road"></i>', 

layer: L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lines/{z}/{x}/{y}{r}.{ext}', { 

		subdomains: 'abcd',


    maxZoom:20, 
	ext: 'png'


}) 

}, 

			

{ 

name: "Fietspaden (voies cyclables)", 

icon: '<i class="icon icon-velo"></i>', 

layer: L.tileLayer('https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png', { 

    maxZoom:20, 

  

}) 

}, 

		
		
		
 

{ 

name: "Trektocht (randonnée)", 

icon: '<i class="icon icon-randonnee"></i>', 

layer: L.tileLayer('https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png', { 

    maxZoom:20, 

  

}) 

}, 

 

{ 

name: "Ski", 

icon: '<i class="icon icon-mountains"></i>', 

layer: L.tileLayer('https://tiles.opensnowmap.org/pistes/{z}/{x}/{y}.png', { 

    maxZoom:20, 

  

}) 

}, 

 
  

	
										{
				active: false,
				name: "Contourlijn (courbes de niveau)",
				icon: '<i class="icon icon-mountains"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["https://ows.terrestris.de/osm/service?", {
							layers: 'SRTM30-Contour',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
	
	
	
{ 

active: false, 

name: "Tekeningen (dessins)", 

icon: '<i class="icon icon-monument"></i>', 

layer: drawnItems, 

}, 
	
	
	

			
	//		{
	//			active: true,
	//			name: "River",
	//			layer: (function() {
	//				var l = L.geoJson();
	//				$.getJSON('data/river.json', function(j) {
	//					l.addData(j);
	//				});
	//				return l;
	//			}())
	//		},
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