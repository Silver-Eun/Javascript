var x = 0;
var y = 0;

var map = {
    width : 800,
    height: 500
};

var square = {
    width : 100,
    height: 100
};

var x_direct = 'right';
var y_direct = 'down';

function square_moved(){
    if(x_direct == 'right'){
        x+=3;
    }else {
        x-=3;
    }

    if(y_direct == 'down'){
        y+=3;
    }else {
        y-=3;
    }

    if( x > map.width - square.width){
        x_direct = 'left'
    }
    else if(x <= 0){
        x_direct = 'right'
    }

    if( y > map.height - square.height){
        y_direct = 'up'
    }
    else if(y <= 0){
        y_direct = 'down'
    }

    $('div').css('left', x);
    $('div').css('top', y);

}

setInterval(square_moved, 20);