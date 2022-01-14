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
		name: "Veduta aerea (aerial view)",
	layer: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {

		})
			},
		
			{
				active: false,
				name: "Alloggio (accommodation)",
				icon: '<i class="icon icon-tente"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'it.poi.hebergement',
							format: 'image/png',
							maxZoom: 20,
							transparent: true,
							//minZoom: 13
						}
					]
				}
							},
					{
				active: false,
				name: "Restauro (eating out)",
				icon: '<i class="icon icon-restaurant"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'it.poi.barrest',
							format: 'image/png',
							transparent: true,
							maxZoom: 20,
							//minZoom: 13
						}
					]
				}
							},
					{
				active: false,
				name: "Negozi (stores)",
				icon: '<i class="icon icon-supermarche"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'it.poi.stores',
							format: 'image/png',
							maxZoom: 20,
							transparent: true,
							//minZoom: 13
						}
					]
				}
						},
			
								{
				active: false,
				name: "Servizi/emerg. (services/emerg.)",
				icon: '<i class="icon icon-emergency"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'it.poi.services',
							format: 'image/png',
							transparent: true,
							maxZoom: 20,
							//minZoom: 13
						}
					]
				}
							},
							
								{
				active: false,
				name: "Cose da fare (going out)",
				icon: '<i class="icon icon-loisirs"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'it.poi.loisirs',
							format: 'image/png',
							transparent: true,
							maxZoom: 20,
							//minZoom: 13
						}
					]
				}

			},


                                                                {
                                active: false,
                                name: "Catalogo patrim. (listed bldgs)",
                                icon: '<i class="icon icon-monument"></i>',
                                layer: {
                                        type: "tileLayer.wms",
                                        args: ["http://mappingforyou.eu/geoserver/wms", {
                                                        layers: 'it.patrim.catalogopatrim',
                                                        format: 'image/png',
                                                        transparent: true,
                                                        maxZoom: 20,
                                                        //minZoom: 13
                                                }
                                        ]
                                }
                                
                        },

                 												{
				active: false,
				name: "Foto pubbliche Flickr",
				icon: '<i class="icon icon-monument"></i>',
				layer: flickr,
							},
						
	
	

{ 

name: "Strade (roads)", 

icon: '<i class="icon icon-road"></i>', 

layer: L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lines/{z}/{x}/{y}{r}.{ext}', { 

		subdomains: 'abcd',


    maxZoom:20, 
	ext: 'png'


}) 

}, 

			

{ 

name: "Rete ciclabile (cycling)", 

icon: '<i class="icon icon-velo"></i>', 

layer: L.tileLayer('https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png', { 

    maxZoom:20, 

  

}) 

}, 

		
		
		
 

{ 

name: "Trekking (hiking)", 

icon: '<i class="icon icon-randonnee"></i>', 

layer: L.tileLayer('https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png', { 

    maxZoom:20, 

  

}) 

}, 

 

{ 

name: "Sci (skiing)", 

icon: '<i class="icon icon-mountains"></i>', 

layer: L.tileLayer('https://tiles.opensnowmap.org/pistes/{z}/{x}/{y}.png', { 

    maxZoom:20, 

  

}) 

}, 

 
  

	
										{
				active: false,
				name: "Linee de contorno (cont. lines)",
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

name: "Dessins (drawn items)", 

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
