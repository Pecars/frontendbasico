$(document).ready(function(){


    $("#boton-uno").on( "click", function() {

        alerta = $("#parrafo").html();
        alert(alerta);
    });

    $("#boton-dos").on( "click", function() {

        alerta = $("#parrafo").html();
        alert("<p>" +alerta + "</p>");
    });

    $("#boton-tres").on( "click", function() {

        alerta = $("#contenedor").val();
        alert(alerta);
    });


    $("#boton-cuatro").on( "click", function() {

        alerta = $("#enlace").attr("href");
        alert(alerta);

    });



    
});