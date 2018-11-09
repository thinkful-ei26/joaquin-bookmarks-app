'use strict';
/*eslint-env jquery*/
//on page load, 
$(document).ready(function(){})

const storeItems = [
  {
    title: 'My Favorite Book',
    rating: 5,
    description: 'Lerem ipsum...'
  },
  {
    title: 'My Second Favorite Book',
    rating: 3,
    description: 'More Lerem ipsum...'
  },
  {
    title: 'Tweaked',
    rating: 5,
    description:
      'hjfdk  kadj ka akd akjdkjf kadjkj ieooap a  appoa a dda ap a a'
  },
  {
    title: 'Sapiens: A Brief History of Mankind',
    rating: 5,
    description: ' dkf ad kajk kakdjkaj kajka kadj ao aojao aoao feiie0a[ a'
  }
];
//**********************RENDER CURRENT STORE********************************************* */
function renderBookmarks() {
  //render bookmark in the DOM

  //Where should the shopping list be rendered? Our jQuery code will need to target the .js-shopping-list element, inserting <li>s inside

  //STEPS:
  //1.For each item in storeItems, generate a string representing an <li> with:
  //-the item name rendered as inner text
  //- the item's index in the array set as a data attribute (hidden to users)
  //-the item's checked state (true or false) toggling the class ".shopping0item__checked"
  //2. Join together the individual item strings into one long string
  //3. Insert this long string inside the ul in the DOM
  const bookmarkItemsString = generateBookmarksString(storeItems);
  // insert the current booklist with  HTML, into the DOM
  $('.bookmark-list').html(bookmarkItemsString);
}

function generateBookmarksString(storeItems) {
  //we need to generate a string
  //to generate we'll need to iterate over each item in storeItem
  //generate an <li> string with the proper text and class to
  //reflect the properties of the item
  //loop over storeItems using .map
  //calling a new function on each one generateItemElement which
  //will generate the item string
  //we want join the individual items string into one big one to
  //be retruned within this function

  const items = storeItems.map((item, index) =>
    generateItemElement(item, index)
  );

  return items.join('');
}

function generateItemElement(item, index, template) {
  //returns a single <li> element that gets sent into generateShoppingItemsString
  //this just display the item name

  //   return `<li>Title: ${item.title} Rating:${item.rating} Description:${
  //     item.description
  //   } </li>`;
  return ` <li>
                <div class='bookmark-title'>Title: ${item.title}</div>
                <div class="bookmark-description-expanded">Description: ${
                  item.description
                }</div>
                <div class="bookmark-rating">Rating: ${item.rating}</div>
                <button role="button"><a href="">Visit website</a></button>
          </li>`;
}
//**********************************RENDER FORMS*************************************************** */
//Besides rendering items in our store, I need to render one of three form/states, starting with a default view.
//const three form views then create some sort of handler to call on the appropriate one...what does that look like?
//there will allways be a default view so i can start with a listener on the add and filter buttons. the listener then call a formViewSelect function that passes in the right form, and then passes that on to the DOM.

//these are the three form states.
let formView;
const default_filtered_form_view = `
        <form id="bookmark-condensed"class=" js-bookmark-condensed">  
          <section class="add-filter-buttons js-add-filter-buttons">
            <button class="js-add-item" type="submit">Add item</button>
            <button class="js-add-filter" type="submit">Filter</button>
          </section>
        </form> `;
const add_form_view = `
        <form id="bookmark-add-form"class="js-bookmark-add-form">  
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
const detail_delete_form_view = `
          <form id="bookmark-expanded"class="js-bookmark-expanded">  
              <section class="bookmark-detail-delete js-bookmark-detail-delete">
                <button type="submit">Add item</button>
                <button type="submit">Filter</button>
              <ul> 
                  <li>
                      <div class='bookmark-title'>"Tweaked"</div>
                      <div class="bookmark-description-expanded">quip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
                      <div class="bookmark-rating">* * * * *</div>
                      <button role="button"><a href="">Visit website</a></button>
                  </li>
              </ul>
              </section>
          </form>`;

//put an event listener on the add button to pull in the add form view.


//this passes a default form to the DOM.
$('#js-bookmark-list-form').html(default_filtered_form_view);
$('#js-bookmark-list-form').on('click', '.js-add-item', event => {
  console.log('listener should load add view', add_form_view);
});


//i'm going to try nesting my forViewSelect inside a formRender function as i did above for strings.
//this defines formViewSelect which, starting from the default view, puts listeners on the 'add' and 'filter' buttons, then based on which one is clicked, renders the appropriate form to #js-bookmark-list-form.

function renderForms() {
  const bookmarkFormSelect = formViewSelect();
  $('#js-bookmark-list-form').html(bookmarkFormSelect);
  console.log('renderForms ran');
}
//put listeners on buttons.

function formViewSelect() {
  $('#js-bookmark-list-form').on('click', '.js-add-item', event => {
    console.log('formViewSelect ran with', add_form_view);
  });
}

//up to this point, I have mapped through the store array and returned an <li> for each element
function handleNewItemSubmit() {
  //will be responsibile for users adding new items
  console.log('handleNewItemSubmit ran');
}

function handleItemCheckClicked() {
  //will be responsible for when a user clicks the check button on a shopping list item
  console.log('handleItemCheckClicked ran');
}

function handleDeleteItemClicked() {
  //will be responsible for deleting an item when the user wants to
  console.log('handleDeleteItemClicked ran');
}

function handleShoppingList() {
  //this will be our callback function when the page loads
  // will initially render the shopping list and activate individual functions
  console.log('handleShoppingList ran');
  renderBookmarks();
  // handleNewItemSubmit();
  // handleItemCheckClicked();
  // handleDeleteItemClicked();
  // generateShoppingItemsString();
}

$(handleShoppingList());
//hi
