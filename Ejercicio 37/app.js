$(document).ready( function () {
   
    $('canvas').drawRect({
        layer: true,
        draggable: true,
        fillStyle: '#354',
        bringToFront: true,
        x: 200, y: 100,
        width: 200,
        height: 200,

        

        mouseout: function(layer) {

            layer.fillStyle = '#354';

        },

        mouseover: function(layer) {
           
                var r = Math.floor(Math.random() * 255) + 1; 
                var g = Math.floor(Math.random() * 255) + 1; 
                var b = Math.floor(Math.random() * 255) + 1;           
            
            color = 'rgb(' + r + ',' + g + ',' + b +')';
            console.log(color);
            layer.fillStyle = color;
        },

      });

      $('canvas').drawPolygon({
        layer: true,
        draggable: true,
        fillStyle: '#589',
        bringToFront: true,
        x: 500, y: 100,
        radius: 50,
        sides: 3,
        rotate: 25,

        
        

        mouseout: function(layer) {

            layer.fillStyle = '#589';

        },

        mouseover: function(layer) {
           
                var r = Math.floor(Math.random() * 255) + 1; 
                var g = Math.floor(Math.random() * 255) + 1; 
                var b = Math.floor(Math.random() * 255) + 1;           
            
            color = 'rgb(' + r + ',' + g + ',' + b +')';
            console.log(color);
            layer.fillStyle = color;
        },


        
      });

      $('canvas').drawEllipse({
        fillStyle: '#c33',
        bringToFront: true,
        x: 150, y: 250,
        width: 200, height: 200,
        layer: true,
        draggable: true,

        
        

        mouseout: function(layer) {

            layer.fillStyle = '#c33';

        },

        mouseover: function(layer) {
           
                var r = Math.floor(Math.random() * 255) + 1; 
                var g = Math.floor(Math.random() * 255) + 1; 
                var b = Math.floor(Math.random() * 255) + 1;           
            
            color = 'rgb(' + r + ',' + g + ',' + b +')';
            console.log(color);
            layer.fillStyle = color;
        },

      });



} );