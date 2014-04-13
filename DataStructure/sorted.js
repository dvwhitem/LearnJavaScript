
var arr = [];

function reverseSort(a, b) {
    return b - a;
}
arr = [ 5, 2, 1, -10, 8];
arr.sort(reverseSort)
console.log(arr);

console.log('----------------------');


var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 }

var people = [ vasya , masha , vovochka ];

function compare(a, b) {
    return a.age- b.age;
}
people.sort(compare);

console.log(people[0].age);
