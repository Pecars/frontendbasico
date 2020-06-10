let contador = 0;

function cambiaColor(id){
 
     id = id.replace("c", "");
    

    celdaSuperior = id - 4;
        console.log(celdaSuperior);
    celdaInferior = parseInt(id) + 6;
        console.log(celdaInferior);
   
   
        document.getElementById('c' + celdaSuperior).className = 'habilitado';
        document.getElementById('c' + celdaInferior).className = 'habilitado';
   


    if(document.getElementById('c' + id).style.background=='rgb(41, 14, 66)'){
        
        alert('Ya escogiste esta celda');

    }else{
   
       if (document.getElementById('c' + id).className == 'habilitado'){
   
           document.getElementById('c' + id).style.background='rgb(41, 14, 66)';

           contador++;

           if(id == 14 || id == 4){

            alert('Terminó el juego. Total de pasos: ' + contador + '.');
            

           }
   
   
       }else{
   
           alert('Debes escoger una celda contigua, superior o inferior')
       }

    }

}

