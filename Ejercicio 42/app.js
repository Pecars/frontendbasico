
$(document).ready(function(){

    $( "#draggable" ).draggable();
  
    $( "#tabs" ).tabs();


    var nota = $( "#nota" ).selectmenu();

    nota = $( "#nota" ).selectmenu( {
        select: function(event, ui) {
            nota = $(this).val();
    }});

  $( "#enviar" ).click(function() {
    alert("Has calificado con un " + nota + " esta historia.");  

    });

});