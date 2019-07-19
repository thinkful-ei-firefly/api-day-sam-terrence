'use strict';

// eslint-disable-next-line no-unused-vars
const api = (function() {
  const baseURL = 'https://thinkful-list-api.herokuapp.com/sam';
  
  function getItems() {
    const result = fetch(baseURL+'/items');
    return result;
  }

  function createItem(name) {
    const newItem = JSON.stringify({name});
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: newItem 
    };
    return fetch(baseURL+'/items', options);
  }

  function updateItem(id,updateData){
    const updateItem = JSON.stringify(updateData);
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: updateItem
    };
    return fetch(baseURL+'/items/'+id, options);

  }

  function deleteItem(id){
    const options = {
      method: 'DELETE',      
      headers: {
        'Content-Type': 'application/json'
      }
      
    };  
    return fetch(baseURL+'/items/'+id, options);

  }

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
}());