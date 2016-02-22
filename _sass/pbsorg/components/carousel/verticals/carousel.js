var
  jQuery = window.jQuery = require("jquery"),
  carousel               = require("../carousel-config"),
  PBS                    = require("../../../scripts/_pbs");


// responsive image processor;
require("picturefill");

jQuery(($) => {
  var $window = $(window);

  $(".carousel--verticals").each(function () {
    var $section = $(this),
        // create a copy of the settings object (we dont want changes here to be reflected everywhere);
        settings = jQuery.extend({}, carousel.settings);

    // add more params to the global settings;
    settings.dots = false;
    settings.slidesToShow = 4;
    settings.slidesToScroll = 2;
    settings.responsive = [
      {
        breakpoint: PBS.breakpoints.slick.lg,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: PBS.breakpoints.slick.md,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: PBS.breakpoints.slick.sm,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: PBS.breakpoints.slick.smaller,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ];

    $section
      .find(".carousel-container")
      // init the carousel;
      .slick(settings);

    // init the responsive images plugin;
    window.picturefill({
      "elements": $section.find("img[srcset]").get()
    });
  });
});
