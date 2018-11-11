User Stories
1. User can add bookmarks, each with
    a. title
    b. url link ('Visit site')
    c. description
    d. rating (1-5)

2. On initial load, user can see a list of all bookmarks
    a. the initial view defaults to a condensed view, shows only title and rating.

3. User can click on a bookmark to display a "detailed" view (reveals remaining fields)

4. User can remove bookmarks from list

5. User receives error messages, per documentation

6. User can select from a dropdown a minimum rating which will filter the list to show only items above or of that rating.

7. See extension stories.

Technical Requirments

1. jQuery for AJAX and DOM manipulation

2. Namespacing
    a. Minimal globals
    b. Modules
    c. Logical groupings

3. Keep data out of DOM
    a. No direct DOM manipulation, instead REACT, change state, re-render.

4. Semantic html

5. Responsive design

Process

1. Work through user stories with a dummy store.
    1. User can render add-bookmark-form.
    2. User can add a bookmark to list.
    3. On page load, default to a condensed view showing only title and rating.
        a. add an 'Expand' button to open into a full display.
        b. a listener on the button causes show/hide event for properties 'description' and 'url'. how?.....
        c. got it to hide all fields...target specific click source..
        d. now make hidden state the default, with 'hidden' html attribute and removeAttr on toggle