$(document).ready( function () { 
     $('#fecha-uno').datepicker();
     $('#fecha-dos').datepicker();

    $("#boton").on( "click", function() {
     
        console.log('funciona');
        let fechaUno = $("#fecha-uno").val();
        console.log(fechaUno);
        let fechaDos = $("#fecha-dos").val();
        console.log(fechaDos);
        let finAnio =  new Date(2020, 12, 31);


        
        if(fechaUno > fechaDos){

            diasDeUno = (Date.parse(finAnio) - Date.parse(fechaUno)) / 86400000;
            var diferencia = Math.abs(Date.parse(fechaUno) - Date.parse(fechaDos))/86400000;

            $(".contenedor-2").text("La Fecha 1 es mayor que Fecha 2. Faltan " + diasDeUno + " para el final del presente año desde la Fecha 1. Hay " + diferencia + " días de diferencia entre ambas fechas");


        }else if(fechaUno < fechaDos){

            diasDeDos = (Date.parse(finAnio) - Date.parse(fechaUno)) / 86400000;
            var diferencia = Math.abs(Date.parse(fechaUno) - Date.parse(fechaDos))/86400000;

            $(".contenedor-2").text("La Fecha 2 es mayor que Fecha 1. Faltan " + diasDeDos + " para el final del presente año desde la fecha 2. Hay " + diferencia + " días de diferencia entre ambas fechas");


        }else{

            diasDeDos = (Date.parse(finAnio) - Date.parse(fechaUno)) / 86400000;
            $(".contenedor").text("Las fechas son iguales");
            $(".contenedor-2").text("Faltan " + diasDeDos + " para el final del presente año.");


        }

    });

} );

