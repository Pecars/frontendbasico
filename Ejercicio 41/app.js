
var controller = new slidebars();

controller.init();


$( '.js-toggle-left-slidebar' ).on( 'click', function ( event ) {
    event.stopPropagation();
    controller.toggle( 'slidebar-1' );
} );


function ventana(URL){ 
    window.open(URL,"ventana","width=400,height=800,scrollbars=NO")}