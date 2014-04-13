/**
 * Created by vitaliy on 03.04.14.
 */
var basketModule = (function() {

    var basket = [] // private var
    return { // externally accessible methods
        addItem: function(values) {
            basket.push(values);
        },
        getItemCount: function() {
            return basket.length;
        },
        getTotal: function() {
            var q = this.getItemCount(), p = 0;
            while(q--) {
                p+=basket[q].price;
            }
            return p;
        }
    }
}());