document.addEventListener('click', printMousePos, true);
document.addEventListener('mousemove', onmousemove, true);



function printMousePos(event) {

    elementoLista = document.createElement('li');
    let cursorX = event.clientX;
    let cursorY = event.clientY;
    elementoLista.innerHTML = "clientX: " + cursorX +" - clientY: " + cursorY;

    padre = document.getElementById('lista');

    padre.appendChild(elementoLista);


  }
  
  function printMousePos(event) {

    elementoLista = document.createElement('li');
    let cursorX = event.clientX;
    let cursorY = event.clientY;
    elementoLista.innerHTML = "clientX: " + cursorX +" - clientY: " + cursorY;

    padre = document.getElementById('lista');

    padre.appendChild(elementoLista);


  }

  window.onmousemove = function (){
    var x = window.event.clientX;
    var y = window.event.clientY;

    enVivo = " coordenada X: " + x + " - coordenada Y: "+ y + ".";
    
    document.getElementById('movimiento-child').innerHTML = enVivo;




}

