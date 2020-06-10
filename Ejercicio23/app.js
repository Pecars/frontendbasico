function ingresaElemento(){

// Valida ingreso a caja de texto

   let texto = document.getElementById('texto-ingresado').value;

   if (texto == ""){

      alert('Error, no ha ingresado texto');


   }else{

      // ejecuta función

      let ingresaUno;
      let ingresaDos;
      let listaPadreUno;
      let listaPadreDos

      ingresaUno = document.getElementById('lista-uno').checked;
      ingresaDos = document.getElementById('lista-dos').checked;
      listaPadreUno = document.getElementById('lista-padre-uno');
      listaPadreDos = document.getElementById('lista-padre-dos');

      let elementoLista;

         //ingresa elemento de lista 1
         if( ingresaUno == true && ingresaDos != true){

            elementoLista = document.createElement('li');
            elementoLista.innerHTML = texto;
            document.getElementById('lista-uno').checked = false;

            listaPadreUno.appendChild(elementoLista);

         } else if (ingresaDos == true && ingresaUno != true){

            elementoLista = document.createElement('li');
            elementoLista.innerHTML = texto;
            document.getElementById('lista-dos').checked = false;

            listaPadreDos.appendChild(elementoLista);


         }else if (ingresaDos == true && ingresaUno == true){

               alert('Debe escoger una sola lista para añadir elemento');


         }else if (ingresaDos != true && ingresaUno != true){

            alert('Debe marcar una de las listas para ingresar elemento');


         }
   


   }


    
}
