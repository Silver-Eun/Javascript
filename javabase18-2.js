var $div = $('div.a');

$div.click(function(){
    $(this).togleClass('b');

    /*if($(this).hasClass('b')){
        $(this).removeClass('b');
    }
    else{
        $(this).addClass('b');
    }*/
})