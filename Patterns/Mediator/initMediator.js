//mediator.name = "tim";
//mediator.subscribe("nameChange", function(arg) {
//   console.log(this.name);
//    this.name = arg;
//    console.log(this.name);
//});
//
//mediator.publish("nameChange", "david");

var obj = {name: "sam"};
mediator.installTo(obj);
obj.subscribe("nameChange", function(args) {
   console.log(this.name);
   this.name = args;
   console.log(this.name);
});

obj.publish("nameChange", "john");