function recibeDatos() {
    nombre = $("#nombreI").val();
    especie = $("#apellidoI").val();
    raza = $("#edadI").val();
    sexo = $("#estadoCivilI").val();
    color = $("#sexoI").val();
    peso = $("#medioI").val();
    $("#nombreI").val('');
    $("#apellidoI").val('');
    $("#edadI").val('');
    $("#estadoCivilI").val('');
    $("#sexoI").val('');
    $("#medioI").val('');
}

function getNombre() {
    document.getElementById('nombre').innerHTML = nombre;
}

function getApellido() {
      document.getElementById('apellido').innerHTML = apellido;
}

function getEdad() {
    document.getElementById('edad').innerHTML = edad;  
}

function getEstadoCivil() {
      document.getElementById('estadoCivil').innerHTML = estadoCivil;
}

function getSexo() {
      document.getElementById('sexo').innerHTML = sexo; 
}

function getMedio() {
      document.getElementById('medio').innerHTML = medio;
}

function getDatos(){

  getNombre();
  getApellido();
  getEdad();
  getEstadoCivil();
  getSexo();
  getMedio();
}