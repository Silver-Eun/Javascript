console.clear();

var a = {age : 20};
var b = a;

b.age = 10;

console.log(a.age);

var person = { name : 'kevin', age : 20};

function study(person){
    person.age++;
}

study(person);

console.log(person.age);