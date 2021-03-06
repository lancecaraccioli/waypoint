(function() {
  'use strict';
  var app = angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'appmap',
    'ngAnimate'
  ]);

  app.config(function($compileProvider) {
    //tell angular to allow 'chrome-extension' urls
    var currentImgSrcSanitizationWhitelist = $compileProvider.imgSrcSanitizationWhitelist();
    var newImgSrcSanitizationWhiteList = currentImgSrcSanitizationWhitelist.toString().slice(0, -1) +
      '|chrome-extension:' +
      currentImgSrcSanitizationWhitelist.toString().slice(-1);

    $compileProvider.imgSrcSanitizationWhitelist(newImgSrcSanitizationWhiteList);
  });

})();
