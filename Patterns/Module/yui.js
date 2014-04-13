
YAHOO.store.basket = function () {

    // приватная переменная:
    var myPrivateVar = "Ко мне можно получить доступ только из YAHOO.store.basket.";

    // приватный метод:
    var myPrivateMethod = function() {
        YAHOO.log("Я доступен только при вызове из YAHOO.store.basket");
    }

    return {
        myPublicProperty: "Я - публичное свойство",
        myPublicMethod: function() {
            YAHOO.log("Я - публичный метод");

            // Будучи внутри корзины я могу получить доступ к приватным переменный и методам:
            YAHOO.log(myPrivateVar);
            YAHOO.log(myPrivateMethod());

            // Родной контекст метода myPublicMethod сохранён
            // поэтому мы имеет доступ к this
            YAHOO.log(this.myPublicProperty);
        }
    };

}();