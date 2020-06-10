
$(document).ready(function(){

    $("#formulario").validate({

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


    });

 });
