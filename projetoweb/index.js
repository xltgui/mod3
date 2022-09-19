const { NOMEM } = require('dns');
const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const path = require('path');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

app.set('view engine', 'handlebars');

app.engine('handlebars', engine());

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.use('/public', express.static(path.join(__dirname, 'public')))

// lista de objetos
const fakedata = [{
    id: 1,
    nome: 'zezinho',
    endereco: 'rua lalala 100',
    sexo: 'masculino',
    telefone: '5125-1249'


},

{
    id: 2,
    nome: 'mariazinha',
    endereco: 'rua lululu200',
    sexo: 'feminino',
    telefone: '2598-2192'
}
];

app.get("/", function (req, res) {
    //res.send(`EU ACREDITO ${req.query['nome']} ${req.query['sobrenome']}`);
    res.render('index');
});

app.get("/clientes/delete/:id", function(req,res){
    let umCliente = fakedata.find(o => o.id = req.params["id"]);    // procurar na lista do js se ele encontra um objeto com o mesmo ID do ID que eu mandei apagar
    let posicao = fakedata.indexOf(umCliente);
    if(posicao > -1){
        fakedata.splice(posicao, 1); // remove um elemento da lista na posição informada
    }
    res.redirect("/clientes");
});

app.get("/clientes/novo", function(req,res){
    res.render("cliente/formcliente");
});

app.get("/clientes", function(req,res){
    res.render('cliente/cliente', {listaclientes: fakedata});
});

/*app.get("/clientes/excluir/:id", function(req,res){
    let id = req.params['id'];
    let umCliente = fakedata.find(o => o.id == id);
    
    res.render('cliente/clientes', {cliente: umCliente.slice()});
});
*/

app.get("/clientes/alterar/:id", function(req,res){
    let id = req.params['id'];
    let umCliente = fakedata.find(o  => o.id == id);

    res.render('cliente/formcliente',{cliente: umCliente});
});

app.post("/clientes/save", function(req,res){
    //console.log(req.body);
    // Criando um novo objeto javascript com o atributo NOME
    //Math.max()

    if(req.body.nome === ""){
        //res.redirect("/clientes");
        res.render('cliente/formcliente',{cliente: req.body});
        return;
    }

    let clienteAntigo = fakedata.find( o => o.id == req.body.id);
    
    if(clienteAntigo != undefined){
        clienteAntigo.nome = req.body.nome;
        clienteAntigo.endereco = req.body.end;
        clienteAntigo.sexo = req.body.sexo;
        clienteAntigo.telefone = req.body.fone;
    }else{
        
    let maiorid = Math.max(...fakedata.map(o => o.id));
    if(maiorid == -Infinity) maiorid = 0;

    /*
        const fakedata = [ {id: 1, nome: 'ze'}, {id:2 , nome: 'lu' }];

        fakedata.map( o => o.id ) transforma em
        const outralista = [  {id: 1, id:2 }];
        ...fakedata.map( o => o.id ) transforma em
        const listanumeros = [1,2];
    */

    let novoCliente = {
        id: maiorid + 1,
        nome: req.body.nome,
        endereco: req.body.end,
        sexo: req.body.sexo,
        telefone: req.body.fone
    };
    fakedata.push(novoCliente);
}
    res.redirect("/clientes");
});

app.listen(3000, () => {   // callback
    console.log("Servidor online");
    console.log("http://localhost:3000/");

});
