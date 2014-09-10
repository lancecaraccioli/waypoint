(function () {
  'use strict';
  angular.module('app').
    controller('AppController', [
      '$scope',
      '$state',
      'info',
      'navbarService',
      function ($scope, $state, appInfo, navbarService) {
        $scope.appInfo = appInfo;
        $scope.nav = {
          items: navbarService.getItems(),
          brand: navbarService.getBrand(),
          isCollapsed: true,
          collapseToggle: function () {
            $scope.nav.isCollapsed = !$scope.nav.isCollapsed;
          }
        };
        $scope.hasDropdownMenu = function (navItem) {
          return navbarService.hasDropdownMenu(navItem);
        };
        $scope.getDropdownMenuTemplateUrl = function (navItem) {
          return navbarService.getDropdownMenuTemplateUrl(navItem);
        };

        $scope.navItemSelected = function (navItem) {
          if (!$scope.hasDropdownMenu(navItem)) {
            navbarService.selectItem(navItem);
            $state.go(navItem.name);
          }
        };

        $state.go('home');
      }
    ])
    .config(function ($stateProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          views: {
            'appBody': {
              templateUrl: 'home/home.html'
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
