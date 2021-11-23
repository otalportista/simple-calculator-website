// Tabs com span quando clica
$(".buttons span").click(function(){
        //  id do botão clicado
        var id = $(this).attr("id");
        // o ficheiro começa vazio
        var file = "";
        // obtem do id da class "visible"
        var idd = document.getElementsByClassName('visible')[0].id;

        // apaga o div com a class "visible"
        $(".content > div#" + idd).empty();
        // remove a class "visible" do div atual
        $(".content > div#" + idd).removeClass("visible");
        // remove a class do botão atual
        $(".menu .buttons > span#" + idd).removeClass("active-btn");
        // adiciona a class "visible" no div pretendio
        $(".content > div#" + id).addClass("visible");
        // verifica se não for o 1
        if ( id != 'menu-1'){
                $(".menu .buttons > span#" + id).addClass("active-btn");
        }
        
        // Verifica qual id é
        if(id == 'menu-1'){
                file = "pages/calculator.html";
        }else if(id == 'menu-2'){
                file = "pages/temp.html";
        }else if(id == 'menu-3'){
                file = "pages/imc.html";
        }else{
                file = "pages/currency.html";
        }
        
        // Adiciona o conteudo ao div pretendio
        $(".content > div#" + id).load("" + file +"");
        
});


// Roda o script assim que dá load da página
if (window.addEventListener) { // Mozilla, Netscape, Firefox
        window.addEventListener('load', WindowLoad);
} else if (window.attachEvent) { // IE
        window.attachEvent('onload', WindowLoad);
}
    
// Função para adicionar o conteúdo assim que der load da página
function WindowLoad(event) {
        $(".content > div#menu-1").addClass("visible");
        $(".content > div#menu-1").load("pages/calculator.html");
}