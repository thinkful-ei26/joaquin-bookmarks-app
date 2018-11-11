'use strict';
/*eslint-env jquery   */

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



