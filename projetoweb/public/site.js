/* esse código roda no navegador do cliente */
(function(){
    $("#clientes").on("click",".js-delete", function(){

        let botaoClicado = $(this); // $(this)  retorna a referencia do botao

        $("#btnsim").attr("data-id", botaoClicado.attr("data-id"));
        $("#meumodal").modal("show");
    });
    $("#btnnao").on("click", function(){
        $("#meumodal").modal("hide");
    });
    $("#btnsim").on("click", function(){
        let botaoSim = $(this);
        let id = botaoSim.attr("data-id");
        $.ajax({
            url: "/clientes/delete/" + id,
            method: "GET",
            success: function(){
                window.location.href="/clientes";  
            }
        });
    });
})();