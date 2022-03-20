$('div').click(function(){
    var $clicked = $(this);

    $clicked.removeClass('a');
})

$('div').dblclick(function(){
    var $double_click = $(this);

    $double_click.addClass('a');
})