

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
	{
		group: " ",
		layers: [
		
		

	

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
				name: "1960",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1960',
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
				name: "1900",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1900',
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
				active: false,
				name: "1700",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1700',
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
				name: "1600",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1600',
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
				name: "1500",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1500',
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
				name: "1400",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1400',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
			
												{
				active: false,
				name: "1300",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1300',
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
				name: "1200",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1200',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
			
												{
				active: false,
				name: "1100",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.1100',
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
				name: "900",
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
				name: "0700",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.0700',
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
				name: "500",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.0500',
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
				name: "300",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.0300',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
																			{
				active: false,
				name: "200",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.0200',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
																			{
				active: false,
				name: "100",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.0100',
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
				name: "-100",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.-0100',
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
				name: "-300",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.-0300',
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
				name: "-400",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.-0400',
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
				name: "-1500",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.-1500',
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
				name: "-3000",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.-3000',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
																						{
				active: false,
				name: "-4000",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.-4000',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},				
			
																					{
				active: false,
				name: "-5000",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.-5000',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
			
																					{
				active: false,
				name: "-8000",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.-8000',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
																		{
				active: false,
				name: "-10000",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.-10000',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
				
			},
			
																					{
				active: false,
				name: "-123000",
				icon: '<i class="icon icon-monument"></i>',
				layer: {
					type: "tileLayer.wms",
					args: ["http://mappingforyou.eu/geoserver/wms", {
							layers: 'monde.histoire.-123000',
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

var overLayers = [
	{
		group: " ",
		layers: [

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
					
	
			
			
		]
	},
	
];

// panel

var panelLayers = new L.Control.PanelLayers(baseLayers,overLayers, { 

compact: false, 

collapsed: false, 

collapsibleGroups: false 

}); 

  
map.addControl(panelLayers); 

   

 

       

                  

 

 
