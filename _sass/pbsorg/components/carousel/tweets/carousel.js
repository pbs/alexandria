var
  jQuery = window.jQuery = require("jquery"),
  //Handlebars     = window.Handlebars     = require("handlebars/runtime").default,
  twitterFetcher = window.twitterFetcher = require("../../../scripts/_twitterfetch"), // bring in the plugin to handle getting content from Twitter;
  //handblebarsTemplate = require("./carousel.hbs"),
  PBS                 = require("../../../scripts/_pbs");

jQuery(($) => {
  var $window = $(window);

  $("section.carousel-tweets").each(function () {
    var $section = $(this),
        $carousel = $section.find("div.carousel-container"),
        dataAttributes = $section.data(),
        content = {
          account: dataAttributes.account,
          image: dataAttributes.image,
          slides: []
        },
        $html;

    // go grab the tweet content;
    twitterFetcher.fetch({
      "id": dataAttributes.id,
      "domId": "",
      "maxTweets": 20,
      "enableLinks": true,
      "showUser": false,
      "showTime": false,
      "dateFunction": "",
      "showRetweet": false,
      "showInteraction": true,
      "customCallback": function (html) {
        $.each(html, function (i, val) {
          var slide = {},
              $val = $(val);

          // loop through each piece of content (P tags) returned;
          $val.each(function (j, value) {
            var $value = $(value);

            // if the P has this class, we only want the tweet id;
            if ($value.hasClass("interact")) {
              slide.id = $value.find("a").eq(0).prop("href").split("=")[1];
              // otherwise it's the content we want;
            } else {
              $value.find("a").prop("rel", "external");
              slide.content = $value.html();
            }
          });

          // now that the tweet id, and tweet content have been recorded, save the slide;
          content.slides.push(slide);
        });

        // convert the json data into HTML with handlebars;
        //$html = $(handblebarsTemplate(content));

        // and insert the handlebar HTML;
        //$carousel.append($html);

        // init the carousel;
        $carousel.slick({
          "autoplay": true,
          "autoplaySpeed": 8000,
          "arrows": false,
          "fade": true,
          "speed": 800
        });
      }
    });
  });
});
