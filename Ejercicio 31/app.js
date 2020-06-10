$(document).ready(function(){


    /* Este era en un principio el código que estaba armanda, y no me resultó, después 
    busqué en la documentación del plugin y ahí esta todo, cambié para que partiera en negro
    y puse los div de los colores
let rojo = 0;
let verde = 0;
let azul = 0;
let color;

rojo = $("#rojo-color").slider('option','value');
verde = $("#verde-color").slider('option',"value");
azul = $("#azul-color").slider('option',"value");


color = 'rgb(' + rojo + ',' + verde + ',' + azul +')';

$('.contenedor-1').css('background-color', color);

console.log(color);
    
    */

    
$( function() {
    function hexFromRGB(r, g, b) {
      var hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });
      return hex.join( "" ).toUpperCase();
    }
    function refreshSwatch() {
      var red = $( "#red" ).slider( "value" ),
        green = $( "#green" ).slider( "value" ),
        blue = $( "#blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );
      $( "#swatch" ).css( "background-color", "#" + hex );
      $( "#lee-azul" ).text("azul: "+ blue); 
      $( "#lee-rojo" ).text("rojo: "+ red); 
      $( "#lee-verde" ).text("verde: "+ green); 
       }
 
    $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
    });
    $( "#red" ).slider( "value", 0 );
    $( "#green" ).slider( "value", 0 );
    $( "#blue" ).slider( "value", 0 );

  } );
});
