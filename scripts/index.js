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



const item = store.items[1];
console.log(store.items);
console.log(item);
console.log('current name: ' + item.name);
store.findAndUpdate(item.id, { name: 'foobar' });
console.log('new name: ' + item.name);