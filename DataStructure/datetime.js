console.log('--------------------------');

var now = new Date(2012, 1, 20, 3, 12);
console.log(now);

console.log('--------------------------');

var date = new Date();

console.log(date.getMonth());

console.log('--------------------------');

var dayOfweek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

var date = new Date(2012, 0, 3);

console.log(dayOfweek[date.getDay()]);

console.log('--------------------------');

var nowDate = new Date();

nowDate.setDate(nowDate.getDate() - 100);

console.log(dayOfweek[nowDate.getDay()]);

console.log('--------------------------');

function getLastDayOfMonth(year, month) {
    var date = new Date(year, month + 1, 0);
    return date.getDate();
}
console.log(getLastDayOfMonth(2014, 3));

console.log('--------------------------');

var now = new Date();
// создать объект из текущей даты, без часов-минут-секунд
var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
var diff = now - today; // разница в миллисекундах
console.log( Math.round(diff / 1000) ); // перевести в секунды


var now = new Date();
// создать объект из даты, без часов-минут-секунд
var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
var diff = tomorrow - now; // разница в миллисекундах
console.log( Math.round(diff / 1000) ); // перевести в секунды

console.log('----------------------');
function floorMath(x) { return Math.floor(x); }
function floorXor(x) { return x^0; }
function bench(f) {
    var d = new Date();
    for (var i=0.5; i<1000000; i++) f(i);
    return new Date() - d;
}
console.log('Время floorMath: ' + bench(floorMath) + 'мс');
console.log('Время floorXor: ' + bench(floorXor) + 'мс');
