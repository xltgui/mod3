//const lista = ['💖', '🎉', '🐸', '😋'];

/*
for(let umItem of lista){
    console.log(umItem);
} */

/*
const mapa = new Map();

mapa.set('sapo', '🐸')
mapa.set('coruja', '🦉')
mapa.set('jacare', '🐊')
mapa.set('sapo', '🐧');

console.log(mapa);
console.log(mapa.get('sapo'));
*/

/*
const listaValoresUnicos = new Set();
listaValoresUnicos.add('🐸')
listaValoresUnicos.add('🦓')
listaValoresUnicos.add('🐔')
listaValoresUnicos.add('🐸')
console.log(listaValoresUnicos);
*/

/*
function soma(x = 1, y = 2){
    return x + y;
}

console.log(soma());       // x = 1, y = 2
console.log(soma(3));      // x = 3, y = 2
console.log(soma(3,5));    // x = 3, y = 5


let soma2 = (x = 1, y = 2) => x + y;
console.log(soma2());
*/


/*
function outraFuncao(){
    for(let umItem of arguments){
        console.log(umItem);
    }
}    

outraFuncao(1);
outraFuncao(11);
*/

/*
function minhaFuncao(...valores){
    console.log(valores);
}
minhaFuncao();
minhaFuncao(1);
minhaFuncao(1,2);
*/


/*
function minhaFuncao(val1, val2 = 2, ...valores){
    console.log("val1", val1);
    console.log("val2", val2);
    console.log(valores);
}
minhaFuncao(11,22,33,44);
*/

const lista = ['🐺', '🙈', '🦓', '🐧'];

let a, b, c, d;

[a, b, c, d] = lista;  // DESCONSTRUTOR

console.log(a);
console.log(b);
console.log(c);
console.log(d);

function minhaFunc(a,b,c,d){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
minhaFunc(...lista);  // SPREAD FUNCTION