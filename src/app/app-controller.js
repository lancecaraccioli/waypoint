(function() {
  'use strict';
  angular.module('app').
    controller('AppController', [
      '$scope',
      '$state',
      'info',
      'appmap',
      function($scope, $state, appInfo, appmap) {
        $scope.app = {info: appInfo, title: appInfo.name};

        $scope.menu = {
          items: appmap.getItems(),

          isOpen: false,
          openToggle: function() {
            $scope.menu.isOpen = !$scope.menu.isOpen;
          }
        };

        $scope.menuItemSelected = function(menuItem) {
          appmap.selectItem(menuItem);
          $scope.menu.isOpen = false;
          $scope.app.subtitle = menuItem.name;
          $state.go(menuItem.toState.name);
        };

        $state.go('home');
      }
    ])
    .config(function($stateProvider, appmapProvider) {

      appmapProvider.config([
        {'name': 'home', 'glyph': 'home'},
        {'name': 'settings', 'glyph': 'cog'},
        {'name': 'about', 'glyph': 'info-sign'}
      ]);

      angular.forEach(appmapProvider.items, function(item) {
        item.toState = item.toState || {name: item.name};
        $stateProvider
          .state(item.name, {
            url: '/' + item.name,
            views: {
              'appBody': {
                templateUrl: item.name + '/' + item.name + '.html'
              }
            }
          });
      });
    });
})();
