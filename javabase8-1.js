console.clear();

function a(msg){
    msg();
}

a(function (){
    console.log('hi');
});

var person = { name : 'kevin',
                age : 20,
                hi : function(){
                console.log('hi')

                return this;
                }
            };

person.hi();

var person2 = person.hi();

person.hi().hi();