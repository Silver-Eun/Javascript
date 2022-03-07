import $ from "https://cdn.skypack.dev/jquery@3.6.0";
console.clear();

var person = {
    name : "",
    age : "",
    adress : "",
    hi : function(){
        console.log("Hi, I'm " + this.age + " years old, My name is " + this.name + ".");
    }
};

function person_create(name, age, address){
    var new_people = $.extend({}, person);

    new_people.name = name;
    new_people.age = age;
    new_people.address = address;

    return new_people;
}

var tim = person_create('tim', 25, 'W.DC');
var mark = person_create('mark', 39, 'LA');
var scott = person_create('scott', 24, 'IOWA');

tim.hi();
mark.hi();
scott.hi();