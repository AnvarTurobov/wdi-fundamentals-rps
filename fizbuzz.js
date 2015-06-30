var result;
var max=20;
for (result=1; result<=max; result++) {
    if (result % 3=== 0 && result % 5 ===0) {
        console.log("Fizbuzz");
    }
    else if (result % 5 ===0) {
        console.log("Buzz")
    } 
    else if (result %3 ===0) {
        console.log("Fizz");
    }
else { console.log (result);
}
}