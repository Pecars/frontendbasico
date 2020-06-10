

function mostrarFecha(){


        let fecha = new Date();

        console.log(fecha);

        let dia = fecha.getDay();

        console.log(dia);

        let diaSemana = ['Domingo','Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

        dia = diaSemana[dia];
        console.log(dia);


        let minutos = fecha.getMinutes();
        console.log(minutos);


        let mes = fecha.getMonth();
        console.log(mes);

        let nombreMes = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        mes = nombreMes[mes];
        console.log(mes);


        let diaMes = fecha.getDate();
        console.log(diaMes);

        let anio = fecha.getFullYear();
        console.log(anio);


        let hora = fecha.getHours();
        console.log(hora);


        let segundos = fecha.getSeconds();
        console.log(segundos);

        

        document.getElementById('mostrarFecha').innerHTML =  "Hoy es " + dia + " " + diaMes + " de " + mes + " de " + anio + " y son las " + hora +" horas, " + minutos + " minutos con " + segundos + " segundos.";

     



        let diasRestantes = 0;
        let minutosRestantes;
        let segundosRestantes;


            let mesesArray = [31, 28, 31, 30, 31, 30 , 31, 31, 30, 31, 30, 31]
            let i = fecha.getMonth();

            do {
                diasRestantes = diasRestantes + mesesArray[i];
                i++;
              } while (i < 12);


              diasRestantes = diasRestantes - diaMes;

                
            document.getElementById('dias').innerHTML = "En dias: " + diasRestantes;     
        

        
            minutosRestantes = ((24 * 60  * diasRestantes) + (24 - hora) * 60) - minutos;
            console.log(minutosRestantes);


        
            document.getElementById('minutos').innerHTML = "En minutos: " + minutosRestantes;
        
        
        
        
        
            segundosRestantes =  (minutosRestantes * 60) + (60 - segundos);
            console.log(segundosRestantes);
        
            document.getElementById('segundos').innerHTML = "En segundos: " + segundosRestantes;
        
        
        
        



}


