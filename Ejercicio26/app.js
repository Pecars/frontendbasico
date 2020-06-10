function iniciaJuego(){

    juegaGato; 


}

let contadorTurno = 0;

function juegaGato(casilla){

    contadorTurno;
    contadorTurno++;

    let ganador = false;

    //ve turno
    if (contadorTurno % 2 == 0){

     //turno X

     document.getElementById('turno').innerHTML = "turno de X";

     // ingresa x botón

     if (document.getElementById(casilla).innerHTML ==  "-"){
       
        document.getElementById(casilla).innerHTML =  "X"; 

        ganador = false;

        casillaUno = document.getElementById('b-1').innerHTML;
        casillaDos = document.getElementById('b-2').innerHTML;
        casillaTres = document.getElementById('b-3').innerHTML;
        casillaCuatro = document.getElementById('b-4').innerHTML;
        casillaCinco = document.getElementById('b-5').innerHTML;
        casillaSeis = document.getElementById('b-6').innerHTML;
        casillaSiete = document.getElementById('b-7').innerHTML;
        casillaOcho = document.getElementById('b-8').innerHTML;
        casillaNueve = document.getElementById('b-9').innerHTML;


                if( (casillaUno == "X" && casillaDos == "X" && casillaTres == "X") // x horizontal
                || (casillaCuatro == "X" && casillaCinco == "X" && casillaSeis == "X")
                || (casillaSiete == "X" && casillaOcho == "X" && casillaNueve == "X")
                || (casillaUno == "O" && casillaDos == "O" && casillaTres == "O") // O horizontal
                || (casillaCuatro == "O" && casillaCinco == "O" && casillaSeis == "O")
                || (casillaSiete == "O" && casillaOcho == "O" && casillaNueve == "O")
                || (casillaUno == "O" && casillaCuatro == "O" && casillaSiete == "O") // O vertical
                || (casillaDos == "O" && casillaCinco == "O" && casillaOcho == "O")
                || (casillaTres == "O" && casillaSeis == "O" && casillaNueve == "O")
                || (casillaUno == "X" && casillaCuatro == "X" && casillaSiete == "X") // X vertical
                || (casillaDos == "X" && casillaCinco == "X" && casillaOcho == "X")
                || (casillaTres == "X" && casillaSeis == "X" && casillaNueve == "X")
                || (casillaUno == "X" && casillaCinco == "X" && casillaNueve == "X") // X diagonal
                || (casillaTres == "X" && casillaCinco == "X" && casillaSiete == "X")
                || (casillaUno == "O" && casillaCinco == "O" && casillaNueve == "O") // O diagonal
                || (casillaTres == "O" && casillaCinco == "O" && casillaSiete == "O")
                ){

                        ganador == true;
                        document.getElementById('gana').innerHTML =  "X ha ganado esta partida"; 
                        document.getElementById('b-1').disabled =  true; 
                        document.getElementById('b-2').disabled =  true; 
                        document.getElementById('b-3').disabled =  true; 
                        document.getElementById('b-4').disabled =  true; 
                        document.getElementById('b-5').disabled =  true; 
                        document.getElementById('b-6').disabled =  true; 
                        document.getElementById('b-7').disabled =  true; 
                        document.getElementById('b-8').disabled =  true; 
                        document.getElementById('b-9').disabled =  true; 
                        alert('Ha ganado el jugador X');



                }
            }else{

                alert('Debe escoger una casilla desocupada');
                contadorTurno--;
            }


    }else{

        if (document.getElementById(casilla).innerHTML ==  "-"){

            document.getElementById('turno').innerHTML = "turno de O";

            document.getElementById(casilla).innerHTML =  "O"; 

            ganador = false;

            casillaUno = document.getElementById('b-1').innerHTML;
            casillaDos = document.getElementById('b-2').innerHTML;
            casillaTres = document.getElementById('b-3').innerHTML;
            casillaCuatro = document.getElementById('b-4').innerHTML;
            casillaCinco = document.getElementById('b-5').innerHTML;
            casillaSeis = document.getElementById('b-6').innerHTML;
            casillaSiete = document.getElementById('b-7').innerHTML;
            casillaOcho = document.getElementById('b-8').innerHTML;
            casillaNueve = document.getElementById('b-9').innerHTML;


                    if( (casillaUno == "X" && casillaDos == "X" && casillaTres == "X") // x horizontal
                    || (casillaCuatro == "X" && casillaCinco == "X" && casillaSeis == "X")
                    || (casillaSiete == "X" && casillaOcho == "X" && casillaNueve == "X")
                    || (casillaUno == "O" && casillaDos == "O" && casillaTres == "O") // O horizontal
                    || (casillaCuatro == "O" && casillaCinco == "O" && casillaSeis == "O")
                    || (casillaSiete == "O" && casillaOcho == "O" && casillaNueve == "O")
                    || (casillaUno == "O" && casillaCuatro == "O" && casillaSiete == "O") // O vertical
                    || (casillaDos == "O" && casillaCinco == "O" && casillaOcho == "O")
                    || (casillaTres == "O" && casillaSeis == "O" && casillaNueve == "O")
                    || (casillaUno == "X" && casillaCuatro == "X" && casillaSiete == "X") // X vertical
                    || (casillaDos == "X" && casillaCinco == "X" && casillaOcho == "X")
                    || (casillaTres == "X" && casillaSeis == "X" && casillaNueve == "X")
                    || (casillaUno == "X" && casillaCinco == "X" && casillaNueve == "X") // X diagonal
                    || (casillaTres == "X" && casillaCinco == "X" && casillaSiete == "X")
                    || (casillaUno == "O" && casillaCinco == "O" && casillaNueve == "O") // O diagonal
                    || (casillaTres == "O" && casillaCinco == "O" && casillaSiete == "O")
                    ){

                            ganador == true;
                            document.getElementById('gana').innerHTML =  "O ha ganado esta partida";
                            document.getElementById('b-1').disabled =  true; 
                            document.getElementById('b-2').disabled =  true; 
                            document.getElementById('b-3').disabled =  true; 
                            document.getElementById('b-4').disabled =  true; 
                            document.getElementById('b-5').disabled =  true; 
                            document.getElementById('b-6').disabled =  true; 
                            document.getElementById('b-7').disabled =  true; 
                            document.getElementById('b-8').disabled =  true; 
                            document.getElementById('b-9').disabled =  true; 
                            alert('Ha ganado el jugador O');

                    }

                }else{

                    alert('Debe escoger una casilla desocupada');
                    contadorTurno--;


                }


    }



    




 }
