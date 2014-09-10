(function () {
  'use strict';
  angular.module('app').
    controller('MaExperiments', function ($scope, maExperiments) {
      this.experiments = maExperiments.getList();
    });

  angular.module('app').config(function ($stateProvider) {
    $stateProvider
      .state('experiments.pi', {
        url: '/experiments/pi',
        views: {
          'appBody@': {
            templateUrl: 'experiments/pi.html'
          }
        }
      });

  });

})();
