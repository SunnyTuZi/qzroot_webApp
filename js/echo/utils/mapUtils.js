define(
  "echo/utils/mapUtils", ["esri/geometry/Extent",
    "esri/geometry/screenUtils",
    "dojo/NodeList-dom", "dojo/NodeList-manipulate"
  ],
  function(Extent, screenUtils) {
    var UFO = {
      zoomToExtent: function(map, extent) {
        var a = screenUtils.toScreenGeometry(map.extent, map.width, map.height, extent);
        var b = new Extent(a.xmin - 150, a.ymin + 150, a.xmax + 150, a.ymax - 150);
        var c = screenUtils.toMapGeometry(map.extent, map.width, map.height, b);
        map.setExtent(c);
      }
    };
    return UFO;

  }); //end define
