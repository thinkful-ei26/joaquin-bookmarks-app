'use strict';
/*eslint-env jquery   */
/********User stories
 1 add new.
 2 remove.
 3 filter.
 4 detail view.
 */

//***************************HARD CODE A STORE OBJECT  reresents a list of bookmarks */

const store = {
  bookmarks: [
    {
      id: 1,
      title: 'youtube',
      url: 'https://youtube.com',
      description: 'video hosting, media and entertainment',
      rating: 3
    },
    {
      id: 2,
      title: 'harkins',
      url: 'https://harkins.com',
      description: 'this is a site about',
      rating: 2
    },
    {
      id: 3,
      title: 'wikipedia',
      url: 'https://wikipedia.org',
      description: 'the best of open-source',
      rating: 4
    }
  ],
  adding: false //additional parameter applied to overal bookmarks object element as default, used for toggling.
};

//*****************CONVERT AN OBJECT INTO AN HTML ELEMENT, AND PUT IT TO THE DOM (REACTful) */

function generateBookmarkListItem(bookmark) {
  return `
    <li data-bookmark-id="${bookmark.id}">
        Title: ${bookmark.title} 
        Description: ${bookmark.description}
       <a href="${bookmark.url}">Visit site </a> 
    </li>
    `;
}
// console.log(store.bookmarks);
// console.log(generateBookmarkListItem(store.bookmarks[0]));
//*****************PASS EACH ELEMENT OF THE STORE TO OUR generate FUNCTION */
//after generating the li, you need to repeat the action for each element and capture the result.

const bookmarkList = [];
store.bookmarks.forEach(obj =>
  bookmarkList.push(generateBookmarkListItem(obj))
);
// console.log(bookmarkList);

//*********PUT THE RESULT TO THE DOM************ */

$('.bookmark-list').html(bookmarkList);

//**************DEFINE A FORM TO ADD NEW BOOKMARKS*********** */
// I build out html directly in DOM, and toggle render with jquery
//this is html that will display if 'adding' property is true.

const FORM_ADD_NEW_BOOKMARK = '#bookmark-add-form';

//*************DEFINE A FUNCTION TO RENDER THE ADD FORM ON CONDITION ADDING */
function render() {
  if (store.adding) {
    $(FORM_ADD_NEW_BOOKMARK).show();
  } else {
    $(FORM_ADD_NEW_BOOKMARK).hide();
  }
}
//CREATE A TOGGLE METHOD TO RENDER THE ADD FORM
//for this you need a button and a listener on the button
// console.log(store.adding);
$('#toggle-add-form').click(event => {
  event.preventDefault();
  store.adding = !store.adding;
  console.log(store);
  render();
});
// console.log(store.adding);
//****CREATE A METHOD TO CAPTURE THE INPUT VALUES AND PUSH THEM TO THE STORE* */
//need to capture input field values, make them into an object, and push the object to the store.

const title =$
const description

//***ON PAGE LOAD RUN RENDER** */
$(() => {
  render();
});
