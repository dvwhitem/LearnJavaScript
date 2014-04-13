/**
 * Created by vitaliy on 03.04.14.
 */
// Традиционный способ
var store = window.store || {};
store.basket = store.basket || {};

// dojo.setObject

dojo.setObject("store.basket.object", (function() {
    var basket = [];

    function privateMethod() {
        console.log(basket);
    }
    return {
        publicMethod: function() {
            privateMethod();
        }
    }
}()));