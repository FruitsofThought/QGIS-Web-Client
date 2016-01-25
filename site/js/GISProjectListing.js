var gis_projects = {
 "path": "/maps",
 "mapserver": "/wms/",
 "thumbnails": "/thumbnails",
 "title": "Ng'ambo Project",
 "DXFExportDownloadDisclaimer":"<h4 class='DXFExportDisclaimer'>QGIS Web Client DXF Export Disclaimer</h4><p class='DXFExportDisclaimer'>Put your disclaimer text here ...</p>",
 "DXFExportPrefix":"qgis_dxf_export_",
 "topics": [/*{
  "name": "QGIS Server Hello World",
  "projects": [{
   "name": "QGIS Server Hello World", //name needs to correspond with the project title (Project Properties --> General --> Project Title)
   "projectpath": "/var/www/qgis-web-client/projects",
   "projectfile": "helloworld",
   "thumbnail": "helloworld.png",
   "format": "image/png",
   "visibleLayers": "Country,Hello",
/*
   // optional WMTS base layers (when using enableWmtsBaseLayers), omit or set null for none
   "wmtsLayers": [
    {
     // this WMS layer will be used for printing, feature info, legend and metadata
     "wmsLayerName": "Country",
     // WMTS base layer config
     "wmtsConfig": {
      "name": "OpenGeo Countries",
      "url": "http://v2.suite.opengeo.org/geoserver/gwc/service/wmts/",
      "layer": "opengeo:countries",
      "matrixSet": "EPSG:900913",
      "matrixIds": ["EPSG:900913:0", "EPSG:900913:1", "EPSG:900913:2", "EPSG:900913:3", "EPSG:900913:4", "EPSG:900913:5", "EPSG:900913:6", "EPSG:900913:7", "EPSG:900913:8", "EPSG:900913:9", "EPSG:900913:10", "EPSG:900913:11", "EPSG:900913:12", "EPSG:900913:13", "EPSG:900913:14", "EPSG:900913:15", "EPSG:900913:16", "EPSG:900913:17", "EPSG:900913:18", "EPSG:900913:19", "EPSG:900913:20", "EPSG:900913:21", "EPSG:900913:22", "EPSG:900913:23", "EPSG:900913:24", "EPSG:900913:25"],
      "format": "image/png",
      "style": "_null",
      "opacity": 0.7
     }
    }
   ],
*/
/*
   "enableDXFExport": true,
      "updateInterval": "occasional",
   "responsible": "The QGIS project",
   "showFeatureInfoLayerTitle": false,
   "tags": "Hello World,beginner project"
  }]
 },{
  "name": "Natural Earth",
  "projects": [{
   "name": "Natural Earth View", //name needs to correspond with the project title (Project Properties --> General --> Project Title)
   "projectpath": "/var/www/qgis-web-client/projects",
   "projectfile": "naturalearth_110million",
   "format": "image/png; mode=8bit",
   "visibleLayers": "Land,Lakes,Glaciated Areas,Rivers,Shaded Relief",
   "opacities": {"Glaciated Areas":90,"Land":253},
   "enableDXFExport": true,
      "updateInterval": "occasional",
   "responsible": "The QGIS project",
   "tags": "Natural Earth,Physical Earth Map"
  }]
 },*/
  {
    "name": "Base Maps",
    "projects":
    [
      {
        "name": "Ng'ambo Mapping", //name needs to correspond with the project title (Project Properties --> General --> Project Title)
        "projectpath": "",
        "projectfile": "NgamboMapping",
        "thumbnail": "NgamboMapping.png",
        "format": "image/png; mode=8bit",
        "visibleLayers": "Shops, Buildings, Water Catchments",
        "opacities": {},
        "enableDXFExport": false,
        "updateInterval": "occasional",
        "responsible": "Mountbatten",
        "tags": "Mapping"
      },
      {
        "name": "Ng'ambo Historic Mapping", //name needs to correspond with the project title (Project Properties --> General --> Project Title)
        "projectpath": "",
        "projectfile": "NgamboHistoric",
        "thumbnail": "NgamboMapping.png",
        "format": "image/png; mode=8bit",
        "visibleLayers": "Historic Buildings, Architectural Pearls of Zanzibar",
        "opacities": {},
        "enableDXFExport": false,
        "updateInterval": "occasional",
        "responsible": "Mountbatten",
        "tags": "Historic"
      }
    ]
  },
  {
    "name": "Ngambo Basemap",
    "projects":
    [
      {
        "name": "Ng'ambo Base Map", //name needs to correspond with the project title (Project Properties --> General --> Project Title)
        "projectpath": "",
        "projectfile": "NgamboBasemap",
        "thumbnail": "NgamboMapping.png",
        "format": "image/png; mode=8bit",
        "visibleLayers": "Buildings",
        "opacities": {},
        "enableDXFExport": false,
        "updateInterval": "occasional",
        "responsible": "Mountbatten",
        "tags": "Historic"
      }
    ]
  },
  {
    "name": "HUL-1 Maps",
    "projects": 
    [
      {
        "name": "Ngambo HUL-1 1846", //name needs to correspond with the project title (Project Properties --> General --> Project Title)
        "projectpath": "",
        "projectfile": "Ngambo HUL-1 1846",
        "thumbnail": "1846 Guillain.png",
        "format": "image/png",
        "visibleLayers": "1846 Guillain",
        "opacities": {"1846 Guillain":50},
   //   "opacities": {"Buildings":0,"Other Line Things":100,"Roads":0,"Waterways":0,"Natural Areas,Leisure Areas":0,"1960 Land Surveys Zanzibar":50},
        "enableDXFExport": false,
        "updateInterval": "occasional",
        "responsible": "Mountbatten",
        "tags": "HUL"
      },
      {
        "name": "Ng'ambo HUL-1 1960", //name needs to correspond with the project title (Project Properties --> General --> Project Title)
        "projectpath": "",
        "projectfile": "Ngambo HUL-1 1960",
        "thumbnail": "1960 bnw.png",
        "format": "image/png",
        "visibleLayers": "1960 Land Surveys Zanzibar",
         "opacities": {"1960 Land Surveys Zanzibar":50},
        "enableDXFExport": false,
        "updateInterval": "occasional",
        "responsible": "Mountbatten",
        "tags": "HUL"
      },
      {
        "name": "Ng'ambo Historic Mapping", //name needs to correspond with the project title (Project Properties --> General --> Project Title)
        "projectpath": "",
        "projectfile": "NgamboHistoric",
        "thumbnail": "NgamboHistoric.png",
        "format": "image/png",
        "visibleLayers": "Historic Buildings,Architectural Pearls of Zanzibar",
        "opacities": {},
        "enableDXFExport": false,
        "updateInterval": "occasional",
        "responsible": "Mountbatten",
        "tags": "Historic"
      },
      {
        "name": "Ng'ambo HUL-1 Building Age", //name needs to correspond with the project title (Project Properties --> General --> Project Title)
        "projectpath": "",
        "projectfile": "Ngambo HUL-1 Building Age",
        "thumbnail": "Ngambo HUL-1 Building Age.png",
        "format": "image/png",
        "visibleLayers": "Building Age",
        "opacities": {},
        "enableDXFExport": false,
        "updateInterval": "occasional",
        "responsible": "Mountbatten",
        "tags": "Historic"
      }
    ]
  },
  {
    "name": "HUL-3 Maps",
    "projects": 
    [
      {
        "name": "Ng'ambo HUL-3 Condition", //name needs to correspond with the project title (Project Properties --> General --> Project Title)
        "projectpath": "",
        "projectfile": "Ngambo HUL-3 Building Condition",
        "thumbnail": "Ngambo HUL-3 Building Condition.png",
        "format": "image/png",
        "visibleLayers": "Building Condition,Construction Sites",
        "opacities": {},
   //   "opacities": {"Buildings":0,"Other Line Things":100,"Roads":0,"Waterways":0,"Natural Areas,Leisure Areas":0,"1960 Land Surveys Zanzibar":50},
        "enableDXFExport": false,
        "updateInterval": "occasional",
        "responsible": "Mountbatten",
        "tags": "HUL"
      }
    ]
  }
]};


