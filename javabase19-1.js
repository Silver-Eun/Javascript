$('nav').clicked(function(){
    var $this = $(this);

    var $article = $this.closest('article');
    $('article').css('background-color', 'gold');
})