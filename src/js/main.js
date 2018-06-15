
$.fn.isInViewport = function() {
var elementTop = $(this).offset().top;
var elementBottom = elementTop + $(this).outerHeight();

var viewportTop = $(window).scrollTop();
var viewportBottom = viewportTop + $(window).height();

return elementBottom > viewportTop && elementTop < viewportBottom;
};


$(window).on('resize scroll', function() {
    if ($('.onScroll').isInViewport()) {
      $("onScroll").attr(
        
      )
    // } else {
    //   $('.graphic').hide();
    }
  });
