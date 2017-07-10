define("echo/utils/StringUtils", [],
  function() {
    var ENTITY = {
      getSuffix: function(file_name) {
        var result = /\.[^\.]+/.exec(file_name);
        return result;
      }
    };
    return ENTITY;

  });
