var person = {};
person.age = 27;
person.name = "Vitaliy";

if("age" in person || "name" in person) {
    console.log(person);
}

var user = {name : "Vasya"};

//var admin = user;
var admin = clone(user);
admin.name = "Petya";

console.log(user.name);

function clone(obj) {
    var o = {};

    for(var key in obj) o[key] = obj[key];

    return o;
}