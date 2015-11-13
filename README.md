# Project Overview

## Behaviour Driven Development (BDD)

This web-based application uses [Jasmine](http://jasmine.github.io/) to set up a BDD environment. The basic application reads RSS feeds. Users select the different feeds from a menu drawer that appears from the left-hand side. Story headlines pulled in from the selected feed are displayed in a list and clicking the headline will take the user to the webpage for that particular story.

The tests suites written for this application evalute that:

* The menu

    1. is hidden by default
    2. appears and disappears when the menu icon is clicked

* Initial entries

    1. should contain at least one entry

* New feed selection

    1. should change content when the feed is loaded