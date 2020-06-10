$(document).ready(function(){

    
    let i = 0;
    let arreglo = [];
    let aleatorio;

    $("#boton-uno").on( "click", function() {

        $('.contenedor').html("-");

        i = 0;

        while(i < 20){


            aleatorio = (Math.floor(Math.random() * 100)) + 1; 
            
            arreglo.push(aleatorio);


            $('.contenedor').append(aleatorio + "-");
            i++;

            
        $('#boton-dos').prop('disabled', false);
        $('#boton-tres').prop('disabled', false);
        $('#boton-cuatro').prop('disabled', false);
        $('#boton-cinco').prop('disabled', false);


        }
    });

    $("#boton-dos").on( "click", function() {
       
        $('.contenedor').html(" - ");

        i= 0;

        while(i < 20){


            probado = arreglo[i];
            console.log(probado);
            probadoImpar = probado % 2;
            


            if (probadoImpar != 0){

                $('.contenedor').append(probado+ " - ");

            } else{
                $('.contenedor').append("");

            }

        
        i++;

        }


    });

    $("#boton-tres").on( "click", function() {
    
        $('.contenedor').html(" - ");

        i= 0;

        while(i < 20){


            probado = arreglo[i];
            console.log(probado);
            probadoPar = probado % 2;
            


            if (probadoPar == 0){

                $('.contenedor').append(probado+ " - ");

            } else{
                $('.contenedor').append("");

            }

        
        i++;

        }

    });


    $("#boton-cuatro").on( "click", function() {
    
        $('.contenedor').html(" - ");

        i= 0;

        while(i < 20){


            probado = arreglo[i];
            console.log(probado);
            probadoPrimo = probado % 2;
            probadoPrimoDos = probado % 3;
            probadoPrimoTres = probado % 5;
            probadoPrimoCuatro = probado % 7;
            


            if ((probadoPrimo != 0) && (probadoPrimoDos != 0)
                &&(probadoPrimoTres != 0) &&(probadoPrimoCuatro != 0)){

                $('.contenedor').append(probado+ " - ");

            } else{
                $('.contenedor').append("");

            }

        
        i++;

        }

    });

    $("#boton-cinco").on( "click", function() {
    
        $('.contenedor').html(" - ");

        i= 0;

        while(i < 20){
            console.log(arreglo);


            probado = arreglo[i];
            probadoCompuesto = probado + "";
            


            if (probadoCompuesto.length > 1){

                $('.contenedor').append(probado+ " - ");

            } else{
                $('.contenedor').append("");

            }

        
        i++;

        }

    });
    
});