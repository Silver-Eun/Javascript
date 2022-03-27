$('section div').click(function(){
    var $this = $(this);

    $section = $('section');
    var $section = $this.parent();
    var $body = $this.parent();
    //$section.css('border-width', '100px');
    //$body.css('background-color', 'blue');
})

$('section').click(function(){
    var $section = $(this);

    $section.children().css('border-color', 'green');
    //$section.find('> *').css('border-color', 'green');
})