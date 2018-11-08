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
      a. API
      b. Store
      c. Index
      d. BookmarkList