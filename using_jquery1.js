console.clear();
console.log(1);
// stage 1
// var button_clicked = function () {

//   var $actived_div = window.$("div.active");
// };

// stage 2
// var $button = window.$("button");

// stage 3
// $button.click(button_clicked);

var up = function () {
  var $actived_div = window.$("div.active");

  var $next = $actived_div.prev();

  $actived_div.removeClass("active");
  $next.addClass("active");
};

$("button.up").click(up);

var down = function () {
  var $actived_div = window.$("div.active");

  var $next = $actived_div.next();

  $actived_div.removeClass("active");
  $next.addClass("active");
};

$("button.down").click(down);

$(window).keyup(function (event) {
  if (event.keyCode == 38) {
    up();
  } else if (event.keyCode == 40) {
    down();
  }
});
