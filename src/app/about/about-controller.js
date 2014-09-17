(function () {
  'use strict';

  angular.module('app').
    controller('AboutController', [
      '$scope',
      '$window',
      function ($scope, $window) {
        var that = this,
          win = angular.element($window);

        var calcScreen = function calculateScreenDimensions() {
          that.screen = {
            height: win.height(),
            width: win.width()
          };
        };

        var onResize = function windowResizeHandler() {
          $scope.$apply(calcScreen);
        };

        win.on('resize', onResize);

        calcScreen();

        $scope.$on('$destroy', function() { win.off('resize', onResize); });

      }
    ]);
})();
