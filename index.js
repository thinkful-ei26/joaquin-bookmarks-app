'use strict';
/*eslint-env jquery   */


//*****************PASS EACH ELEMENT OF THE STORE TO OUR GENERATE FUNCTION *****************/
const bookmarkList = [];
const generateStoreDom = function() {
  store.bookmarks.forEach(obj =>
    bookmarkList.push(generateBookmarkListItem(obj))
  );
};

//*****************CONVERT AN OBJECT INTO AN HTML ELEMENT, AND PUT IT TO THE DOM (REACTful) */
function generateBookmarkListItem(bookmark) {
  return `
    <li data-bookmark-id="${bookmark.id}">
         ${bookmark.title} 
        Description: ${bookmark.description}
       <a href="${bookmark.url}">Visit site </a> 
    </li>
    `;
}

const FORM_ADD_NEW_BOOKMARK = '#bookmark-add-form';

//*************DEFINE A FUNCTION TO RENDER THE ADD FORM ON CONDITION ADDING ****************/
function render() {
  if (store.adding) {
    $(FORM_ADD_NEW_BOOKMARK).show();
  } else {
    $(FORM_ADD_NEW_BOOKMARK).hide();
  }
}

//************* CREATE A TOGGLE METHOD TO RENDER THE ADD FORM********************************/
$('#toggle-add-form').click(event => {
  event.preventDefault();
  store.adding = !store.adding;
  render(); // Without this, there is nothing to call the toggle event after  initial page load.
});

//****CAPTURE THE INPUT VALUES AND PUSH THEM TO THE STORE************ */

const captureNewUserInput = function() {
  $('#capture-form-values').click(event => {
    event.preventDefault();
    const title = $('#title').val();
    const url = $('#url').val();
    const desc = $('#description').val();
    const rating = $('#rating').val();
    const newBookmark = {
      id: Math.floor(Math.random() * 100), // Dummy id.
      title,
      url,
      desc,
      rating
    };
    store.bookmarks.push(newBookmark);
    const newBookmarkElement =generateBookmarkListItem(newBookmark);

    // generateStoreDom();
    $('.bookmark-list').append(newBookmarkElement);
    console.log(store); 
  });
};
captureNewUserInput();
generateStoreDom();

$('.bookmark-list').html(bookmarkList);
render();
console.log(store);


//***ON PAGE LOAD RUN RENDER** */
$(() => {
  render();
});
