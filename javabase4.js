console.clear();

multiply = function(num1, num2){
    return num1*num2;
}
b = 10 + 5;
a = multiply(5, 2);

console.log(a);

var array = [1, 2, 3];
array.push(3);
array.push(4);
array[5]=100;
array['favorite'] = 16;
console.log(array.length);

console.log('예제 #1');
// [] == 커피 케리어
// 배열보다 자유도가 높음
var coffee_carrier = {};

coffee_carrier[0] = 1;
coffee_carrier[1] = 2;

console.log(coffee_carrier[0]);
console.log(coffee_carrier[1]);

console.log('예제 #2');

var coffee_carrier2 = {0 : 1, 1 : 4};

coffee_carrier2[2] = 5;
coffee_carrier2[3] = 6;
coffee_carrier2['favorite'] = 16;

console.log(coffee_carrier2[0]);
console.log(coffee_carrier2[1]);
console.log(coffee_carrier2[2]);
console.log(coffee_carrier2[3]);
console.log(coffee_carrier2['favorite']);
console.log(coffee_carrier2.length);