(function () {
  'use strict';
  angular.module('appmap')
    .factory('appmap', ['info', function (appInfo) {
      var itemNameIndex = {};
      var appmapService = {

        items: [
          {'name': 'home', 'heading': 'Home', 'glyph': 'home', toState: {name: 'home'}},
          {'name': 'settings', 'heading': 'Settings', 'glyph': 'cog'},
          {'name': 'about', 'heading': 'About', 'glyph': 'info-sign'}
        ],

        selectedItem: null,
        selectItem: function (item) {
          var selectedItem = appmapService.getSelectedItem();
          selectedItem.active = false;
          selectedItem = appmapService.getItem(item) || selectedItem;
          selectedItem.active = true;
          appmapService.selectedItem = selectedItem;

          return appmapService;
        },
        getItem: function (item) {
          var itemName;
          if (typeof item === 'string') {
            itemName = item;
          } else if (typeof item === 'object') {
            itemName = item.name;
          }
          var index = itemNameIndex[itemName];
          if (itemName && typeof index === 'number') {
            return appmapService.items[index];
          }
        },

        getSelectedItem: function () {
          if (!appmapService.selectedItem) {
            appmapService.selectedItem = appmapService.getItems()[0];
          }

          return appmapService.selectedItem;
        },
        getItems: function () {
          return appmapService.items;
        }
      };
      angular.forEach(appmapService.items, function (item, index) {
        item.toState = item.toState || {name: item.name};
        itemNameIndex[item.name] = index;
      });

      appmapService.getSelectedItem();

      return appmapService;
    }]);
})();
