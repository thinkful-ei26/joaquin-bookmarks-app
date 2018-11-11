'use strict';
/*eslint-env jquery   */
/********User stories
 1 add new.
 2 remove.
 3 filter.
 4 detail view.
 */

//***************************HARD CODE A STORE OBJECT ********************************* */

const store = {
  bookmarks: [
    {
      id: 1,
      title: 'YouTube',
      url: 'https://youtube.com',
      description: 'video hosting, media and entertainment',
      rating: 3
    },
    {
      id: 2,
      title: 'Floppers',
      url: 'https://floppers.com',
      description: 'this is a site about....',
      rating: 2
    },
    {
      id: 3,
      title: 'Wikipedia',
      url: 'https://wikipedia.org',
      description: 'the best of open-source',
      rating: 4
    }
  ],
  adding: false //additional parameter applied to overal bookmarks object element as default, used for toggling.
};


//*****************PASS EACH ELEMENT OF THE STORE TO OUR GENERATE FUNCTION *****************/
const bookmarkList = [];
const generateStoreDom = function() {
  store.bookmarks.forEach(obj =>
    bookmarkList.push(generateBookmarkListItem(obj))
  );
};
// generateStoreDom();

//*****************CONVERT AN OBJECT INTO AN HTML ELEMENT, AND PUT IT TO THE DOM (REACTful) */
// function generateBookmarkListItem(bookmark) {
//   return `
//     <li data-bookmark-id="${bookmark.id}">
//          ${bookmark.title} 
//         Description: ${bookmark.description}
//        <a href="${bookmark.url}">Visit site </a> 
//     </li>
//     `;
// }
//*********PUT THE RESULT TO THE DOM****************************************************** */
// $('.bookmark-list').html(bookmarkList);

//**************DEFINE A FORM TO ADD NEW BOOKMARKS**************************************** */
// I build out htmlform directly into the DOM, and toggle render with jquery
// Below is is html that will display if 'adding' property is true.

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

//****CREATE A METHOD TO CAPTURE THE INPUT VALUES AND PUSH THEM TO THE STORE************ */
// Put a listener on an add button and capture field values in const's, build into an object, and push the object to the store.
// Generate a dummy id for each new item.

const captureNewUserInput = function() {
  $('#capture-form-values').click(event => {
    event.preventDefault();
    const title = $('#title').val();
    const url = $('#url').val();
    const desc = $('#description').val();
    const rating = $('#rating').val();
    const newBookmark = {
      id: Math.floor(Math.random() * 100), //I create a dummy id here.
      title,
      url,
      desc,
      rating
    };
    // console.log('inside', newBookmark);
    // console.log(store);
    store.bookmarks.push(newBookmark);
    // generateStoreDom();
    console.log(store); //at this point the store has the new object and is complete. How to regenerate the DOM?
  });
  //   console.log('outside', store); new object is not here.
};
//console.log('outside captureNewUserInput', store); new object is not here.
captureNewUserInput();
generateStoreDom();
function generateBookmarkListItem(bookmark) {
  return `
    <li data-bookmark-id="${bookmark.id}">
         ${bookmark.title} 
        Description: ${bookmark.description}
       <a href="${bookmark.url}">Visit site </a> 
    </li>
    `;
}
$('.bookmark-list').html(bookmarkList);
render();
console.log(store);

// I want the page to re-render with the new item in the store. capture value, push to store, simple.

//***ON PAGE LOAD RUN RENDER** */
$(() => {
  render();
});
