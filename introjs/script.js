//alert("ola mundo");

console.log("mensagem bonita");


document.getElementById('titulo').innerHTML = "bla bla bla";

/* let resposta = confirm("Você mora em joinville?");

alert("seu nome é" + resposta); */


/* let outraresposta = prompt("Digite seu nome: ");
alert("Seu nome é: " +  outraresposta); */


//Escrever no HTML através do JS
document.write("testando");

//Escrever no CSS através do JS
const style = document.createElement('style');
style.textContent = 'body { background-color : green }';
document.head.append(style);
