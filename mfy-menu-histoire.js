

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

		name: "Vue aérienne (aerial view)",

	layer: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {



		})

			},

		

	

												{
				active: false,
				name: "1994",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1994',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
															{
				active: false,
				name: "1945",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1945',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
															{
				active: false,
				name: "1938",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1938',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
															{
				active: false,
				name: "1920",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1920',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
															{
				active: false,
				name: "1914",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1914',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
															{
				active: false,
				name: "1880",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1880',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
															{
				active: false,
				name: "1815",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1815',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
															{
				active: false,
				name: "1783",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1783',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
															{
				active: false,
				name: "1715",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1715',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
															{
				active: true,
				name: "1650",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1650',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
																{
				active: false,
				name: "1530",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1530',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
										{
				active: false,
				name: "1492",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1492',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
																{
				active: false,
				name: "1279",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1279',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
																{
				active: false,
				name: "1000",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1000',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
																{
				active: false,
				name: "800",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.0800',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
																		{
				active: false,
				name: "600",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.0600',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
																		{
				active: false,
				name: "400",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.0400',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
																		{
				active: false,
				name: "-1",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.-0001',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
																		{
				active: false,
				name: "-200",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.-0200',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
																		{
				active: false,
				name: "-323",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.-0323',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
																		{
				active: false,
				name: "-500",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.-0500',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
																		{
				active: false,
				name: "-1000",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.-1000',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
																		{
				active: false,
				name: "-2000",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.-2000',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
								
			
								{
				active: false,
				name: "Unesco",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.patrim.unesco',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
					
	
	
										{
				active: false,
				name: "Courbes de niveau (contour lines)",
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

   

 

       

                  

 

 
