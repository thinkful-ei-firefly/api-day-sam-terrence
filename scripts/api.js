'use strict';

const api = (function() {
  const baseURL = 'https://thinkful-list-api.herokuapp.com/sam';
  
  function getItems() {
    const result = fetch(baseURL+'/items');
    return result;
  }
  return {
    getItems
    
  }
}());