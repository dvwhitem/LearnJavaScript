function pow(x, n) {
    return (n != 1) ? x*pow(x, n-1) : x;
}
console.log(pow(2, 4));

console.log('----------------');

function recursionSumTo(n) {
   n += (n != 1) ? recursionSumTo(n-1) : n-1;
   return n;
}
console.log('Recursion: ' + recursionSumTo(100));

function loppSumTo(n) {
    for( i = n-1; i > 0;  i--) {
        n+= i;
    }
    return n;
}
console.log('Loop: ' + loppSumTo(100));
function formulaSumTo(n) {
    return n*(n+1)/2;
}
console.log('Formula: ' + formulaSumTo(100));

console.log('-----------------');

function factorial(n) {
    if(n == 1) return n;
    return n * factorial(n-1); // 5 * 4 * 3 * 2 * 1
}

console.log('Factorial: ' + factorial(5));


console.log('-------------');

function fib(n) {
    return n <=1 ? n : fib(n-1) + fib(n-2);
}
console.log('Fibonacci: ' + fib(7));