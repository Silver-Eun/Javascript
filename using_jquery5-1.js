var $div = $("div");

// var $div1 = $div.eq(0);
// var $div2 = $div.eq(1);
// var $div3 = $div.eq(2);

// $div1.css("height", "100px");
// $div2.css("height", "200px");
// $div3.css("height", "300px");

// for (var i = 0; i < $div.length; i++) {
//   var height = (i + 1) * 100;
//   var $div1 = $div.eq(i).css("height", height + "px");
// }

$div.each(function (index, node) {
  var $node = $(node);

  if ($node.hasClass("a")) {
    $node.css("background-color", "red");
  }

  var height = (index + 1) * 100;
  $node.css("height", height + "px");
});
