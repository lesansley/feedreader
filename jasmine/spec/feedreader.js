/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* All of the tests are placed within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {

    describe('RSS Feeds', function() {

        // Test that RSS feeds are defined
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds).not.toBe(null);
            expect(allFeeds.length).not.toBe(0);
            expect(allFeeds.length).toBeGreaterThan(0)
        });

        // Loop through the RSS feeds and ensure they all have a url
        it('have non-empty urls', function() {

            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
                expect(feed.url).not.toBe(null);
            });

        });

        // Loop through the RSS feeds and ensure they all have a name
        it('have a name', function() {

            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
                expect(feed.name).not.toBe(null);
            });
        });
    });

    describe('The menu', function() {
        var elem;
        elem = $('body');

        // The class 'menu-hidden' on the body defines the position of the menu
        it('is hidden by default', function() {
            expect(elem.hasClass('menu-hidden')).toBeTruthy();

        });

        // The class 'menu-hidden' on the body is toggled when the menu icon is clicked
        it('changes visibilty when clicked', function() {

            // Test that the menu appears on the first click
            $('.menu-icon-link').trigger('click');
            expect(elem.hasClass('.menu-hidden')).toBeFalsy();

            // Test that the menu disappears on the second click
            $('.menu-icon-link').trigger('click');
            expect(elem.hasClass('menu-hidden')).toBeTruthy();
        });
    });

    describe('Initial entries', function() {
        var entryLength;

        beforeEach(function(done) {
            loadFeed(0, function() {
                entryLength = $('article.entry').length;
                done();
            });
        });

        // Test that there is at least one article element with class 'entry'
        it('should contain at least one entry', function() {
            expect(entryLength).not.toBe(0);
            expect(entryLength).toBeGreaterThan(0);
        });

    });

    describe('New feed selection', function() {
        var oldFeed;

        beforeEach(function(done) {
            //call loadfeed with an anonymous callback function
            loadFeed(0, function() {
                // In the call back function (once loadfeed has completed loading):
                // the feed equal to a variable
                oldFeed = $('.feed').html();
                // make another call to loadFeed passing a different parameter
                loadFeed(1, done);
            });
        });

        // Test that the current feed text is not the same as the original feed text
        it('should change content when the feed is loaded', function() {
            // set the new feed equal to a variable
            var newFeed = $('.feed').html();
            expect(newFeed).not.toEqual(oldFeed);
        });
    });
}());
