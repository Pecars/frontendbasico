function validaFormulario(){

    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var fecha = document.getElementById('fecha');
    var telefono = document.getElementById('telefono');
    var educacion = document.getElementById('educacion');
    var direccion =  document.getElementById('direccion');
    var ciudad =  document.getElementById('ciudad');
    var region =  document.getElementById('region');


    if(nombre.checkValidity() == true && apellido.checkValidity() == true && fecha.checkValidity() == true
        && telefono.checkValidity()== true && educacion.checkValidity() == true && direccion.checkValidity() == true
        && ciudad.checkValidity() == true && region.checkValidity() == true){

            let fechaActual = new Date();
            let mesActual = fechaActual.getMonth() + 1;
            let diaActual = fechaActual.getDate();
            let anioActual = fechaActual.getFullYear();

            let fechaNacimiento = new Date(fecha.value);
            console.log(fechaNacimiento);
            let diaNacimiento = fechaNacimiento.getDate();
            diaNacimiento = parseInt(diaNacimiento)+1;
            let mesNacimiento = fechaNacimiento.getMonth() + 1;
            let anioNacimiento = fechaNacimiento.getFullYear();


            if(mesActual < mesNacimiento){

                aniosCumplidos = anioActual - anioNacimiento - 1;

                if(diaActual >= diaNacimiento){

                    mesesCumplidos = 12 - mesNacimiento + mesActual;

                } else if(diaActual < diaNacimiento){

                    mesesCumplidos = 12 - mesNacimiento + mesNacimiento - 1;
                }
                


            } else if (mesActual > mesNacimiento){

                 aniosCumplidos =  anioActual - anioNacimiento;

                if(diaActual >= diaNacimiento){

                    mesesCumplidos = mesActual -mesNacimiento;

                }else if( diaActual < diaNacimiento){

                    mesesCumplidos = mesActual -mesNacimiento -1;

                }


            } else if (mesActual == mesNacimiento){

                if(diaActual < diaNacimiento){

                    aniosCumplidos =  anioActual - anioNacimiento -1;

                }else if(diaNacimiento >= diaActual){

                    aniosCumplidos = anioActual - anioNacimiento;
                }

            }

            if( diaActual >= diaNacimiento){

                diasCumplidos = diaActual - diaNacimiento;

            }else if(diaActual < diaNacimiento){

                if(mesNacimiento == 1){
                    
                    diasCumplidos = 31 - diaNacimiento + diaActual;

                } else if( mesNacimiento != 1){

                    let mesesArray = [31, 28, 31, 30, 31, 30 , 31, 31, 30, 31, 30, 31];
                    let auxiliar = 0;
                    auxiliar = fechaNacimiento.getMonth()-1;
                    diaMesAnterior = mesesArray[auxiliar];
                    diasCumplidos = diaMesAnterior - diaNacimiento + diaActual;

                }

            }

            


            alert('Hola ' + nombre.value + ' ' + apellido.value + ', tu edad es de '+ 
            aniosCumplidos + ' años, con ' + mesesCumplidos + ' meses y ' +
            diasCumplidos + ' días.');


    }else{
        alert('Los datos ingresados no son válidos');
    
    }


    if(nombre.checkValidity() != true){
        alert('El nombre contiene errores');
    }

    if(apellido.checkValidity() != true){
        alert('El apellido contiene errores');
    } 

    if(fecha.checkValidity() != true){
        alert('La fecha contiene errores');
    } 

    if(telefono.checkValidity() != true){
        alert('El teléfono contiene errores');
    } 

    if(educacion.checkValidity() != true){
        alert('Campo educación contiene errores');
    } 

    if(direccion.checkValidity() != true){
        alert('La dirección contiene errores');
    } 

    if(ciudad.checkValidity() != true){
        alert('Campo ciudad contiene errores');
    } 

    if(region.checkValidity() != true){
        alert('Campo región contiene errores');
    } 

}
