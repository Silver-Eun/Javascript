console.clear();

/*var month = 8;
var season = null;

if( month == 12 || month == 1 || month == 2){
    season = 'winter';
}
if( month == 3 || month == 4 || month == 5){
    season = 'spring';
}
if( month == 6 || month == 7 || month == 8){
    season = 'summer';
}
if( month == 9 || month == 10 || month == 11){
    season = 'autumn';
}

console.log(season);*/

function season_reuturn(month){
    var season = null;
    switch(month){
        case 12:
        case 1:
        case 2:
            season = 'winter';
            break;
        case 3:
        case 4:
        case 5:
            season = 'spring';
            break;
        case 6:
        case 7:
        case 8:
            season = 'summer';
            break;
        case 9:
        case 10:
        case 11:
            season = 'autumn';
            break;
    }
    return season;
}

console.log(season_reuturn(8));