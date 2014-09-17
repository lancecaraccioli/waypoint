(function () {
  'use strict';

  angular.module('app').
    controller('AboutController', [
      '$scope',
      '$window',
      function ($scope, $window) {
        var that = this,
          win = angular.element($window);

        var onResize = function windowResizeHandler() {
          that.screen = {
            height: win.height(),
            width: win.width()
          };
        };

        win.on('resize', onResize);

        onResize();

        $scope.$on('$destroy', function() { win.off('resize', onResize); });

      }
    ]);
})();
