# Project Overview


## Behaviour Driven Development (BDD)

This web-based application uses [Jasmine](http://jasmine.github.io/) to set up a BDD environment. The basic application reads RSS feeds. Users select the different feeds from a menu drawer that appears from the left-hand side. Story headlines pulled in from the selected feed are displayed in a list and clicking the headline will take the user to the webpage for that particular story.

Open `index.html` in a browser to run the application.

Tests are written in the file `jasmine/spec/feedreader.js`.

The tests suites written for this application evalute that:

* The menu
    * is hidden by default
    
    Tests that the class `.menu-hidden` is present on `<body>` when the DOM is loaded

    * appears and disappears when the menu icon is clicked
    
Tests that clicking on the menu icon toggles the class `.menu-hidden`

* Initial entries
    * should contain at least one entry
    
Tests that there is at least one `<article>` tag with class `.entry`

* New feed selection
    * should change content when the feed is loaded
    
Tests that the feed text after a new feed has been selected is not the same as the original feed text
