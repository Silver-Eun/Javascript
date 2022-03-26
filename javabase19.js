console.clear();

var $div = $('div');

var func = function(){
    alert('hi');
}

var $section = $('section');

var $div2 = $section.find('div');

console.log($div2.length);

var $nav = $('nav');

$nav.click(function(){
    var $this = $(this);
    var $article = $this.find('article');
    $article.css('background-color', 'black');
})