var main = function() {
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
  });

  $('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if (nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();

    };
    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');

    currentSlide.fadeOut(600);
    currentSlide.removeClass('active-slide');

    nextSlide.fadeIn(600);
    nextSlide.addClass('active-slide');

  });
};
$(document).ready(main);
