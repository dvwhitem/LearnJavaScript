function MyClass() {
    this.value1 = 1;
    this.value2 = 2;
}

MyClass.prototype.myMethod = function() {
    return this.value1 * this.value2;
}

var mc = new MyClass();
mc.value1 = mc.value2 * 5;

console.log(mc.myMethod());