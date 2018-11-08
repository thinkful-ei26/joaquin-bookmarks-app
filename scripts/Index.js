'use strict';
/*eslint-env jquery*/
/* Start with...*/
//Bookmark forms need to get rendered to the page
//Bookmark needs to be able to add items
//Bookmark needs to be able to delete items

//storeItems is responsible for storing the underlying data
//that our app will need to keep track of in order to work

//we have an array of  list items, each one is an object

//we're pre-adding items to the shopping list so there's
//something to see when it loads
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
  }
];

function renderShoppingList() {
  //render bookmark in the DOM

  //Where should the shopping list be rendered? Our jQuery code will need to target the .js-shopping-list element, inserting <li>s inside

  //STEPS:
  //1.For each item in storeItems, generate a string representing an <li> with:
  //-the item name rendered as inner text
  //- the item's index in the array set as a data attribute (hidden to users)
  //-the item's checked state (true or false) toggling the class ".shopping0item__checked"
  //2. Join together the individual item strings into one long string
  //3. Insert this long string inside the ul in the DOM
  const shoppingListItemsString = generateShoppingItemsString(storeItems);
console.log('Index.js is linked');
  // insert that HTML into the DOM
  $('.testdiv').html(shoppingListItemsString);
  console.log('renderShoppingList ran');
}

function generateShoppingItemsString(storeItems) {
  //we need to generate a string
  //to generate we'll need to iterate over each item in storeItem
  //generate an <li> string with the proper text and class to
  //reflect the properties of the item
  //loop over storeItems using .map
  //calling a new function on each one generateItemElement which
  //will generate the item string
  //we want join the individual items string into one big one to
  //be retruned within this function

  console.log('Generating shopping list element');

  const items = storeItems.map((item, index) =>
    generateItemElement(item, index)
  );

  return items.join('');
}

function generateItemElement(item, index, template) {
  //returns a single <li> element that gets sent into generateShoppingItemsString
  //this just display the item name

  return `
<li>${item.name}</li>`;
}

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
  renderShoppingList();
  // handleNewItemSubmit();
  // handleItemCheckClicked();
  // handleDeleteItemClicked();
  // generateShoppingItemsString();
}

$(handleShoppingList());
//hi
