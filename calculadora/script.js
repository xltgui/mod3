function minhaFuncao(umnumero) {
    console.log(umnumero);
    console.log("fuiclicado");
    let resultado = document.getElementById("caixinha");
    let x = resultado.value += umnumero;

}

function deletar(){
    let caixinha = document.getElementById("caixinha").value;

    let y = caixinha.substring(1);
}

function apagar() {
    let x = document.getElementById("caixinha").value = "";
    

}

function calcular() {
    let caixinha = document.getElementById("caixinha");
    
    let res = eval(caixinha.value)

    caixinha.value = res;
}