(function () {
  'use strict';
  angular.module('navbar')
    .factory('navbarService', ['info', function (appInfo) {
      var itemNameIndex = {};
      var navbarService = {

        items: [
          {'name': 'home', 'heading': '', 'glyph': 'home'},
        ],
        brand: appInfo.name,

        selectedItem: null,
        selectItem: function (item) {
          var selectedItem = navbarService.getSelectedItem();
          selectedItem.active = false;
          selectedItem = navbarService.getItem(item) || selectedItem;
          selectedItem.active = true;
          navbarService.selectedItem = selectedItem;

          return navbarService;
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
            return navbarService.items[index];
          }
        },

        getSelectedItem: function () {
          if (!navbarService.selectedItem) {
            navbarService.selectedItem = navbarService.getItems()[0];
          }

          return navbarService.selectedItem;
        },
        getItems: function () {
          return navbarService.items;
        },
        getBrand: function () {
          return navbarService.brand;
        },
        hasDropdownMenu: function (item) {
          item = navbarService.getItem(item);
          return item.dropdownMenu && !!item.dropdownMenu.template;
        },
        getDropdownMenuTemplateUrl: function (item) {
          item = navbarService.getItem(item);
          return navbarService.hasDropdownMenu(item) ? item.dropdownMenu.template : null;
        }
      };
      angular.forEach(navbarService.items, function (item, index) {
        itemNameIndex[item.name] = index;
      });

      return navbarService;
    }]);
})();
