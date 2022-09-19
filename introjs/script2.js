// GLOBAL

a = 10;

console.log(a + " " + typeof(a));

// STRING INTERPOLATION
console.log(`a ${typeof(a)}`);


// DECIMAL

a = 20.5

console.log(a + " " + typeof(a));

// COMPARANDO SE OS VALORES SÃO IGUAIS
console.log(a == 20.5);
console.log(a == "20.5");

// COMPARANDO SE OS VALORES E OS TIPOS SÃO IGUAIS
console.log(a === "20.5");


// TIPO LÓGICO

a = true; // boolean

console.log(a + " " + typeof(a));

console.log(a == "0");

// TIPO TEXTO
a = "texto";
console.log(a + " " + typeof(a));
a = "texto";
console.log(a + " " + typeof(a));

// array - listas(object)

a = ['um', 'dois', 'tres'];

console.log(a + " " + typeof(a));

a = Array();

a[0] = "lalala";
a.push("lelele");
console.log(a + " " + typeof(a));

// OBJETO
a = new Object();

a.idade = 20;
a.nome = 'zezinho';
console.log(a + " " + typeof(a));

console.log(JSON.stringify(a));

function minhaFuncao(umnumero){
    console.log(umnumero);
    console.log("fuiclicado");
    let caixinha = document.getElementById("valor");
    caixinha.value += umnumero;

    caixinha.value = "2+2=" + eval("2+2");
}







