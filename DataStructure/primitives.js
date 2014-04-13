console.log("" + 1 + 0); // 10
console.log("----------");
console.log("" - 1 + 0); // ? -1
console.log(true + false); // true
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // 45px
console.log("$" + 4 + 5); // $45
console.log("4" - 2); // 2
console.log("4px" - 2); // ? undefined
console.log(7 / 0); // NaN  (Infinity)
console.log(parseInt("09")); // 9
console.log(" -9\n" + 5); // -4 (-9\n5)
console.log(" -9\n" - 5); // NaN (-14)
console.log(5 && 2); // 2
console.log(2 && 5); // 5
console.log(5 || 0); // 5
console.log(0 || 5); // 5
console.log(null + 1); // 1
console.log(undefined + 1); // NaN