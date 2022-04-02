var game_info = {
    map : {
        width : 800,
        height : 500
    },
    player : {
        width : 100,
        height : 100,
        speed : 1,
        X_speed : null,
        y_speed : null,
        X_direct : 0,
        y_direct : 0
    }
}

var reset = function(){
    $('section').css('width', game_info.map.width);
    $('section').css('height', game_info.map.height);

    $('div').css('width', game_info.player.width);
    $('div').css('height', game_info.player.height);

    $('div').css('left', game_info.player.X_direct);
    $('div').css('top', game_info.player.y_direct);

    game_info.player.X_speed = game_info.player.speed;
    game_info.player.y_speed = game_info.player.speed;
}

var player_draw = function(){
    $('div').css('left', game_info.player.X_direct)
            .css('top', game_info.player.y_direct);
}

var player_move = function(){
    game_info.player.X_direct += game_info.player.X_speed;
    game_info.player.y_direct += game_info.player.y_speed;
}

var palyer_direct_change = function(){
    var x_distance = game_info.map.width - game_info.player.width;
    var y_distance = game_info.map.height - game_info.player.height;

    if(game_info.player.X_direct > x_distance){
        game_info.player.X_speed = game_info.player.speed * -1;
    }
    else if(game_info.player.X_direct < 0){
        game_info.player.X_speed = game_info.player.speed;
    }
    if(game_info.player.y_direct > y_distance){
        game_info.player.y_speed = game_info.player.speed * -1;
    }
    else if(game_info.player.y_direct < 0){
        game_info.player.y_speed = game_info.player.speed;
    }
}

var game_start = function(){
    setInterval(function(){
        palyer_direct_change();
        player_move();
        player_draw();
    }, 10)
}

reset();

game_start();

$(window).keyup(function(event){
    if(event.keyCode == 37){
        game_info.player.X_speed = game_info.player.speed * -1;
    }
    else if(event.keyCode == 39){
        game_info.player.X_speed = game_info.player.speed;
    }
    else if(event.keyCode == 38){
        game_info.player.y_speed = game_info.player.speed * -1;
    }
    else if(event.keyCode == 40){
        game_info.player.y_speed = game_info.player.speed;
    }
})