$(document).ready(function(){


    $("#parrafo-uno").on( "click", function() {
        $('#parrafo-uno').hide(); 
    });

    $("#parrafo-dos").on( "click", function() {
        $('#parrafo-dos').hide(); 
    });

    $(".boton").on( "click", function() {
        $('#parrafo-uno').show(); //oculto mediante id
        $('#parrafo-dos').show(); //muestro mediante clase
    });


    
});