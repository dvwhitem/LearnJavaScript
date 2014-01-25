var person = {};
person.name = 'Vasya';
person.age = 23;

console.log(person.name + ':  ' + person.age);

delete person.name;

person.name = 'John';

console.log(person);

if('age' in person) {
    console.log('age : ' + person.age);
}

console.log('-------');

var user = {
    name: 'Vasya',
    surname: 'Petrov'
};

user.name = 'Sergey';

delete user.name;

console.log(user);

console.log('-------------');

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
   for(var prop in obj) {
       if(isNumeric(obj[prop])) {
           obj[prop] *= 2;
       }
   }
   return obj;
}

var menu = {
    width: 200,
    height: 300,
    title: 'My menu'
}

console.log(multiplyNumeric(menu));


console.log('-----------');

var person = {
    age: 25
}
console.log(person.age);
var key = 'age';
console.log(person[key]);

console.log('------------');

function clone(obj) {
    var cloneObj = {};
    for(var key in obj) cloneObj[key] = obj[key];

    return cloneObj;
}

var user = {name: 'Vasya'};

var admin = user;

admin.name = 'Petya';

console.log(user);

var newAdmin = clone(user);

newAdmin.name = 'John';

console.log(user); // Petya
