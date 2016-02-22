var
  jQuery = window.jQuery = require("jquery"),
  carousel               = require("../carousel-config"),
  PBS                    = require("../../../scripts/_pbs");

// jQuery carousel plugin;
require('../../../bower_components/slick-carousel');

// responsive image processor;
require("picturefill");

jQuery(($) => {
  $("section.carousel-might-also-like").each(function () {
    var $section = $(this),
        // create a copy of the settings object (we dont want changes here to be reflected everywhere);
        settings = jQuery.extend({}, carousel.settings);

    // add more params to the global settings;
    settings.dots = false;
    settings.slidesToShow = 6;
    settings.slidesToScroll = 5;
    settings.responsive = [
      {
        breakpoint: PBS.breakpoints.slick.lg,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: PBS.breakpoints.slick.md,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3
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

    // init the responsive images plugin;
    window.picturefill({
      "elements": $section.find("img[srcset]").get()
    });

    // init the carousel;
    $section.find("div.carousel-container").slick(settings);
  });
});
