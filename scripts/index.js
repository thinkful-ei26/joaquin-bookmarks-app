'use strict';
/* global store, $  */

//*****************RENDER THE STORE *****************/

const renderStoreString = function() {
  $('.js-bookmark-list').empty();
  const bookmarkList = [];
  store.bookmarks.forEach(obj =>
    bookmarkList.push(generateBookmarkListItem(obj))
  );
  $('.js-bookmark-list').html(bookmarkList);
};
const generateBookmarkListItem = function(bookmark) {
  return `
    <li data-bookmark-id="${bookmark.id}">
      <span class="js-title">Title: ${bookmark.title}</span>
      <span class="js-description" hidden>Description: ${
        bookmark.description
      }</span>
      <span class="js-rating">Rating: ${bookmark.rating}</span>
      <span class="js-url" hidden> <a href="${
        bookmark.url
      }">Visit site </a></span>
      <form id="expand-delete-bookmark .js-expand-delete-bookmark">
        <button class="expand-bookmark js-expand-bookmark" name="expand">
          Expand
        </button>
         <button class="delete-bookmark js-delete-bookmark" name="delete">
          Delete
        </button>
      </form>
    </li>
    `;
};

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

//**********EXPAND VIEW**************************** */
const toggleExpandedView = function() {
  $('.js-bookmark-list').on('click', '.js-expand-bookmark', function(event) {
    event.preventDefault();
    $(this)
      .closest('li')
      .find('.js-description')
      .removeAttr('hidden');
    $(this)
      .closest('li')
      .find('.js-url')
      .removeAttr('hidden');
  });
};

//****CAPTURE INPUTS AND PUSH TO STORE************ */

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
    renderStoreString();
  });
};

/**********HANDLE DELETE BOOKMARK*************************** */
const findAndDelete = function(id) {
  store.bookmarks = store.bookmarks.filter(item => item.id !== id);
};
const handleDeleteBookmark = function() {
  $('.js-bookmark-list').on('click', '.js-delete-bookmark', function(event) {
    event.preventDefault();
    let itemId = $(this)
      .closest('li')
      .attr('data-bookmark-id');
    itemId = parseInt(itemId);
    findAndDelete(itemId);
    renderStoreString();
  });
};


$(() => {
  renderStoreString();
  captureNewUserInput();
  renderAddBookmarkForm();
  toggleAddBookmarkForm();
  toggleExpandedView();
  handleDeleteBookmark();
});
