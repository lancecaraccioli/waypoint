(function() {
  'use strict';
  //TODO generalize and backport to waypoint 1. configurable routing 2. configurable
  angular.module('appmap')
    .provider('appmap', function appmapProvider() {
      this.items = [
        {'name': 'home', 'glyph': 'home'}
      ];
      var itemNameIndex = {};

      this.config = function(items) {
        this.items = items;
        angular.forEach(this.items, function(item, index) {
          itemNameIndex[item.name] = index;
        });
      };

      var provider = this;

      this.$get = ['info', function appmapFactory() {
        var appmapService = {

          items: provider.items,

          selectedItem: null,
          selectItem: function(item) {
            var selectedItem = appmapService.getSelectedItem();
            selectedItem.active = false;
            selectedItem = appmapService.getItem(item) || selectedItem;
            selectedItem.active = true;
            appmapService.selectedItem = selectedItem;

            return appmapService;
          },
          getItem: function(item) {
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

          getSelectedItem: function() {
            if (!appmapService.selectedItem) {
              appmapService.selectedItem = appmapService.getItems()[0];
            }

            return appmapService.selectedItem;
          },
          getItems: function() {
            return appmapService.items;
          }
        };

        appmapService.getSelectedItem();

        return appmapService;
      }];
    });
})();
