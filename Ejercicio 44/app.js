
$(document).ready(function(){


  $("#formulario").validate({
/*
    rules:{
        nombre:{
            required:true,
            nombre: true
        },
        apellido:{
            required:true,
            apellido: true
        },
        email:{
            required:true,
            email: true
        },
        edad:{
            required:true,
            edad: true, 
            minAge:0, 
            maxAge:150, 
        },
        telephone: {
            required: true,
            length: 9,
        },
},
    mesagges:{
        nombre: {
            required:"Se requiere el ingreso de nombre",
            nombre: "ingrese un nombre válido",
        },
        edad:{
            required:"Debes ingresar la edad",
            edad: "La edad debe ser un número", 
            minAge:"La edad mínima es cero", 
            maxAge:"La edad máxima es 150", 
        },
    }
*/

});


    $("#inserta").click(function(){

        var nombre =  $('#nombre').val();
        var apellido =  $('#apellido').val();
        var correo =  $('#correo').val();
        var edad =  $('#edad').val();
        var telefono =  $('#telefono').val();
        //let fila = "<tr><td>"+nombre+"</td><td>"+apellido+"</td><td>"+correo+"</td><td>"+edad+"</td><td> +56 "+telefono+"</td></tr>";
        $("#tabla").append("<tr><td>"+nombre+"</td><td>"+apellido+"</td><td>"+correo+"</td><td>"+edad+"</td><td> +56 "+telefono+"</td></tr>");
        //tabla.append(fila);
        

  });

  //console.log(tabla.child);



  $("#tabla").tableExport({

    headings: true,                    // (Boolean), display table headings (th/td elements) in the <thead>
    footers: true,                     // (Boolean), display table footers (th/td elements) in the <tfoot>
    formats: ["xls", "csv", "txt"],    // (String[]), filetypes for the export
    fileName: "id",                    // (id, String), filename for the downloaded file
    bootstrap: false,                   // (Boolean), style buttons using bootstrap
    position: "bottom"   ,              // (top, bottom), position of the caption element relative to table
    ignoreRows: null,                  // (Number, Number[]), row indices to exclude from the exported file(s)
    ignoreCols: null,                  // (Number, Number[]), column indices to exclude from the exported file(s)
    ignoreCSS: ".tableexport-ignore",  // (selector, selector[]), selector(s) to exclude from the exported file(s)
    emptyCSS: ".tableexport-empty",    // (selector, selector[]), selector(s) to replace cells with an empty string in the exported file(s)
    trimWhitespace: false 
    });


});