$(window).scroll(function () {
  var $this = $(this);

  var scrollTop = $this.scrollTop();

  $(".scroll-top").empty().append(scrollTop);

  $("div.perspective > div.item").css("transform", "translateZ(" + scrollTop * -1 + "px)");
});
