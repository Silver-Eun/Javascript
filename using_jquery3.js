$(".top-slider .side-bars > div").click(function () {
  var $clicked_button = $(this);
  var $slider = $clicked_button.closest(".top-slider");
  var $slides = $slider.find(".slides");
  var $now_slide = $slides.find(".active");
  var $next_slide = null;
  var $first_slide = $slides.children().first();
  var $last_slide = $slides.children().last();

  var left_clicked = $clicked_button.hasClass("left");

  if ($clicked_button.hasClass("left")) {
    $next_slide = $now_slide.prev();
  } else if ($clicked_button.hasClass("right")) {
    $next_slide = $now_slide.next();
  }

  if ($next_slide.length == 0) {
    if (left_clicked) {
      $next_slide = $last_slide;
    } else {
      $next_slide = $first_slide;
    }
  }

  $now_slide.removeClass("active");
  $next_slide.addClass("active");
});

$(".go-to-below-btn").click(function () {
  var $slider = $(this).closest(".top-slider");
  var scrollTop = $slider.offset().top + $slider.height();
  $(window).scrollTop(scrollTop);
});

// var $div1 = $("section > div:nth-child(1)");
// $div1.css("background-color", $div1.data("color"));
// var $div2 = $("section > div:nth-child(2)");
// $div2.css("background-color", $div2.data("color"));
// var $div3 = $("section > div:nth-child(3)");
// $div3.css("background-color", $div3.data("color"));

$("section > div").each(function (index, node) {
  $(node).css("background-color", $(node).data("color"));
});

$(".top-slider").each(function (index, node) {
  var $slider = $(node);
  if ($slider.data("autoplay")) {
    setInterval(function () {
      $slider.find(".side-bars > .right").click();
    }, $slider.data("autoplay"));
  }
});
