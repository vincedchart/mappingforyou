// Essai de groupement non encore réussi 

 

  //        var monum = L.WMS.overlay('http://mappingforyou.eu:8080/geoserver/wms?', { 

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
		name: "Gade ayeryen (aerial view)",
	layer: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {

		})
			},
		
			{
				active: false,
				name: "Aranjman (accommodation)",
				icon: '<i class="icon icon-tente"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu:8080/geoserver/wms", {
							layers: 'france.poi.hebergement',
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
				name: "Restorasyon (eating out)",
				icon: '<i class="icon icon-restaurant"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu:8080/geoserver/wms", {
							layers: 'france.poi.barrest',
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
				name: "Manje (food goods)",
				icon: '<i class="icon icon-supermarche"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu:8080/geoserver/wms", {
							layers: 'france.poi.stores',
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
				name: "Sèvis/ijans (services/emerg.)",
				icon: '<i class="icon icon-emergency"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu:8080/geoserver/wms", {
							layers: 'france.poi.services',
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
				name: "Okipasyon (going out)",
				icon: '<i class="icon icon-loisirs"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu:8080/geoserver/wms", {
							layers: 'france.poi.loisirs',
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
				name: "Moniman istorik (listed bldgs)",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu:8080/geoserver/wms", {
							layers: 'antillesguyane.patrim.mhmartiniquearea',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
							},
			
										{
				active: false,
				name: "Moniman ist. enfò (listed bldgs info)",
				icon: '<i class="icon icon-monument"></i>',
				layer: featureLayer,
							},
						
																			{
				active: false,
				name: "Foto yo Flickr (photos)",
				icon: '<i class="icon icon-monument"></i>',
				layer: flickr,
							},
						
						
		
						{
				active: false,
				name: "Apel., alkòl (certs, wines/liq.)",
				icon: '<i class="icon icon-vins"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu:8080/geoserver/wms", {
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
				name: "Apel., espesyalite (certs,other prod.)",
				icon: '<i class="icon icon-specialites"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu:8080/geoserver/wms", {
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
				name: "Otobis (bus)",
				icon: '<i class="icon icon-bus"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu:8080/geoserver/wms", {
							layers: 'france.roads.bus10m',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
							},
						
	
	

{ 

name: "Wout (roads)", 

icon: '<i class="icon icon-road"></i>', 

layer: L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lines/{z}/{x}/{y}{r}.{ext}', { 

			subdomains: 'abcd',
    maxZoom:20, 
	ext: 'png'

}) 

}, 

			

{ 

name: "Liy bisiklèt (cycling)", 

icon: '<i class="icon icon-velo"></i>', 

layer: L.tileLayer('https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png', { 

    maxZoom:20, 

  

}) 

}, 

		
		
		
 

{ 

name: "Pye (hiking)", 

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
				name: "Liy kontou (contour lines)",
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

name: "Desen (drawn items)", 

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
