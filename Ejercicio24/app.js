// máximo tres ocasiones para contestar

let contador =0;

function enviaRespuestas(){


    if( contador <= 3){


        preguntaUno = document.getElementById('correcta-1');
        preguntaDos = document.getElementById('correcta-2');
        preguntaTres = document.getElementById('correcta-3');
        preguntaCuatro = document.getElementById('correcta-4');
        preguntaCinco = document.getElementById('correcta-5');


        altUno = document.getElementById('a-1');
        altTres = document.getElementById('a-3');
        altCuatro = document.getElementById('a-4');
        altCinco = document.getElementById('a-5');
        altSiete = document.getElementById('a-7');
        altNueve = document.getElementById('a-9');
        altOnce = document.getElementById('a-11');
        altDoce = document.getElementById('a-12');
        altTrece = document.getElementById('a-13');
        altQuince = document.getElementById('a-15');


        //valida que existan respuestas

        if ( (altUno.checked==true || altTres.checked==true || preguntaUno.checked ==true)
            && (altCuatro.checked==true || altCinco.checked==true || preguntaDos.checked ==true) 
            && (altSiete.checked==true || altNueve.checked==true || preguntaTres.checked ==true)
            && (altOnce.checked==true || altDoce.checked==true || preguntaCuatro.checked ==true)
            && (altTrece.checked==true || altQuince.checked==true || preguntaCinco.checked ==true)){


                let puntaje = 0;
                
                if (preguntaUno.checked ==true){
                    puntaje++;

                }

                if (preguntaDos.checked ==true){
                    puntaje++;
                }

                if (preguntaTres.checked ==true){
                    puntaje++;
                }

                if (preguntaCuatro.checked ==true){
                    puntaje++;
                }

                if (preguntaCinco.checked ==true){
                    puntaje++;
                }


                if (puntaje == 5){
                    document.getElementById('boton').disabled = true;
                    alert('has respondido correctamente todas las preguntas, tu puntaje fue de ' + puntaje + ' puntos.');
                } else{

                        if (puntaje == 1){

                        alert('No has respondido todo correctamente, obtuviste ' + puntaje + ' punto.');

                        }else{
                        
                            alert('No has respondido todo correctamente, obtuviste ' + puntaje + ' puntos.');

                        }

                }

                contador ++;
                console.log(contador);

                if (contador > 2){

                    document.getElementById('boton').disabled = true;
                    alert('Has agotado tus intentos disponibles');
                }
                
        } else {

            alert('Debe contestar todas las preguntas');


        }  
    

    }
}