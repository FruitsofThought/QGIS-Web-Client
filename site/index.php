<?php
    $PROJECTS_DIR = '/var/lib/qgis/ngambomap/'
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
    <title>Ng'ambo Maps</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <!-- Framework CSS --> 
    <link rel="stylesheet" href="css/blueprint/screen.css" type="text/css" media="screen, projection"> 
    <link rel="stylesheet" href="css/blueprint/print.css" type="text/css" media="print"> 
    <!--[if lt IE 8]><link rel="stylesheet" href="css/blueprint/ie.css" type="text/css" media="screen, projection"><![endif]--> 
    
    <!-- Import fancy-type plugin for the sample page. --> 
    <link rel="stylesheet" href="css/blueprint/plugins/fancy-type/screen.css" type="text/css" media="screen, projection"> 
    <!-- Tims styles on top of blueprint -->
    <link rel="stylesheet" href="css/style.css" type="text/css" media="screen, projection"> 
  </head>
  <body>
    <div class="container">
      <div class="span-18">
        <h1>Ng'ambo Maps</h1>
        <h2 class="alt">Home</h2> 
      </div>
      <div class="span-6 last">
        <a href="http://qgis.org"><img src="img/qgis-icon.png" alt="QGIS icon"/></a>
      </div>
      <hr>
      <div class="span-18 colborder">
        <p>This page lists all the maps that generated for the NGT team. The maps are not finished yet, we maintain a list of issues with them on <a href="https://github.com/FruitsofThought/ngambomap/issues">GitHub</a>. If you have requests or find problems about the maps, you can report them there. (registring is <a href="https://github.com/join">very easy</a>). If you find an issue with the data, please check on <a href="http://www.openstreetmap.org/#map=16/-6.1647/39.2004&layers=N">OpenStreetMap</a> if it is still there, you can leave a note on the map, or fix it yourself. If it is really severe, again, <a href="https://github.com/FruitsofThought/ngambomap/issues/new">create an issue on Github</a>.If you want to work with the map on your own computer, you can <a href="https://github.com/FruitsofThought/ngambomap/archive/master.zip">download the latest version</a>, unzip it, and open it with <a href="http://qgis.org/en/site/forusers/download.html">QGIS</a>.</p>
        <h2>Our maps</h2>
        <div>
          <ul class="map-list">
            <?php
            foreach(glob($PROJECTS_DIR.'*.qgs') as $file) {
                $filename = substr($file, 0, -4);
                $filename = end(explode('/', $filename));
                print "<li class='map-item'><a href='/maps/$filename'>$filename</a></li>\n";
            }
            ?>
          </ul>
        </div>
        <h2>WMS</h2>
        <p>If you want to use the layers in your own software (eg. JOSM, ArcGIS, GeoNode etc), you can use the following links to WMS GetCapabilities request.
        <div>
          <ul class="map-list">
            <?php
            foreach(glob($PROJECTS_DIR.'*.qgs') as $file) {
                $filename = substr($file, 0, -4);
                $filename = end(explode('/', $filename));
                print "<li class='map-item'><a href='wms/$filename?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities'>$filename (GetCapabilities version 1.3.0)</a></li>\n";
            }
            ?>
          </ul>
        </div>
      </div>
    </div>
<!-- Piwik -->
<script type="text/javascript">
  var _paq = _paq || [];
  _paq.push(["setDomains", ["*.qgisweb.mappingday.com","*.qgisweb.mountbatten.nl"]]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//piwik.mountbatten.net/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', 34]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<noscript><p><img src="//piwik.mountbatten.net/piwik.php?idsite=34" style="border:0;" alt="" /></p></noscript>
<!-- End Piwik Code -->
  </body>
</html>
