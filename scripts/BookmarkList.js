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

  const renderAddBookmarkForm = function() {
    if (store.addIt) {
      //if item property  addIt is true call generate function and put html to hidden form element.
      $('.js-bookmark-list-form').html(generateAddBookmarkForm());
    } else {
      $('.js-bookmark-list-form').html('');
    }
  };

  const generateAddBookmarkForm = function() {
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

  const generatAddBookmarkList = function(bookmarks) {
    return bookmarks.map(bookmark => generateBookmarkElement(bookmark))
      .join('');
  };
  const generateBookmarkElement = function(bookmark){
   
    //check if desc has a value, if not write "no description yet" 
    const desc = bookmark.desc!=='' ? bookmark.desc : 'No description yet';

    //return a different string if this bookmark is in expanded mode vs not
    let details = bookmark.expanded ? `  <p>${desc}</p>
        <a href="${bookmark.url} class = "visit-site" target = "_blank">Visit site</a>
        <button type = "button" class = "details js-details" > Less Details <i class="fas fa-caret-up"></i> </button>
        ` : '<button type = "button" class = "details js-details" > More Details <i class="fas fa-caret-down"></i> </button>';

    //return a different string if it's in editing mode
    if (bookmark.editing){
      //deals with the edit remembering which rating value was selected
      const cell = ['','','','',''];
      cell[bookmark.rating-1] = 'selected';

      return `
      <li class = "bookmark-element js-bookmark-element" data-bookmark-id = "${bookmark.id}">
      <p class = "edit-bookmark-title-p js-bookmark-title">${bookmark.title}</p>
      <form class = "editing-form js-editing-form ">
        <label for = "title">Title:</label>
        <input id = "title" name = "title" type = "text" class = "edit-bookmark-title js-edit-bookmark-title" value = "${bookmark.title}"></input>
        <label for = "url">URL:</label>
        <input id = "url" name = "url" type = "text" class = "edit-bookmark-url js-edit-bookmark-url" value = "${bookmark.url}"></input>
        <label for = "desc">Description:</label>
        <textarea id = "desc" name = "desc" class = "edit-bookmark-desc js-edit-bookmark-description" value = "${desc}" >${bookmark.desc}</textarea>
        <label for = "rating">Rating:</label>
        <select id = "rating" name = "rating" class = "input-edit-bookmark-rating js-input-edit-bookmark-rating">
              <option selected disabled>Choose a Rating</option>
              <option ${cell[0]} value="1">1 Star</option>
              <option ${cell[1]} value="2">2 Stars</option>
              <option ${cell[2]} value="3">3 Stars</option>
              <option ${cell[3]} value="4">4 Stars</option>
              <option ${cell[4]} value="5">5 Stars</option>
        </select>
        <output class = "edit-error-message js-edit-error-message"></output>
        <button type = "submit" class = "save-edit-button js-save-edit-button"> Save </button>
        <button type = "button" class = "cancel-edit-button js-cancel-edit-button"> Cancel </button>
      </form> 
    </li>
      `;
    }

    else {
      return `
      <li class = "bookmark-element js-bookmark-element" data-bookmark-id = "${bookmark.id}">
      <div class = "float-right">
      <button aria-label = "edit bookmark" class = "edit-bookmark  js-edit-bookmark"><i class="fas fa-edit"></i></button>
      <button aria-label = "delete bookmark" class = "delete-bookmark js-delete-bookmark"><i class="fas fa-trash-alt "></i></button>
      </div>
      <p class = "bookmark-title js-bookmark-title">${bookmark.title}</p>
      <div>
        <p>${rating}</p>
        ${details}
      </div>
    </li>
      `;
    }
  };





  const render = function() {};

  const bindEventListeners = function() {
    handleAddBookmark();
  };

  return {
    bindEventListeners,
    render
  };
})();
