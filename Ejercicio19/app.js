
let numeroArmado = "";

let numeroGuardado="";

function reset(){
    numeroArmado="";
    numeroGuardado="";
    document.getElementById("pantalla").innerHTML = "0";
}


function numero(numeroIngresado){

    numeroArmado = numeroArmado + numeroIngresado;
    document.getElementById("pantalla").innerHTML = numeroArmado;

}

function sumar(){   
    numeroGuardado = numeroArmado;
    
    suma = true;
    numeroArmado= "";
    document.getElementById("pantalla").innerHTML = ""; 

}

function restar(){   
    numeroGuardado = numeroArmado;
    
    resta = true;
    numeroArmado= "";
    document.getElementById("pantalla").innerHTML = ""; 

}

function multiplicar(){   
    numeroGuardado = numeroArmado;
    
    multiplicacion = true;
    numeroArmado= "";
    document.getElementById("pantalla").innerHTML = ""; 

}

function dividir(){   
    numeroGuardado = numeroArmado;
    
    division = true;
    numeroArmado= "";
    document.getElementById("pantalla").innerHTML = ""; 

}


function igualar(){

    if (suma==true){

        numeroArmado = parseFloat(numeroArmado);
        numeroGuardado = parseFloat(numeroGuardado);

        numeroArmado= numeroGuardado + numeroArmado;
        numeroGuardado="";
        document.getElementById("pantalla").innerHTML = numeroArmado;
        suma = false;

    } else if (resta==true){

        numeroArmado = parseFloat(numeroArmado);
        numeroGuardado = parseFloat(numeroGuardado);

        numeroArmado= numeroGuardado - numeroArmado;
        numeroGuardado="";

        document.getElementById("pantalla").innerHTML = numeroArmado;
        resta = false;

    } else if (multiplicacion==true){

        numeroArmado = parseFloat(numeroArmado);
        numeroGuardado = parseFloat(numeroGuardado);

        numeroArmado= numeroGuardado * numeroArmado;
        numeroGuardado="";

        document.getElementById("pantalla").innerHTML = numeroArmado;
        multiplicacion = false;


    }  else if (division==true){

        numeroArmado = parseFloat(numeroArmado);
        numeroGuardado = parseFloat(numeroGuardado);

        numeroArmado= numeroGuardado / numeroArmado;
        numeroGuardado="";

        document.getElementById("pantalla").innerHTML = numeroArmado;
        division = false;

    }


 
    

}







