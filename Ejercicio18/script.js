function suma(){



let nu = document.getElementById('numero').value;


let suma = 0;
let i=0;

    while(i < nu){
    i++;
    suma = suma + i;
    

    }


    const resultado = document.getElementById('resultado');

    resultado.innerHTML = 'El resultado es: ' + suma;

    if(suma == 0){

        alert('Debe ingresar un número');
    }


}