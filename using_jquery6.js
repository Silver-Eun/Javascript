console.clear();

$(window).scroll(function () {
  var $this = $(this);

  var scrollTop = $this.scrollTop();

  var $item = $("div.perspective > div.item");

  var space = 500;

  $item.each(function (index, node) {
    var z = -(index * space);
    z += scrollTop;

    $(node).css("transform", "translateZ(" + z + "px)");
  });
});

$(window).scroll();
