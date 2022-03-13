console.clear();

var i = 1; // 1. 조건의 초기화
//i 1 ~ 9
while(i < 10){// 2. 조건의 페크
    console.log('while : ' + i); // 4. 핵심
    i++;// 3. 조건의 증가
}

// 1 → 2 → 4 → 3 → 2 → 4 → 3 → 2 → 3 → 4 → 3 → 2 → ... 
for(var i = 0; i < 10; i++){
    console.log('for : ' + i);
}