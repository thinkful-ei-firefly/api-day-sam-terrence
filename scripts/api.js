'use strict';

const api = (function() {
  const baseURL = 'https://thinkful-list-api.herokuapp.com/sam';
  
  function getItems() {
    return Promise.resolve('A successful response!');
  }
  return {
    getItems
  }
}());