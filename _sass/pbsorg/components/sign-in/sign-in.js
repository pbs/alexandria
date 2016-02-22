var
  jQuery = window.jQuery = require("jquery"),
  PBS                 = require("../../scripts/_pbs");
  
(function (window, $) {

  var $whySignIn = $('.question');
  var $answer = $('.answer');
    $whySignIn.click(function(event) {
      event.preventDefault();
      if ($('.answer-show').length) {
        $answer.removeClass('answer-show');
        $answer.addClass('answer-hidden');
      } else {
        $answer.removeClass('answer-hidden');
        $answer.addClass('answer-show');
      }
    });

}(window, jQuery));
