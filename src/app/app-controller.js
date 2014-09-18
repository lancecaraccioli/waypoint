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
    .config(function($stateProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          views: {
            'appBody': {
              templateUrl: 'home/home.html'
            }
          }
        })
        .state('about', {
          url: '/about',
          views: {
            'appBody': {
              templateUrl: 'about/about.html'
            }
          }
        })
        .state('settings', {
          url: '/settings',
          views: {
            'appBody': {
              templateUrl: 'settings/settings.html'
            }
          }
        })
        .state('experiments', {
          url: '/experiments',
          views: {
            'appBody': {
              controller: 'MaExperiments as experiments',
              templateUrl: 'experiments/experiments.html'
            }
          }
        });
    });
})();
