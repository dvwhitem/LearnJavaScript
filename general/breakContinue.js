var i=0;
while(1) {
    i++;

    if(i==10) {
        break;
    }
  //  console.log(i);
}
//console.log("Last iteration i = " + i);

for(var i = 0; i < 10; i++) {
    if(i % 2 != 0) {
        continue;
    }
//    console.log(i);
}

//TODO
nextPrime:
 for(var i = 2; i<10; i++) {
     for(var j = 2; j<i; j++) {
         if(i % j == 0) {
             continue nextPrime;
         }
     }
     console.log(i);
 }