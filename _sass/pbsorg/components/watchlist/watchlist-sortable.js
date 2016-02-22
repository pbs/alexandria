let jQuery = window.jQuery = require("jquery"),
  bootstrap = require("../../bower_components/bootstrap-sass/assets/javascripts/bootstrap"),
  PBS = require("../../scripts/_pbs");

require("../../bower_components/jquery-ui/ui/core");
require("../../bower_components/jquery-ui/ui/widget");
require("../../bower_components/jquery-ui/ui/mouse");
require("../../bower_components/jquery-ui/ui/sortable");
require("../../bower_components/jquery-ui-touch-punch/jquery.ui.touch-punch");

var watchlist = {};
watchlist.reorder = function () {
  var index = 1;
  jQuery(".watchlist-result").each(function () {
    jQuery(this).find(".watchlist-position").html(index);
    index++;
  })
};

jQuery(($) => {
  var lastScrollPosition = 0,
      $body = $("body");

  $(".remove-watchlist").on('click', function () {
    $(this).closest(".watchlist-result").fadeOut(600, function () {
      $(this).remove();
      watchlist.reorder();
    });
  });

  $(".droppable").sortable({
    axis: "y",
    forcePlaceholderSize: true,
    handle: ".watchlist-handle",
    update: function (event, ui) {
      $(".draggable").each(function (index) {
        watchlist.reorder();
      });
    },

    // cf. http://stackoverflow.com/questions/1735372/jquery-sortable-list-scroll-bar-jumps-up-when-sorting
    // before we start;
    helper: function (event, ui) {
      // lets get the scroll position (it's going to change in a second, and that's bad);
      lastScrollPosition =  $body.scrollTop();

      // return the item to drag;
      return ui;
    },
    // now start the drag event;
    start: function (e, ui) {
      // avoid scroll jump by going back to our position when this started;
      $body.scrollTop(lastScrollPosition);
    }
  });

});
