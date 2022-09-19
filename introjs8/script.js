function sum(a, b ){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(a + b);
        }, 500);
    });
}

(async function () {
    const result = await sum(7, 1);
    console.log(result);

})(); // função auto executada