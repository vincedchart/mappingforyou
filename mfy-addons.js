

// scale

L.edgeScaleBar().addTo(map);
L.control.betterscale({metric: true, imperial: false}).addTo(map);

// photos de son flickr 

 

var photoLayer = L.photo.cluster({ chunkedLoading: true }).on('click', function (evt) {	 

var photo = evt.layer.photo, 

template = '<img src="{url}"/></a><p>{caption}</p>'; 

  

evt.layer.bindPopup(L.Util.template(template, photo), { 

className: 'leaflet-popup-photo', 

minWidth: 300 

}).openPopup(); 

}); 



// Get JSON request 

    var xhr= new XMLHttpRequest(); 

    xhr.open("GET",flickrAPI,true);   //  

    xhr.send(); 

    xhr.onreadystatechange=function(){ 

        if(xhr.readyState==4 && xhr.status==200) { 

            var data = JSON.parse(xhr.responseText); 

            console.log(data.photos); 

            //alert('total geophotos: '+ data.photos.photo.length); 

            var photos = []; 

            for (var i = 0; i < data.photos.photo.length; i++) { 

var p = data.photos.photo[i];  

// Date 

var pdate = new Date(p.dateupload*1000); 

var months = ['January','February','March','April','May','June','July','August','Septepmber','October','November','December']; 

pdate = pdate.getDate()+'&nbsp;'+months[pdate.getMonth()]+'&nbsp;'+pdate.getFullYear(); 

// Push  

photos.push({ 

lat: p.latitude, 

lng: p.longitude,  

url: 'https://live.staticflickr.com/' + p.server + '/' + p.id + '_' + p.secret + '.jpg', 

caption: '<a id="'+p.id+'" title="'+p.title+'" href="https://www.flickr.com/photos/'+p.owner+'/'+p.id+'/" target="_new">'+p.title+'</a><br/>'+ 

'<a href="https://www.flickr.com/">Flickr</a> &copy;&nbsp;<a href="http://www.flickr.com/photos/'+p.owner+'/" target="_new">'+p.ownername+'</a>, '+ 

pdate, 

thumbnail:p.url_t 

});  

}  

photoLayer.add(photos).addTo(map); 

// map.fitBounds(photoLayer.getBounds());  

        }  

    }; 

 

 	
// echelle 

L.control.scale({metric: true, imperial: false}).addTo(map); 

 
  

// localisation sur carte 

 var gps = new L.Control.Gps({ 

//autoActive:true, 

autoCenter:true 

});//inizialize control 

gps 

.on('gps:located', function(e) { 

// e.marker.bindPopup(e.latlng.toString()).openPopup() 

console.log(e.latlng, map.getCenter()) 

}) 

.on('gps:disabled', function(e) { 

e.marker.closePopup() 

}); 

gps.addTo(map); 

 

// compass – boussole 

var comp = new L.Control.Compass({autoActive: true, showDigit:true, position: 'topleft'}); 

map.addControl(comp); 





// avoir coordonnées gps 

var ctlMousePosition; 

ctlMousePosition = L.control.mousePosition().addTo(map); 

    

 


  // itineraires 

 var control = L.Routing.control({ 

 router: new L.Routing.osrmv1({ 

    language: 'fr', 

    profile: 'foot', 

  }), 
	 
	 collapsible: true,

  geocoder: L.Control.Geocoder.nominatim({}) 

}).addTo(map); 

 setTimeout(function(){
	control.hide();
}, 500);

// recherche lieu,  

  

        var osmGeocoder = new L.Control.geocoder({ 

           collapsed: true, 

            position: 'topleft', 

            text: 'Trouver', 

}); 

        map.addControl(osmGeocoder); 
 
// minimap

		//Plugin magic goes here! Note that you cannot use the same layer object again, as that will confuse the two map controls
		var osm2 = new L.TileLayer(osmUrl, {minZoom: 4, maxZoom: 6});
		var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true }).addTo(map);


// wikipedia 

var template = '<h2>{label}</h2><p><img src="{thumbnail}" width="150"><br>{abstract}</p><p><a href="{link}" target="_blank">Wikipedia...</a></p>';

var wiki = L.wikipedia({
  query: {
    fields: ['label', 'lat', 'lng', 'abstract', 'link', 'thumbnail'],
    bounds: map.getBounds()
  },
  marker: {
    icon: L.icon({ // Icons from http://www.icondrawer.com/social-icons.php 
      iconUrl: 'http://mappingforyou.eu/icons/wikipedia_16.png',
      iconRetinaUrl: 'http://mappingforyou.eu/icons/wikipedia_32.png',
      iconSize: [16, 16]
    })
  }
}).on('click', function (evt) {
  evt.layer.bindPopup(L.Util.template(template, evt.layer.data), customOptions);
});


// wiki part 2

var start_at_zoom_wiki = 10;
function onMoveEnd(evt) {
  if (map.getZoom() > start_at_zoom_wiki) {
    map.addLayer(wiki);
  }
}
map.on('moveend', onMoveEnd);


//

L.control.browserPrint({position: 'topleft', title: 'Print ...'}).addTo(map);
