function sum(a, b, callbackfunction){
    setTimeout(() => { // Arrow function
        //return a + b;
        callbackfunction(a + b);
    }, 500);

    /*
    setTimeout(function() {
        return a + b;
    }, 500);
    */
   console.log("fim da função");
}

//const a = sum(2, 2);
//console.log(a);

sum(2, 2, function(result){
    console.log(result);
});