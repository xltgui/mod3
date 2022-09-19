//closure
(function (){
    let inserir = document.getElementById("btninserir");
    let txtproduto = document.getElementById("txtproduto");
    let guardar = document.getElementById("btnteste");
    let quantidade = document.getElementById("txtqtd");
    let itens = document.getElementById("itens");

    

    

    
    let lista = [];

    inserir.onclick = click_inserir
    txtproduto.onkeydown = tecla_enter;
    

    guardar.onclick = printarSave;


    function tecla_enter(key){
        if(key.key === 'Enter'){
            adicionar(txtproduto.value, txtqtd.value);
            gravar();
        }
    }
    
    function click_inserir(){
        adicionar(txtproduto.value, txtqtd.value);
        gravar();
    }

    function adicionar(produto, qtd){
        //lista.push(produto);
        lista.push({
            nome: produto,
            qtd: qtd
        });
        atualiza_itens();
        document.getElementById("txtproduto").value = "";
    }

    function corpo(){
        let body = document.getElementById('corpo')
        body.onload = printarSave;
    }

    function atualiza_itens(){
        itens.innerHTML = "";
        for(let i in lista){
            let umItem = lista[i];

            let botao = document.createElement("button", id="excluir")
            botao.appendChild(document.createTextNode("X"))
            botao.setAttribute("data-id", i);
            botao.onclick = exlcuir;
                                                   
            let li = document.createElement("li");
            let textobonito = `Prod: ${umItem.nome} - QTD: ${umItem.qtd}`
    
    
            //li.appendChild(document.createTextNode(umItem.nome));
            li.appendChild(document.createTextNode(textobonito))
            itens.appendChild(li);
            li.appendChild(botao);
            gravar();
            corpo();
        }
    }
    
    function exlcuir(e){
        let posicao = e.target.getAttribute("data-id");
        lista.splice(posicao, 1)
        atualiza_itens();
    }

    function printarSave(){
        let restaurar = JSON.parse(localStorage.getItem('lista'));
        console.log(restaurar);
        lista = restaurar;
    }
    function gravar(){
    localStorage.setItem('lista', JSON.stringify(lista))
    }

}());
