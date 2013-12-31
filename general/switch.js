var browser = navigator.appName;
console.log(browser);
if(browser == 'IE') {
    console.log('IE');
} else if(browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    console.log('Used browser : ' + browser);
} else {
    console.log('Undefined browser');
}