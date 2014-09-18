(function() {
  'use strict';

  angular.module('app').factory('maExperiments', function() {
    return {
      getList: function() {
        return [{'name': 'pi'}];
      }
    };
  });
})();
