'use strict';
/*eslint-env jquery*/
const store = (function() {
  const setError = function(error) {
    this.error = error;
  };

  const addItem = function(bookmark) {
    this.bookmarks.push(bookmark);
  };

  const findAndDelete = function(id) {
    this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== id);
  };

  const findById = function(id) {
    return this.bookmarks.find(bookmark => bookmark.id === id);
  };

  const findAndUpdate = function(id, newData) {
    const bookmark = this.findById(id);
    Object.assign(bookmark, newData);
  };

  return {
    bookmarks: [],
    error: null,
    filter: null,
    addIt: false,
    addItem,
    findAndDelete,
    findAndUpdate,toggleExpandedForBookmark,
    // setError,
    // setFilterRating,
    // toggleEditedForBookmark,
    findById
    // toggleAddingABookmark
  };
})();
