
let contador = 1;

function izquierda(){

    if (contador == 1){

        contador = 6;
    }  
    contador--;

    foto = document.getElementById('halcon');
    foto.src = "felipe_" + contador + ".jpg";


}

function derecha(){

    if (contador == 5){

        contador = 0;
    }  
    contador++;

    foto = document.getElementById('halcon');
    foto.src = "felipe_" + contador + ".jpg";
}

function azar(){

    contador = Math.floor(Math.random() * 5) + 1;

    console.log(contador);


    foto = document.getElementById('halcon');
    foto.src = "felipe_" + contador + ".jpg";



}