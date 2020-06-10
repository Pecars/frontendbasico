
$(document).ready(function(){


    $("#inserta").click(function(){

        let nombre =  $('#nombre').val();
        console.log(nombre);
        let apellido =  $('#apellido').val();
        console.log(apellido);
        let correo =  $('#correo').val();
        let edad =  $('#edad').val();
        let telefono =  $('#telefono').val();
        let tabla =  $('#tabla');
        let fila = "<tr><td>"+nombre+"</td><td>"+apellido+"</td><td>"+correo+"</td><td>"+edad+"</td><td> +56 "+telefono+"</td></tr>";

        tabla.append(fila);


  });

//var table = TableExport(document.getElementById("export-buttons-table"));


});