(function () {
  'use strict';
  var app = angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'navbar',
    'ngAnimate'
  ]);

  app.config(function ($compileProvider) {
    //tell angular to allow 'chrome-extension' urls
    var currentImgSrcSanitizationWhitelist = $compileProvider.imgSrcSanitizationWhitelist();
    var newImgSrcSanitizationWhiteList = currentImgSrcSanitizationWhitelist.toString().slice(0, -1) +
      '|chrome-extension:' +
      currentImgSrcSanitizationWhitelist.toString().slice(-1);

    $compileProvider.imgSrcSanitizationWhitelist(newImgSrcSanitizationWhiteList);
  });

  app.directive('appNav', function () {
    return {
      replace: true,
      restrict: 'EAC',
      templateUrl: 'app-nav.html'
    };
  });

})();
