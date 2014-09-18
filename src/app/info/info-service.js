(function() {
  'use strict';

  var appInfo = angular.extend({}, window.chrome ? chrome.runtime.getManifest() : {});

  angular.module('app').value('info', appInfo);
})();
