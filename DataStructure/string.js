var str = "Widgets";

if(~str.indexOf("gets")) {
    console.log("matches");
}

console.log('========================');

function checkSpam(string) {
    var string = string.toLowerCase();
    if(~string.indexOf('viagra') ||
        ~string.indexOf('xxx')) {
        return true;
    }
    return false;
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));

console.log('======================');

var str = 'this some text';
var target = 't';

var pos = -1;
while ( (pos = str.indexOf(target, pos+1)) != -1) {
    console.log(pos);
}

console.log('========================');

function truncate(str, maxlength) {
    if(str.length > maxlength) {
        return str.slice(0, maxlength - 3) + '...';
    }
    return str;
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));