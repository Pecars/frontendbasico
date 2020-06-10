function convertir(){

    let pesos = 0;
    let dineroConvertido = 0;

    dolar = document.getElementById('dolar').checked;
    euro = document.getElementById('euro').checked;
    yen = document.getElementById('yen').checked;
    libra = document.getElementById('libra').checked;
    yuan = document.getElementById('yuan').checked;

    pesos =  document.getElementById('dinero-ingresado').value;

    caja =  document.getElementById('contenedor-error');

    console.log(pesos);

    let entero;

    if (pesos % 1 === 0){

        entero = true;

    }


    if (entero == true){

   
        if( (dolar == true && euro != true && yen != true && libra != true && yuan != true) 
            || (dolar != true && euro == true && yen != true && libra != true && yuan != true)
            || (dolar != true && euro != true && yen == true && libra != true && yuan != true)
            || (dolar != true && euro != true && yen != true && libra == true && yuan != true)
            || (dolar != true && euro != true && yen != true && libra != true && yuan == true)){



                if (dolar == true){

                    aDolar(pesos);
                    document.getElementById('output').innerHTML = dineroConvertido;
                    console.log('reconce dolar')

                }else if (euro == true){

                    aEuro(pesos);
                    document.getElementById('output').innerHTML = dineroConvertido;
                    console.log('reconce euro')


                }else if (yen == true){

                    aYen(pesos);
                    document.getElementById('output').innerHTML = dineroConvertido;
                    console.log('reconce yen')


                }else if (libra == true){

                    aLibra(pesos);
                    document.getElementById('output').innerHTML = dineroConvertido;
                    console.log('reconce libra')


                }else if (yuan == true){

                    aYuan(pesos);
                    document.getElementById('output').innerHTML = dineroConvertido;
                    console.log('reconce yuan')


                }else{

                alert('debe escoger una divisa o ingresar monto a convertir')

                }

                function aDolar(pesos){

                    dineroConvertido = 763.8 / pesos;
                    cambiaColores(caja)
                
                }
                
                function aEuro(pesos){
                
                    dineroConvertido = 862.42 / pesos;
                    cambiaColores(caja)
                
                }
                
                function aYen(pesos){
                
                    dineroConvertido = 6.96 / pesos;
                    cambiaColores(caja)
                
                }
                
                function aLibra(pesos){
                    
                    dineroConvertido = 970.40 / pesos;
                    cambiaColores(caja)
                
                }
                
                function aYuan(pesos){
                    
                    dineroConvertido = 107.91 / pesos;
                    cambiaColores(caja)
                
                }

                function cambiaColores(caja){

                    caja.style.background = '#7DCEA0';
                    caja.style.color = '#1E8449';
                    caja.innerHTML = "Se ha convertido su monto correctamente";
                }



        }else{

            alert('Debe seleccionar sólo una divisa');
            document.getElementById('dolar').checked= false;
            document.getElementById('euro').checked = false;
            document.getElementById('yen').checked = false;
            document.getElementById('libra').checked = false;
            document.getElementById('yuan').checked = false;

            caja.style.background = '#F1948A';
            caja.style.color = '#C0392B';
            caja.innerHTML = "error";

        }


    }else {

    alert('debe ingresar un número entero en convertir');
    document.getElementById('dinero-ingresado').value = 0;
    document.getElementById('dolar').checked= false;
    document.getElementById('euro').checked = false;
    document.getElementById('yen').checked = false;
    document.getElementById('libra').checked = false;
    document.getElementById('yuan').checked = false;
    caja.style.background = '#F1948A';
    caja.style.color = '#C0392B';
    caja.innerHTML = "error";



    }

}
