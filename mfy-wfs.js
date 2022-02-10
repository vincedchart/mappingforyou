
// feature layer

// colorisation puis table attributaire du featurelayer1 
 
var featureLayer = new L.GeoJSON( 
null, { 
  //  style: styled(color= 'Peru', fillColor = 'Peru'), 
      pointToLayer: function (feature, latlng) { 
    var circleMarker = L.circleMarker(latlng, { 
      radius: 4, 
      fillColor: '#cc5500', 
      color: "#fff", 
      weight: 7, 
      opacity: 0.5, 
      fillOpacity: 0.5 
    }); 
    return(circleMarker); 
  }, 

    onEachFeature:  
         function popUpall(feature, layer) { 
        //console.info(feature); 
        var out = []; 
        if (feature.properties) { 
            for (var key in feature.properties) { 
                out.push(key + ": " + feature.properties[key]); 
            } 
            layer.bindPopup(out.join("<br />"), customOptions); 
        } 
    } 
}); 



// Premier WFS, fonctionnel 

var start_at_zoom = 10; 

// inutile ?

function onEachFeature(feature, layer) { 
    // pour afficher seulement une ou deux ou plus, données dans l'infobulle 
    if (feature.properties && feature.properties.appelation) { 
        layer.bindPopup(feature.properties.appelation + '</br>' + feature.properties.legende) ; 
    } 
} 

function loadGeoJson(data) { 
   // console.log(data); 
    $("#total").html(data.features.length); 
    featureLayer.clearLayers(); 
    featureLayer.addData(data); 
} 

map.on('moveend', load_wfs); 

 
function load_wfs() { 
    if (map.getZoom() > start_at_zoom) { 
        var geoJsonUrl = 'https://mappingforyou.eu/geoserver/wfs?'; 
        var defaultParameters = { 
            service: 'WFS', 
            version: '1.0.0', 
            request: 'getFeature', 
            typeName: wfs1, 
            maxFeatures: 300, 
            outputFormat: 'text/javascript', 
            format_options: 'callback: getJson', 
            srsName: 'EPSG:4326' 
        }; 

          var customParams = { 
            bbox: map.getBounds().toBBoxString() 
        }; 

        var parameters = L.Util.extend(defaultParameters, customParams); 
        console.log(geoJsonUrl + L.Util.getParamString(parameters)); 

        $.ajax({ 
            jsonp: false, 
            url: geoJsonUrl + L.Util.getParamString(parameters), 
            dataType: 'jsonp', 
            jsonpCallback: 'getJson', 
            success: loadGeoJson 
        }); 
      } else { 
        featureLayer.clearLayers(); 
    } 
} 

  
// colorisation et table attributaire featureLayer2

var featureLayer2 = new L.GeoJSON( 
null, { 
  //  style: styled(color= 'Peru', fillColor = 'Peru'), 
           pointToLayer: function (feature, latlng) { 
    var circleMarker2 = L.circleMarker(latlng, { 
      radius: 8, 
      fillColor: '#000000', 
      color: "#000000", 
      weight: 7, 
      opacity: 0.5, 
      fillOpacity: 0.5 
    }); 
    return(circleMarker2); 
  }, 
    onEachFeature:  
    function popUpall2(feature, layer) { 
        //console.info(feature); 
        var out = []; 
        if (feature.properties) { 
            for (var key in feature.properties) { 
                out.push(key + ": " + feature.properties[key]); 
            } 
            layer.bindPopup(out.join("<br />")); 
        } 
    } 
}); 

  
  
// test wfs2 

var start_at_zoom2 = 10; 

function onEachFeature2(feature, layer) { 
    // does this feature have a property named dz? 
    if (feature.properties && feature.properties.appelation) { 
        layer.bindPopup(feature.properties.cuisine + '</br>' + feature.properties.legende) ; 
    } 
} 

function loadGeoJson2(data) { 
   // console.log(data); 
    $("#total").html(data.features.length); 
    featureLayer2.clearLayers(); 
    featureLayer2.addData(data); 
} 
map.on('moveend', load_wfs2); 

function load_wfs2() { 
    if (map.getZoom() > start_at_zoom2) { 
        var geoJsonUrl2 = 'https://mappingforyou.eu/geoserver/wfs?'; 
        var defaultParameters2 = { 
            service: 'WFS', 
            version: '1.0.0', 
            request: 'getFeature', 
            typeName: wfs2, 
            maxFeatures: 300, 
            outputFormat: 'text/javascript', 
            format_options: 'callback: getJson2', 
            srsName: 'EPSG:4326' 
        }; 

  

        var customParams2 = { 
            bbox: map.getBounds().toBBoxString() 
        }; 
        var parameters2 = L.Util.extend(defaultParameters2, customParams2); 
        console.log(geoJsonUrl2 + L.Util.getParamString(parameters2)); 

        $.ajax({ 
            jsonp: false, 
            url: geoJsonUrl2 + L.Util.getParamString(parameters2), 
            dataType: 'jsonp', 
            jsonpCallback: 'getJson2', 
            success: loadGeoJson2 
        }); 

    } else { 
        featureLayer2.clearLayers(); 
    } 
}

//////////// 

load_wfs(); 
load_wfs2(); 

