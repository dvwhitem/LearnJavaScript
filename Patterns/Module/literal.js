/**
 * Created by vitaliy on 03.04.14.
 */
var myModule = {
    myProperty: 'someValue',
    myConfig: {
        useCaching: true,
        language: 'en'
    },
    myMethod: function() {
        console.log('I can haz functionality?');
    },
    myMethod2: function() {
        console.log('Caching is: ' + ((this.myConfig.useCaching) ? 'enabled' : 'disabled'));
    },
    myMethod3: function(newConfig) {
        if (typeof  newConfig == 'object') {
            this.myConfig = newConfig;
            console.log(this.myConfig.language);
        }
    }
}
myModule.myMethod(); // I can haz functionality?
myModule.myMethod2();
myModule.myMethod3({language: 'fr', useCaching:false});
myModule.myMethod2();