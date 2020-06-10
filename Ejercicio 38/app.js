$(document).ready( function () {

    $("#registro").validate();
  
   $("#boton").on( "click", function() {
       
      var $registerForm = $('#registro');

        if($registerForm.length){

          $registerForm.validate({
               rules:{

                name: {
                    alphanumeric: true,
                    required: true,
                  },


                marca: {
                required: true,

                },


                color:{
                    alphabetic:true,

                }

                }


            })


        }













    });





} );


