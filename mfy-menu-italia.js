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
       layers: 'it.poi.hebergement', 
        format: 'image/png',
                 transparent: true,               
}); 

        var restaurants = L.tileLayer.wms('http://mappingforyou.eu/geoserver/wms?', { 
       layers: 'it.poi.barrest', 
        format: 'image/png',
                 transparent: true,               
}); 


        var stores = L.tileLayer.wms('http://mappingforyou.eu/geoserver/wms?', { 
       layers: 'it.poi.stores', 
        format: 'image/png',
                 transparent: true,               
}); 


        var services = L.tileLayer.wms('http://mappingforyou.eu/geoserver/wms?', { 
       layers: 'it.poi.services', 
        format: 'image/png',
                 transparent: true,               
}); 


        var leisure = L.tileLayer.wms('http://mappingforyou.eu/geoserver/wms?', { 
       layers: 'it.poi.loisirs', 
        format: 'image/png',
                 transparent: true,               
}); 


        var monuments = L.tileLayer.wms('http://mappingforyou.eu/geoserver/wms?', { 
       layers: 'it.patrim.catalogopatrim', 
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
		name: "Veduta aerea (aerial view)",
	layer: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {

		})
			},
		
			{
				active: false,
				name: "Alloggio (lodging)",
				icon: '<i class="icon icon-tente"></i>',
				layer: hotels
							},
					{
				active: false,
				name: "Restauro (catering)",
				icon: '<i class="icon icon-restaurant"></i>',
				layer: restaurants
							},
					{
				active: false,
				name: "Negozi (stores)",
				icon: '<i class="icon icon-supermarche"></i>',
				layer: stores
						},
			
								{
				active: false,
				name: "Servizi/emerg. (services/emerg.)",
				icon: '<i class="icon icon-emergency"></i>',
				layer: services
							},
							
								{
				active: false,
				name: "Cose da fare (going out)",
				icon: '<i class="icon icon-loisirs"></i>',
				layer: leisure
			},


                                                                {
                                active: false,
                                name: "Catalogo patrim. (listed bldgs)",
                                icon: '<i class="icon icon-monument"></i>',
                                layer: monuments
                                
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

layer: roads
}, 

			

{ 

name: "Rete ciclabile (cycling)", 

icon: '<i class="icon icon-velo"></i>', 

layer: cycling

}, 

		
		
		
 

{ 

name: "Trekking (hiking)", 

icon: '<i class="icon icon-randonnee"></i>', 

layer: hiking

}, 

 

{ 

name: "Sci (skiing)", 

icon: '<i class="icon icon-mountains"></i>', 

layer: skiing

}, 

 
  

	
										{
				active: false,
				name: "Linee de contorno (cont. lines)",
				icon: '<i class="icon icon-mountains"></i>',
				layer: contourlines
				
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

	    var allMapLayers = {
	      'base': mapbase,
	    'aerial': aerial,
	  'hotels': hotels,
 'restaurants': restaurants,
		     'stores': stores,
		     'services': services,
		     'leisure': leisure,
		     'monuments': monuments,
	     'flickr': flickr,
			     'wikipedia': wiki,
		     'roads': roads,
		     'cycling': cycling,
		     'hiking': hiking,
		     'skiing': skiing,
		     'contourlines': contourlines,
	    
	  }
	    ;
    var hash = new L.Hash(map, allMapLayers);
 




