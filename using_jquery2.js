$("button").click(function () {
  // save clicked button
  var $clicked_button = $(this);
  // now active
  var $active = $("div.active");
  // true =  click left button
  // flase = click right button
  var left_clicked = $clicked_button.hasClass("left");

  if (left_clicked) {
    var $next = $active.prev();
  } else {
    var $next = $active.next();
  }

  // non-cycle
  if ($next.length == 0) {
    $next = $active;
  }
  // //cycle
  //   if ($next.length == 0) {
  //     if (left_clicked) {
  //       $next = $active.parent().children().last();
  //     } else {
  //       $next = $active.parent().children().first();
  //     }
  //   }

  $active.removeClass("active");
  $next.addClass("active");
});
