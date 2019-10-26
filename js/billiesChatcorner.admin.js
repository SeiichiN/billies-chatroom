/*
 * billiesChatcorner.js
 * ルート名前空間モジュール
 */
/*jslint          browser : true, continue : true,
  devel   : true, indent  : 2,    maxerr   : 50,
  newcap  : true, nomen   : true, plusplus : true,
  regexp  : true, sloppy  : true, vars     : true,
  white   : true
  */
/*global jQuery, $, billiesChatcorner */

var billiesChatcorner = {
  admin : {},
  util : {},
  util_b : {}
};

billiesChatcorner.admin = (function () {
  var initModule = function ($container) {
    billiesChatcorner.model.initModule( $container );
    billiesChatcorner.admin.shell.initModule( $container );
  };

  return { initModule : initModule };
}());
