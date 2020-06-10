$(document).ready(function() {
   



    $('#titulo').resizable();
    

    $('#acordeon').accordion();

    
    $('#boton').click(function(){

        
    $( "#dialog" ).dialog("open");
    });

    $( "#dialog" ).dialog({

        title: "La cajita que se abre", 
        autoOpen: false

    }

    );



 
  });



