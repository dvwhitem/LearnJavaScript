console.log("---------------");
var user = {
    name: "Petya",
    age: 30
}

var keys = Object.keys(user);

console.log(keys);

console.log("---------------");

function unique(arr) {
    var unq = [];
    for(var i = 0; i < arr.length; i++) {
        if(!find(unq, arr[i])) {
            unq.push(arr[i]);
        }
    }
    return unq;
}

function find(newarr, search) {
    for(var i = 0; i < newarr.length; i++) {
        if(newarr[i] == search) {
            return true;
        }
    }
    return false;
}

console.log("---------------");

function unique2(arr) {
    var result = [];

    nextInput:
    for(var i = 0; i < arr.length; i++) {
        var str = arr[i];

        for(var j = 0; j < result.length; j++) {
            if(result[j] == str) continue nextInput;
        }
        result.push(str);
    }
    return result;
}

console.log("---------------");

function unique3(arr) {
    var obj = {};

    for(var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}
console.log("---------------");

var strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", "8-()"];

console.log(unique(strings));

console.log(unique2(strings));

console.log(unique3(strings));


console.log("---------------");


function addClass(obj, newClass) {
    if(obj.className !== undefined) {

        obj.className += " " + newClass;
        var currClass = obj.className.split(" ");
        var arrClass = [];

        next:
        for(var i = 0; i < currClass.length; i++) {
            var str = currClass[i];
            for(var j = 0; j < arrClass.length; j++) {
                if(arrClass[j] == str) continue next;
            }
            arrClass.push(str);
        }

        return arrClass;
    }
}


console.log("---------------");

function addClass2(obj, cls) {
    var classes = obj.className ? obj.className.split(' ') : [];

    for(var i = 0; i < classes.length; i++) {
        if(classes[i] == cls) return;
    }
    classes.push(cls);

    obj.className = classes.join(' ');
}

var obj = {
    className: 'open menu'
}


addClass2(obj, 'new');
addClass2(obj, 'open');
addClass2(obj, 'me');

console.log(obj.className);

console.log("---------------");



