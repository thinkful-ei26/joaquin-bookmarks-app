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

1. Think through functionality you can extract from the projects we have done so far.
    a. thinktube.
    b. shopping-app
      1. add item
      2. delete
      3. edit 
      4. not the cuid thing, instead you will have API generated id's...that is modelled in the thinktube app

2. Think about the modules you need and what goes in each.
      a. API - handle the server requests, with calls to POST, GET and PATCH
      b. Store - handles the store?
      c. Index - use for input validation
      d. BookmarkList - main handler functions are written here

Work flow: Define a step, what I want to achieve, how that same thing was achieved in the shopping app, and replicate it. Have two separate code windows open, one with booknote one with shopping, for cross reference.

1. Render the default page. => render index.html with default display.
2. When user clicks 'add' button, show the add form.
     =>handleNewItemSubmit in Bookmarks, captures an input value. I just want to bring up a form.Does shopping do that anywhere?

New Work Flow: Work through shopping in sequence, starting at shoppingList.js, adapt, borrow, imitate and steal.
1. inside the shoppingList IIFE, a generateError function is declared. 

New work Flow: Work of Nikki's prior repos, build up from there.
1. Start in Index.js, make this your main rendering module, work on generating html, first text strings, then forms.
    a. accomplished through
New work flow, from the top, reorganize html.
 
