/**
 * Created by vitaliy on 03.04.14.
 */
var module = (function() {

    var _private = {
        i: 5,
        get: function() {
            console.log("Current value: " + this.i);
        },
        set: function(val) {
            this.i = val;
        },
        run: function() {
            console.log("process running");
        },
        jump: function() {
            console.log("current change");
        }
    };
    return {
        facade: function(args) {
            _private.set(args.val);
            _private.get();
            if(args.run) {
                _private.run();
            }
        }
    }
}());

module.facade({
    run: true, val:31
});
