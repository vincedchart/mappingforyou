// delete div du splash screen 

  

setTimeout(fade_out, 5000); 

  

function fade_out() { 

  $("#mydiv").fadeOut().empty(); 

} 

 

 

// normal 

var params = {}; 

window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) { 

  params[key] = value; 

}); 

 

 


     

var lat = params.lat || init.lat; 

var lng = params.lng || init.lng; 

var map = L.map('map', { 

  center: [lat, lng],  

    maxBounds: bounds, 

//   crs: L.CRS.EPSG4326, 

    minZoom: minZoom, 

    maxZoom:maxZoom, 

    zoom: params.zoom || init.zoom,  

  layers: [mapbase, hillshading], 

  zoomControl: true, 

      fullscreenControl: true, 

  fullscreenControlOptions: { 

    position: 'topleft' 

  }   

}); 



 
            // left  menu
            
                var   contents = '<h2>Allow geolocation</h2>'; 
                                              contents += '<i>Geolocatie toestaan. Geolokalisierung zulassen. Activar geolocalización. Autoriser la géolocalisation. Geolocation a cheadú. Loyva geolocation. Leyfa landfræðilega staðsetningu. Attiva la geolocalizione. Autorizar a geolocalização. Aktive jeolokalizasyon</i>'; 
                       
                       contents += '<p>Add http://mappingforyou.eu to the address:</p>'; 
                                              contents += '<i>Toevoegen http://mappingforyou.eu aan adres: Hinzufügen http://mappingforyou.eu unter der Adresse: Agregar http://mappingforyou.eu a la dirección: Leggja afturat http://mappingforyou.eu: Ajouter http://mappingforyou.eu à l adresse : Cuir http://mappingforyou.eu ag an seoladh: Bæta við http://mappingforyou.eu til bústaður: Aggiungi http://mappingforyou.eu all indirizzo: Adicionar http://mappingforyou.eu ao endereço:</i>'; 
                       
                   contents += '<h3>chrome://flags/#unsafely-treat-insecure-origin-as-secure</h3>'; 

                                                                                                contents += '<h2>Availiable maps</h2>'; 
                                                                            
                                                         contents += '<a href="http://mappingforyou.eu/benelux/?zoom=8&lat=50.586&lng=5.002">🇧🇪België   </a>'; 

                 contents += '<a href="http://mappingforyou.eu/deutschland">🇩🇪 Deutschland   </a>'; 

                                contents += '<a href="http://mappingforyou.eu/espana">🇪🇸 Espana   </a>'; 

                                    contents += '<a href="http://mappingforyou.eu/icelandfaroe/?zoom=9&lat=62.004&lng=-6.371">🇩🇰 Føroyar   </a>'; 

  

  contents += '<a href="http://mappingforyou.eu/france">🇫🇷 France   </a>'; 

  contents += '<a href="http://mappingforyou.eu/atlasfrancilien">🇫🇷 Paris - Atlas francilien   </a>'; 

        contents += '<a href="http://mappingforyou.eu/ellada"🇬🇷 Ellada </a>'; 


        contents += '<a href="http://mappingforyou.eu/ukir/?zoom=8&lat=53.439&lng=-6.891">🇮🇪 Ireland   </a>'; 

  

                contents += '<a href="http://mappingforyou.eu/icelandfaroe/?zoom=7&lat=64.86&lng=-18.781">🇮🇸 Ísland   </a>'; 

  

        contents += '<a href="http://mappingforyou.eu/italia">🇮🇹 Italia   </a>'; 

                contents += '<a href="http://mappingforyou.eu/benelux/?zoom=8&lat=52.463&lng=5.002">🇳🇱 Nederland   </a>'; 

                        contents += '<a href="http://mappingforyou.eu/paysalpins/?zoom=8&lat=47.828&lng=13.900">🇦🇹 Oesterreich   </a>'; 

        contents += '<a href="http://mappingforyou.eu/portugal">🇵🇹 Portugal   </a>'; 

                contents += '<a href="http://mappingforyou.eu/paysalpins/?zoom=8&lat=47.093&lng=9.110">🇨🇭Schweiz   </a>'; 

        contents += '<a href="http://mappingforyou.eu/ukir/?zoom=7&lat=53.63&lng=-4.499">🇬🇧 United Kingdom   </a>'; 

                    

                                                         contents += '<h3>Cartes du monde (maps of the world)</h3>'; 

                                                                                                 contents += '<a href="http://mappingforyou.eu/monde">🇺🇳 Monde   </a>'; 

  contents += '<a href="http://mappingforyou.eu/histoire">🇺🇳 History   </a>'; 

        contents += '<a href="http://mappingforyou.eu/usa">🇺🇸 United States   </a>'; 

        contents += '<a href="http://mappingforyou.eu/antillesguyane">🇫🇷 Antilles Guyane   </a>'; 

                contents += '<a href="http://mappingforyou.eu/reunionmayotte">🇫🇷 Réunion Mayotte   </a>'; 

                 
                                      contents += '<h2>Origin of data</h2>'; 

                                                                                     contents += '<i>Source des données</i>'; 

                                                         contents += '<p>(C) Openstreetmap contributors, ESRI, Diva-Gis, EAA, MinistÃ¨re de la Culture franÃ§ais, plateforme opendata du gouv.franÃ§ais, CAUE dÃ©partementaux de France, IGN France, British Crown Copyright, USDA, Ministero Italiano della Cultura, dell Ambiante, Gobierno espanol (IGN), http://www2.jpl.nasa.gov/srtm (NASA SRTM 2 hillshade)</p>'; 

                                    contents += '<h2>Contact (contact)</h2>'; 

                                                         contents += '<p>Vincent Dechartres, Mapping for you, France, mail(-at-)mappingforyou.eu</p>'; 

                                        contents += '<h2>Features</h2>'; 
                                        
                                                                                                                             contents += '<i>Fonctionnalités</i>'; 

                                                            contents += '<p>Opening geojson, GPX and shape files, drawing shapes of all kinds, basic labelling and downloading them in gpx or geojson.</p>'; 

                                                                      contents += '<input type="text" id="number" value="15"><button onclick="myFunction()">Disabled buffer</button><p id="demo"></p>'; 

           contents += '                                        <p>Send zipped SHP</p> <input type="file" id="file"><input type="submit" id="submit"> <span id="warning"></span></p>'; 

                                                   contents += '<h2>Corine Land Cover key</h2>'; 

      contents += '          <img src="../icons/legend.png">'; 
      
      
                                                                                             
            
            
            

            L.control.slideMenu(contents).addTo(map); 

  

            // right  menu

   //         var slideMenu = L.control.slideMenu('', {position: 'topright', menuposition: 'topright', width: '30%', height: '400px', delay: '50', icon: 'fa-chevron-left'}).addTo(map); 

     //       slideMenu.setContents(right + contents); 


  // flickr publics 

var flickr = new L.Flickr('41b399eb7bedfbeccddd276e68b21c87',{maxLoad: 25, maxTotal: 75});  


   // specify popup options  

    var customOptions = 

        { 

        maxHeight: 200, maxWidth: 200 

        }; 


// Controle couches 

  

function styled(feature) { 

    return { 

        weight: 9, 

        opacity: 1, 

        color: color, 

        fillColor: fillColor, 

        fillOpacity: 0.5, 

    }; 

}
