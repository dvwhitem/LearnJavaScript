
//var x = +prompt('Введите число 1');
//var y = +prompt('Введите число 2');

//confirm('Сумма: ' + (x+y));

function isNumeric(n) {
    return !isNaN((parseFloat(n))) && isFinite(n);
}

console.log('-------------------');
console.log(isNumeric("43"));

console.log('-------------------');
var n = 234;
console.log(n.toString(2));

function getDecimal(n) {
    return +(parseFloat(n) - parseInt(n)).toFixed(6);
}

console.log('-----------------');
console.log(getDecimal("13.26"));

function getDecimal(n) {
    return +(n % 1).toFixed(6);
}
console.log('-----------------');
console.log(getDecimal("12.14"));

function getRandomMaxNumber(max) {
    return Math.random()* max;
}
console.log('-----------------');
console.log(getRandomMaxNumber(10));

function getRandomMinAndMaxNumber(min, max) {
    return min + Math.random()*(max - min);
}
console.log('-----------------');
console.log(getRandomMinAndMaxNumber(5, 10));