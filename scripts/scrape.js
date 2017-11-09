// =============================================================================

// Make Scrape Function

// =============================================================================
var request = require("request");
var cheerio = require("cheerio");

var scrape = function(cb) {

  request("http://www.nytimes.com", function(err, res, body) {
    var $ = cheerio.load(body);

    // Make an empty array to save our article info
    var articles = [];
    $(".theme-summary").each(function(i, element) {

      var head = $(this).children(".story-heading").text().trim();
      var sum  = $(this).children(".summary").text().trim();

      if (head && sum) {
        var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        var sumNeat  = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

        // Initialize an object we will push to the articles array

        var dataToAdd = {
          headline: headNeat,
          summary : sumNeat
        };

        articles.push(dataToAdd);
      }
    });
    cb(articles);
  });
};

// Export the function, so other files in our backend can use it
module.exports = scrape;
