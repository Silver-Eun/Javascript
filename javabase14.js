console.clear();

/*var dan = 5;

for(var i = 1; i <= 9; i++){
    var rs = i*dan;

    console.log(dan + '*' + i + '=' + rs);
}*/

for (var table = 1; table <= 9; table++){
    /*if(table = 3){
        // 이번 턴만 스킵
        continue;
    }*/
    if(dan%2 == 1){
        continue;
    }

    if(dan%2 == 0){
        
    }

    console.log(table + 'table!!');

    for(var i = 1; i <= 9; i++){
        /*if(i = 7){
            // i가 7이면 중단
            break;
        }*/

        var rs = i + table;

        
        if(dan%2 == 0){
            continue;
        }

        console.log(table + '*' + i + '=' + rs);
    }
} 