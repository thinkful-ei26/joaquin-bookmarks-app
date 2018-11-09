'use strict';
/*eslint-env jquery*/
const store = (function() {
  const error = null;
  const setError = function(error) {
    this.error = error; //Is this right? assigns error object to bookmark?
    // console.log('setError',store);
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

  const setFilterRating = function(filterRating) {
    this.filter = filterRating;
  };

  const toggleExpandBookmark = function(){

  };

  const toggleEditBookmark = function(){

  };

  const toggleAddBookmark = function(){
    store.addIt = !store.addIt; //defaults false to all new bookmarks.
  };


  return {
    bookmarks: [],
    error,
    filter: null, //assume no filter 
    addIt: false,
    addItem,
    findAndDelete,
    findAndUpdate,
    setError,
    setFilterRating,
    findById,
    toggleExpandBookmark,
    toggleEditBookmark,
    toggleAddBookmark
  };
})();
