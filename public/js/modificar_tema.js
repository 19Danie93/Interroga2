$(document).ready(function(){

    $("button").on('click',
    function(evt){
        var idtema=this.value;
        if(idtema!='excluir'){
            var tema=$("#"+idtema+"").text();
            var res=prompt("Modificar Tema",tema);
            if (res!=null) {
                $.post("/administrador/modificar_tema",{idtema:idtema,nombretema:res},function(result) {
                    if(result.resultado){
                        evt.preventDefault();
                        location.reload();
                    }else{
                        alert("Existe un tema con el mismo nombre");
                    }
                });
            };
        };
    });
});
