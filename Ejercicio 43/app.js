
$(document).ready(function(){



   let barras =  document.getElementById('barras').getContext('2d');

   let lineas =  document.getElementById('lineas').getContext('2d');

   let torta =  document.getElementById('torta').getContext('2d');

   let colores = ['#13731C','#157F1F','#4CB963','#76D2A1','#A0EADE','#7EA9B1','#5C6784','#3D4760','#1D263B', 
                '#323A4D','#319C41','#8BDEC0','#8FCAC8','#6D889B','#2D374E', '#454C5D'];


   let precipitaciones = new Chart(barras,{

    type:'bar',
    data:{

        labels:['Arica', 'Iquique', 'Calama', 'Antofagasta', 'Caldera', 'La Serena', 'Valparaíso', 'Rodelillo',
        'Pudahuel', 'Santiago', 'Tobalaba', 'Juan Fernández', 'Curicó', 'Chillán', 'Concepción', 'Temuco', 
        'Valdivia', 'Osorno', 'Puerto Montt', 'Coyhaique', 'Balmaceda', 'Punta Arenas'],
        datasets:[{
            label:'Precipitación (mm)',
            data:[ 6.2, 4.4, 18.6, 0.4, 0.8, 12.2, 83.2, 117.4, 47.2, 82, 99.4, 679.7, 162.4, 626.8, 715.6, 787.5,
                1052.9, 833.8, 1073.2, 732.6, 'S/I', 311.4
            ],
            borderColor: '#03166E',
            backgroundColor: '#03166E',
        }],

 
    },
    options:{
        title:{
            display: true, 
            text: "Precipitaciones Chile, Año 2019",
            fontSize:  30, 
            padding: 30,
            fontColor: '#03166E',
        }

    }
   })


   let historico = new Chart(lineas, {
    type: 'line',
    data: {
        labels:['Arica', 'Iquique', 'Calama', 'Antofagasta', 'Caldera', 'La Serena', 'Valparaíso', 'Rodelillo',
        'Pudahuel', 'Santiago', 'Tobalaba', 'Juan Fernández', 'Curicó', 'Chillán', 'Concepción', 'Temuco', 
        'Valdivia', 'Osorno', 'Puerto Montt', 'Coyhaique', 'Balmaceda', 'Punta Arenas'],
        datasets: [{
            label: 'Precipitaciones a la fecha (mm)',
            data: [6.2, 4.4, 18.6, 0.4, 0.8, 12.2, 83.2, 117.4, 47.2, 82, 99.4, 679.7, 162.4, 626.8, 715.6, 787.5,
                1052.9, 833.8, 1073.2, 732.6, 'S/I', 311.4],
            
            borderColor: '#03166E',
            backgroundColor: '#03166E',
                
        }, {
            label: 'Precipitación normal histórica (mm)',
            data: [1.6, 0.9, 5.9, 2.4, 'S/I', 86.5, 412.2, 'S/I', 275.8, 340.6, 365, 1028.7, 654.2, 1046.4, 1072.6,
            1117.5, 1705.8, 1203.8, 1539.9, 942.2, 515.5, 383.1],
            borderColor: '#586A6A',
            backgroundColor: '#586A6A',
        }],
            
    },
    options:{
        title:{
            display: true, 
            text: "Precipitaciones Chile Histórica vs 2019",
            fontSize:  30, 
            padding: 30,
            fontColor: '#034E50',
        }

    }
    
});


let region = new Chart(torta, {
    type: 'pie',
    data: {
        labels:['Arica y Parinacota', 'Tarapacá', 'Antofagasta', 'Atacama', 'Coquimbo', 'Valparaíso',
        'Metropolitana', 'Libertador Bernardo O\'Higgins','Maule', 'Ñuble', 'Bío-Bío', 'Araucanía', 
        'Los Ríos', 'Los Lagos', 'Aysén', 'Magallanes'],
        datasets: [{
            label: 'Estaciones por Región',
            data: [1, 1, 2, 1, 1, 3, 3, 0, 1, 1, 1, 1, 1, 2, 2, 1],
            backgroundColor: colores,
        }],

      
    },
    options:{
        title:{
            display: true, 
            text: "Estaciones Meteorológicas por Región",
            fontSize:  30, 
            padding: 30,
            fontColor: '#034E50',
        }

    }
    
});
  
});