function procesaPalabra(){

    let frase = document.getElementById('frase').value;
    let fraseInvertida="";

    var i = frase.length;

        while (i>=0) {
        fraseInvertida = fraseInvertida + frase.charAt(i);
        i--;
        }

    frase = frase.split(" ");

    document.getElementById('primera-palabra').innerHTML= "Primera palabra: " + frase[0];
    document.getElementById('ultima-palabra').innerHTML= "Última palabra: " + frase[(frase.length)-1];
    document.getElementById('cantidad-palabras').innerHTML= "Cantidad de palabras: " + frase.length;
    document.getElementById('orden-inverso').innerHTML= "Texto con palabras en orden inverso: " + frase.reverse().join(' ');
    document.getElementById('inverso-sin-espacio').innerHTML= "Texto completo invertido descartando espacios: " + fraseInvertida.split(' ').join("");
    document.getElementById('cantidad-letras').innerHTML= "Cantidad de letras: " + fraseInvertida.split(' ').join("").length;


}