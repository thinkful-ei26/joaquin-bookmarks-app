'use strict';
/*global $, bookmarkList, API, Store*/
//on page load,
$(document).ready(function() {
  bookmarkList.bindEventListeners();

  API.getBookmarks(  //fix undefined here
    bookmarks => {
      bookmarks.forEach(bookmark => {
        bookmark.expanded = false;
        bookmark.editing = false;
        Store.addBookmark(bookmark);
      });
      bookmarkList.render();
    },
    error => {
      console.log('ERROR');
    }
  );
});
