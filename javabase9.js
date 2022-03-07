console.clear();

// window.location 주소
// window.document 문서
// window.console 콘솔
/*var a = 1;
window.a = 2;

var person = {};
person.age = 20;
person.hi = function(){
    console.log('hi');
}

window.a;
person.age;

person.hi();
*/
var person = {
    name : 'kevin',
    age  : 20
};

var person2 = {};
person2.name = 'kebin';
person2.age = 23;

console.log(person.age + person2.age);