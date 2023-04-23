console.clear();

var $window = $(window);

$window.scroll(function () {
  var scrollTop = $window.scrollTop();
  $(".scroll-top").empty().append(scrollTop);
});
