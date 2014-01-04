function sum(arg1, arg2) {
    return arg1 + arg2;
}

function sum(arg1, arg2, arg3) {
    return arg1 + arg2 + arg3;
}
console.log(sum(10, 20));
console.log(sum(10, 20, 30));

function sum() {
    var result = 0;
    for(var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
console.log("-----------------------");
console.log(sum(10, 20));
console.log(sum(10, 20, 60));
console.log(sum(10, 20, 60, 10, 20, 30));

var factorial = function(step, result) {
    result = result || 1;
    if(step < 2) {
        return result;
    }
    return arguments.callee(step - 1, step * result);
}

console.log('--------------')
console.log(factorial(3, 10));

function sumOfResults(callback) {
    var result = 0;
    for(var i = 1; i < arguments.length; i++) {
        result += callback(arguments[i]);
    }
    return result;
}
var square = function(x) {
    return x * x;
}
console.log('----------')
console.log(sumOfResults(square, 3, 4));