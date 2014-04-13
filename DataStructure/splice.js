var arr = ['I\'m', 'learn', 'JavaScript'];

arr.splice(1, 1);

console.log(arr);

console.log('----------------------------');

arr = ['I\'m', 'learn', 'JavaScript'];

arr.splice(0,1);

console.log(arr);

console.log('----------------------------');

arr = ['I\'m', 'now', 'learn', 'JavaScript'];

arr.splice(0, 4, 'We', 'learning', 'Java');

console.log(arr);

console.log('----------------------------');

arr = ['I\'m', 'now', 'learn', 'JavaScript'];

var removed = arr.splice(0,2);

console.log(removed);

console.log('----------------------------');

arr = ['I\'m', 'learn', 'JavaScript'];

arr.splice(2,0, "complex", "language");

console.log(arr);

console.log('----------------------------');

var arr = [5, 2, 1];

arr.splice(-2, 0, 4, 3);

console.log(arr);

arr.splice(-2, 0, 4, 3);

function removeClass(obj, className) {
    obj = obj.className.split(' ');

    for(var i = 0; i < obj.length; i++) {
        while(obj[i] == className) {
            obj.splice(i, 1);
        }

    }
    return obj;
}

var obj = { className: 'open menu menu' }


console.log(removeClass(obj, 'menu'));

console.log('----------------------------');

function removeClass2(obj, cls) {
    var classes = obj.className.split(' ');

    for(var i =0; i < classes.length; i++) {
        if(classes[i] == cls) {
            classes.splice(i, 1);
            i--;
        }
    }
    obj.className = classes.join(' ');
}

var obj = { className: 'open menu menu' }
removeClass2(obj, 'blabla');

removeClass2(obj, 'menu')

console.log(obj.className)   // open

console.log('----------------------------');

var arr = [];

function filterRangeInPlace(arr, a, b) {
    for(var i = 0; i < arr.length; i++) {
        if(a <= arr[i] <= b) {
            arr.splice(i, 1);

        }
    }
}

arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

console.log(arr);






