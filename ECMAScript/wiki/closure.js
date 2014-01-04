var uniqueId = function() {
    var id = 0;
    return function() {
        return id++;
    }
}();
var aValue = uniqueId();
var anotherValue = uniqueId();
var nextValue = uniqueId();
console.log(aValue);
console.log(aValue);
console.log(aValue);
console.log(anotherValue);
console.log(anotherValue);
console.log(anotherValue);
console.log(nextValue);
console.log(nextValue);
console.log(nextValue);
console.log(uniqueId());
console.log(uniqueId());
console.log(uniqueId());
console.log(uniqueId());

console.log('-------------');

var multNumber = function(arg) {
    return function(mul) {
         return function(val) {
             return arg * mul + val;
         };
    };
};
console.log(multNumber(2)(3)(10));

console.log('-----------');
function curry(x) {
    return function(y) {
       return x + y;
    }
}

console.log(curry(5)(2));

console.log('-------------');

var myObject = function() {
    var value = 0;
    return {
        increment: function(inc) {
            value += typeof  inc === 'number' ? inc : 1;
        },
        getValue: function() {
            return value;
        }
    }
}();

console.log(myObject.value === undefined);
console.log(myObject.value);
console.log(myObject.getValue());
myObject.increment();
myObject.increment(10);
console.log(myObject.getValue());

console.log('-----------------');

var getConstant = function() {
    var constants = {
        UPPER_BOUND: 100,
        LOWER_BOUND: -100
    };

    return function(name) {
        return constants[name];
    }
}();
console.log(getConstant('UPPER_BOUND'));
