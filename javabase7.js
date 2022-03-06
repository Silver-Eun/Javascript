console.clear();

var a = 1; // 전역변수

function b(){
    var a = 1; // 지역변수
    a++;
}

b();

console.log(a);

var age = 19; // 전역변수

function print(age2){
    age++;
     // age라는 지역변수가 없으면 전역변수인 age 사용 
    console.log('함수 내 나이 : ', age);
}

print(age);

var b = [1, 2];

b.push(3);
b.push(3);
b.push(3);

console.log(b);

var c = {name : 'kevin', 1 : 20, 2 : 'good'};

study(c.name); //호이스팅

function study(c){
    console.log( c.name + ' is studying');
} // 호이스팅 가능

console.log(c.name)

study(c);