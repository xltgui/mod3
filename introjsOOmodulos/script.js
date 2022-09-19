let pessoa = {
    nome: "Zezinho",
    idade: 22,
    reservista: true,
    cidade: {
        nome: "Joinville",
        estado: "Santa Catarina"
    },

    telefones: [
        "51251-12512", "4810-8972", "4812-789251897", "71789-2781"
    ],

    geraTelefones: function () {
        let todosTel = "";
        for(let umTelefone of this.telefones){
            todosTel += "\nTelefone: " + umTelefone + " ";
        }
        return `${"Cidade: " + this.cidade.nome}  ${todosTel}`;
        
    },

    somaIdade: function(valorAdicional){
        return this.idade + valorAdicional;
    },
    get nomeCompleto(){
        return this.nome;
    },
    set nomeCompleto(nome){
        this.nome = nome;
    }
};

console.log(pessoa.nomeCompleto);
console.log(pessoa.geraTelefones());
console.log(pessoa.somaIdade(20));
console.log(pessoa.geraTelefones);

console.log(typeof (pessoa));
console.log(pessoa);

console.log(pessoa.nome);
console.log(pessoa['nome']);

pessoa.nome = "Zezinho da Silva"
console.log(pessoa.nome)

pessoa['nome'] = "Zezinho da Silva Sauro";
console.log(pessoa['nome']);


pessoa.endereco = "Rua lalala 100";
console.log(pessoa);

console.log(JSON.stringify(pessoa));



let objTexto = '{"nome":"mariazinha"}';

let objjs = JSON.parse(objTexto);
console.log(objjs);