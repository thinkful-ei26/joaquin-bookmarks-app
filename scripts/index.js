'use strict';
/* global store, $  */

//*****************RENDER THE STORE *****************/
const bookmarkList = [];
const generateStoreString = function() {
  return store.bookmarks.forEach(obj =>
    bookmarkList.push(generateBookmarkListItem(obj))
  );
};
const generateBookmarkListItem = function(bookmark) {
  return `
    <li data-bookmark-id="${bookmark.id}">
        Title:  ${bookmark.title} 
        Description: ${bookmark.description}
        Rating: ${bookmark.rating}
       <a href="${bookmark.url}">Visit site </a> 
    </li>
    `;
};
const renderStore = function() {
  $('.bookmark-list').html(bookmarkList);
};
generateStoreString();

//*************SHOW THE ADD FORM ****************/
const renderAddBookmarkForm = function() {
  if (store.adding) {
    $('#bookmark-add-form').show();
  } else {
    $('#bookmark-add-form').hide();
  }
};

const toggleAddBookmarkForm = function() {
  $('#toggle-add-form').click(event => {
    event.preventDefault();
    store.adding = !store.adding;
    renderAddBookmarkForm(); // Without this, there is nothing to call the toggle event after  initial page load.
  });
};

//****CAPTURE  INPUTS AND PUSH TO STORE************ */

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
    store.bookmarks.push(newBookmark);
    const newBookmarkElement = generateBookmarkListItem(newBookmark);
    $('.bookmark-list').append(newBookmarkElement);
  });
};




$(() => {
  renderStore();
  captureNewUserInput();
  renderAddBookmarkForm();
  toggleAddBookmarkForm();
});
