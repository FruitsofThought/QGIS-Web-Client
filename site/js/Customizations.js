// customInit() is called before any map initialization
function customInit() {

//     // I create a new control click event class
//     OpenLayers.Control.Click = OpenLayers.Class(OpenLayers.Control, {
//         defaultHandlerOptions: {
//   'single': true,
//   'double': false,
//   'pixelTolerance': 0,
//   'stopSingle': false,
//   'stopDouble': false
//         },
//         initialize: function(options) {
//   this.handlerOptions = OpenLayers.Util.extend(
//           {}, this.defaultHandlerOptions
//   );
//   OpenLayers.Control.prototype.initialize.apply(
//           this, arguments
//   );
//   this.handler = new OpenLayers.Handler.Click(
//           this, {
//     'click': this.trigger
//           }, this.handlerOptions
//   );
//         }
//     });
}

// called before map initialization
function customBeforeMapInit() {
//  Example how to use a WMS layer as background layer:
//  create an OpenLayers.Layer.WMS object, see OpenLayers documentation for details
//  var myBackgroundLayer = new OpenLayers.Layer.WMS("myName",
//      "myURL", {
//          layers: "myLayer",
//          format: format,
//          dpi: screenDpi,
//          VERSION: "1.3.0"
//      },
//      {
//          buffer:0,
//          singleTile:true,
//          ratio:1,
//          transitionEffect:"resize",
//          isBaseLayer: true,
//          projection:authid
//      }
//  );
//
//  add the layer to the array of background layers
//  baseLayers.push(myBackgroundLayer); 
  

// mapbox is not added yet
// 4 is the default OSM layers
  if (baseLayers.length < 5) {
  
  var myBackgroundLayer = new OpenLayers.Layer.XYZ("Mapbox Street",
    ["http://a.tiles.mapbox.com/v4/reinier.map-6x4cbjrs/${z}/${x}/${y}.png?access_token=pk.eyJ1IjoicmVpbmllciIsImEiOiJYTHBYeW9jIn0.vhzQp9gepxVOTgRrjWMW8A"], {
    sphericalMercator: true,
    wrapDateLine: true,
    isBaseLayer: true,
});
baseLayers.push(myBackgroundLayer);
  var myBackgroundLayer = new OpenLayers.Layer.XYZ("Mapbox Natural",
    ["http://a.tiles.mapbox.com/v4/reinier.map-6x4cbjrs/${z}/${x}/${y}.png?access_token=pk.eyJ1IjoicmVpbmllciIsImEiOiJYTHBYeW9jIn0.vhzQp9gepxVOTgRrjWMW8A"], {
    sphericalMercator: true,
    wrapDateLine: true,
    isBaseLayer: true,
});
baseLayers.push(myBackgroundLayer);

var myBackgroundLayer = new OpenLayers.Layer.XYZ("Mapbox Light",
    ["https://a.tiles.mapbox.com/v4/reinier.p05mb3l5/${z}/${x}/${y}.png?access_token=pk.eyJ1IjoicmVpbmllciIsImEiOiJYTHBYeW9jIn0.vhzQp9gepxVOTgRrjWMW8A"], {
    sphericalMercator: true,
    wrapDateLine: true,
    isBaseLayer: true,
});
baseLayers.unshift(myBackgroundLayer);
var myBackgroundLayer = new OpenLayers.Layer.XYZ("Mapbox High Contrast",
    ["https://a.tiles.mapbox.com/v4/reinier.onp8chek/${z}/${x}/${y}.png?access_token=pk.eyJ1IjoicmVpbmllciIsImEiOiJYTHBYeW9jIn0.vhzQp9gepxVOTgRrjWMW8A"], {
    sphericalMercator: true,
    wrapDateLine: true,
    isBaseLayer: true,
});
baseLayers.push(myBackgroundLayer);
  var myBackgroundLayer = new OpenLayers.Layer.XYZ("Mapbox Pirates!",
    ["https://a.tiles.mapbox.com/v4/reinier.onp8ndmf/${z}/${x}/${y}.png?access_token=pk.eyJ1IjoicmVpbmllciIsImEiOiJYTHBYeW9jIn0.vhzQp9gepxVOTgRrjWMW8A"], {
    sphericalMercator: true,
    wrapDateLine: true,
    isBaseLayer: true,
});
baseLayers.push(myBackgroundLayer);

// Path to map
  var servername = location.href.split(/\/+/)[1];
  mappath = "http://"+servername;
  if (gis_projects) {
 //  mappath += gis_projects.path + "/";
  }
  else {
   mappath += "/";
  }
  mappath += "/wms/NgamboHistoric";

  maps = [
    "1987 Zanzibar Plan",
    "1973 Post Revolution Developments",
    "1960 Land Surveys Zanzibar",
    "1927 Zanzibar City Survey",
    "1897 Baumann",
    "1892 Plan of Zanzibar",
    "1846 Guillain"
  ];
  
  maps.forEach(function(addmap) {
    myBackgroundLayer =  new OpenLayers.Layer.WMS(addmap,
      mappath, {
        layers: addmap,
        //opacities: layerOpacities(selectedLayers),
        format: "image/jpg",
        styles: "Black And White Print",
        //transparent: qgisLayerTransparency,
        //dpi: screenDpi,
        VERSION: "1.3.0"
      },
      LayerOptions
    );
    baseLayers.push(myBackgroundLayer);
  });

//baseLayers.splice('MapQuest-OSM Tiles',1);
// Remove MapQuest layers
baseLayers.splice(1,1);
baseLayers.splice(2,1);

//unset(baseLayers['

  }

}

