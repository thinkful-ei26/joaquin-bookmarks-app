'use strict';
/*global $, bookmarkList, api, Store*/
//on page load,
$(document).ready(function() {
  bookmarkList.bindEventListeners();

  api.getBookmarks(  //fix undefined here
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
