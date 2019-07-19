'use strict';

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

  return {
    getItems,
    createItem
    
  };
}());