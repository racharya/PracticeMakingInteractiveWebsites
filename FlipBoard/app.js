var main = function() {
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
  });
  $('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    if (nextSlide.length === 0) {
      nextSlide = $('.slide').first();
    };

    currentSlide.fadeOut(600);
    currentSlide.removeClass('active-slide');

    nextSlide.fadeIn(600);
    nextSlide.addClass('active-slide');


  });
};
$(document).ready(main);
