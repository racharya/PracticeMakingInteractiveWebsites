var main = function() {
  $('.article').click(function() {
    $('.description').hide();
    $(this).children('.description').show();
  });


};
$(document).ready(main);
