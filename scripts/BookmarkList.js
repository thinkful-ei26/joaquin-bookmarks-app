'use strict';
/*global store, api, $ */
const bookmarkList = (function() {
  //a listener on my add button
  const handleAddBookmark = function() {
    $('js-add-bookmark-view').click(event => {
      store.toggleAddBookmark(); //toggles default 
      $('form').toggle(); //toggle the 'hidden' boolean
      store.setError(null); //review this.
      renderAddBookmarkForm(); //
    });
  };

  const renderAddBookmarkForm = function(){
    if(store.addIt){ //if item property  addIt is true call generate function and put html to hidden form element.
      $('.js-bookmark-list-form').html(generateAddBookmarkForm());
    } else{
      $('.js-bookmark-list-form').html('');
    }
  };

  const generateAddBookmarkForm = function(){
    return ` <form id="bookmark-add-form js-bookmark-add-form">  
          <section class="addView js-addView">
              <input type="text" name="bookmark-entry" class="js-bookmark-title" placeholder="The Adventures of TinTin">
              <input type="text" name="bookmark-entry" class="js-bookmark-url" placeholder="http://myfavbooks.com">
              <input type="text" name="bookmark-entry" class="js-bookmark-description" placeholder="Description">
              <ul>
                <li><button type="radio">1 Star</button></li>
                <li><button type="radio">2 Star</button></li>
                <li><button type="radio">3 Star</button></li>
                <li><button type="radio">4 Star</button></li>
                <li><button type="radio">5 Star</button></li>
              </ul>
            <button type="submit">Add item</button>
          </section>
        </form> `;
  };

  const render = function(){
    let bookmarks = [...store.bookmarks]; //local copy not exposed.

    if(store.filter){
      bookmarks = bookmarks.filter(bookmark =>bookmark.rating >= store.filter);
    }
    

  }
   

  const bindEventListeners = function() {
    handleAddBookmark();
  };

  return {
    bindEventListeners,
    render
  };
}());
