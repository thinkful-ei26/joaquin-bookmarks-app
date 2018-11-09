/*eslint-env jquery*/
'use strict';
const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/joaquin';

  const getBookmarks = function(callback) {
    $.getJSON(BASE_URL + '/bookmarks', callback);
  };

  const createBookmark = function(title, onSuccess, onError) {
    const newItem = JSON.stringify({ title });
    $.ajax({
      url: BASE_URL + '/bookmarks',
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: onSuccess,
      error: onError,
    });
  };

  const updateBookmark = function(id, updateBookmark, onSuccess, onError) {
    $.ajax({
      url: BASE_URL + '/bookmarks/' + id,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateBookmark),
      success: onSuccess,
      error: onError,
    });
  };

  const deleteBookmark = function(id, onSuccess, onError) {
    $.ajax({
      url: BASE_URL + '/bookmarks/' + id,
      method: 'DELETE',
      success: onSuccess,
      error: onError,
    });
  };

  return {
    getBookmarks,
    createBookmark,
    updateBookmark,
    deleteBookmark,
  };
}());