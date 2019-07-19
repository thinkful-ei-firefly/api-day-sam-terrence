'use strict';
/* global shoppingList, store, Item, api, $ */
// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  shoppingList.bindEventListeners();
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => {
        store.addItem(item);
      });
      shoppingList.render();
    });
});