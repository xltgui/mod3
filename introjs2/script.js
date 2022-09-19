// VARIAVEL GLOBAL
// mensagem = "UNIVILLE"

void function(){
    console.log(mensagem)
}();

var mensagem = "UNIVILLE";

// let declara variavel escopo de bloco
/*var exibeMensagem = function(){
    if(true){
        var escopoFuncao = 'Caelum';
        let escopoBloco = 'Alura'

        //console.log(escopoFuncao);
        //console.log(escopoBloco)
    }
    console.log(escopoFuncao);
    console.log(escopoBloco);
} 

exibeMensagem();
console.log(exibeMensagem.name); */

void function(){
    // let teste = 1234;
    // não pode --> let teste = "lalala";
    
    const mensagem = "Alura";
    console.log(mensagem);
    mensagem = "Caelum";
}


(function(){
    let frutas = ['laranja', 'banana', 'uva'];
    console.log(frutas);
    for(let umaFruta in frutas){
        console.log(`${umaFruta} - ${frutas[umaFruta]}`);
        console.log(umaFruta + " - " + frutas[umaFruta]);
    }

}());