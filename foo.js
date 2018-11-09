const BOOKMARK_ADDING_FORM = '.bookmark-adding-form';
const BASE_API_URL = 'https://thinkful-list-api.herokuapp.com/rich';

const store = {
  bookmarks: [
    { id: 1, title: 'Google', url: 'http://google.com', rating: 5, desc: 'A thing' },
  ],
  adding: false,
};

function generateBookmarkListItem(bookmark) {
  return `
    <li data-bookmark-id="${bookmark.id}">
      ${bookmark.title}
      <a href="${bookmark.url}">Visit Site</a>
    </li>
  `;
}

function render() {
  // Should add bookmark form with visible?
  if (store.adding) {
    $(BOOKMARK_ADDING_FORM).show();
  } else {
    $(BOOKMARK_ADDING_FORM).hide();
  }

  // Render all bookmarks in store to page
  const bookmarkElements = [];
  store.bookmarks.forEach(bookmark => bookmarkElements.push(generateBookmarkListItem(bookmark)));
  $('ul.bookmarks').html(bookmarkElements);
}

$(() => {
  // On Initial Application load...
  render();
});