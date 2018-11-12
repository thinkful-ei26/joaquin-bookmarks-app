'use strict';
/* global */

const ENDPOINT = 'https://thinkful-list-api.herokuapp.com/joaquin/items';

const createItem = function(name, onSuccess, onError) {
  const newItem = JSON.stringify({ name });
  $.ajax({
    url: ENDPOINT + '/items',
    method: 'POST',
    contentType: 'application/json',
    data: newItem,
    success: onSuccess,
    error: onError
  });
};

const addItem = function(item) {
  store.push(item);
};
const setError = function(error) {
    this.error = error;



/*
const captureNewUserInput = function() {
  $('#capture-form-values').click(event => {
    event.preventDefault();
    const title = $('#title').val();
    const url = $('#url').val();
    const description = $('#description').val();
    const rating = $('#rating').val();
    const newBookmark = {
      id: Math.floor(Math.random() * 100), // Dummy id.
      title,
      url,
      description,
      rating
    };
    api.createItem(newBookmark,(newItem) => { store.addItem(newItem);
    renderStoreString();}, (err) => {
        console.log(err);
        api.setError(err);
        renderStoreString();
    })})};