// called after map initialization
function customAfterMapInit() {

//     // Create a new map control based on Control Click Event
//     openlayersClickEvent = new OpenLayers.Control.Click( {
//         trigger: function(e) {
//             var xy = geoExtMap.map.getLonLatFromViewPortPx(e.xy);
//             var x = xy.lon;
//             var y = xy.lat;
//
//             alert ( "You clicked on " + x + ", " + y );
//         }
//     });
// 
//     geoExtMap.map.addControl(openlayersClickEvent);
}

// called at the end of GetMapUrls
function customAfterGetMapUrls() {
}

// called when DOM is ready (Ext.onReady in WebgisInit.js)
function customPostLoading() {
//    Ext.get("panel_header").addClass('sogis-header').insertHtml('beforeEnd', '<div style="float: right; width: 250px;">hello world</div>');
}

// called when starting print
function customBeforePrint() {
    // do something. e.g. rearrange your layers
}

// called when printing is launched
function customAfterPrint() {
    // do something. e.g. rearrange your layers
}

// new buttons for the toolbar
var customButtons = [ 
   
//    // Add a separator and a button
//    {
//      xtype: 'tbseparator'
//    }, {
//      xtype: 'button',
//      enableToggle: true,
//      allowDepress: true,
//      toggleGroup: 'mapTools',
//      scale: 'medium',
//      icon: 'gis_icons/test.gif',
//      tooltipType: 'qtip',
//      tooltip: "Test button - click on the map",
//      id: 'TESTBUTTON'
//    }
];

// code to add buttons in the toolbar
function customToolbarLoad() {
//     // Handle the button click
//     Ext.getCmp('TESTBUTTON').toggleHandler = mapToolbarHandler;
}

// called when an event on toolbar is invoked
function customMapToolbarHandler(btn, evt) {
//     // Check if the button is pressed or unpressed
//     if (btn.id == "TESTBUTTON") {
//         if (btn.pressed) {
//              alert ( "You clicked on Test Button!" );
//              openlayersClickEvent.activate();
//         }
//         else
//         {
//              alert ( "TEST button is toggled up!" );
//              openlayersClickEvent.deactivate();
//         }
//     }
}

// called when the user clicks on a check in layerTree.
// n is a Ext.TreeNode object
function customActionLayerTreeCheck(n) {
//    if (n.text == "test layer") {
//        alert ("test layer check state:" + n.attributes.checked);
//    }
}


// called when the user zooms.
function customActionOnZoomEvent() {
	// NOTE: if you define customActionOnMoveEvent() (see below)
	// that function is called during zooms, too!
var permalink = createPermalink();
history.replaceState(null, null, permalink);

	// ... action to do on call
}

// called after a drag, pan, or zoom completed
function customActionOnMoveEvent() {
	// ... action to do on call
var permalink = createPermalink();
history.replaceState(null, null, permalink);
}
