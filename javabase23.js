var $window = $(window);

$window.keyup(function(event){
    /*var marginLeft = $('div').css('margin-left');
    var marginTop = $('div').css('margin-top');
    marginLeft = parseInt(marginLeft);
    marginTop = parseInt(marginTop);

    if(event.keyCode == 37){
        marginLeft = marginLeft - 10;
    }
    else if(event.keyCode == 39){
        marginLeft = marginLeft + 10;
    }
    else if(event.keyCode == 38){
        marginTop = marginTop - 10
    }
    else if(event.keyCode == 40){
        marginTop = marginTop + 10;
    }

    $('div').css('margin-left', marginLeft + 'px');
    $('div').css('margin-top', marginTop + 'px');*/

    $('div').removeClass('a');
    $('div').removeClass('b');
    $('div').removeClass('c');
    $('div').removeClass('d');

    if(event.keyCode == 65){
        $('div').addClass('a');
    }
    else if(event.keyCode == 66){
        $('div').addClass('b');
    }
    else if(event.keyCode == 67){
        $('div').addClass('c');
    }
    else if(event.keyCode == 68){
        $('div').addClass('d');
    }
})