'use strict';
/*global store, api, $ */
const bookmarkList = (function() {
  const handleAddBookmark = function() {
    $('js-add-bookmark-view').click(event => {
      store.toggleAddBookmark();
      $('form').toggle();
      store.setError(null);
      renderAddBookmarkForm();
    });
  };

  const renderAddBookmarkForm = function(){
    if(store.adding){
      $('.js-adding-new-bookmark-form').html(generateAddBookmarkForm());
    } else{
      $('.js-adding-new-bookmark-form').html('');
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

  const bindEventListeners = function() {
    handleAddBookmark();
  };

  return {
    bindEventListeners,
    render
  };
})();
