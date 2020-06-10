$(document).ready(function () {
    $("#right").click(function () {
        $("#inicio").css({
            "left": "+=10px"
        });
    })
    $("#left").click(function () {
        $("#inicio").css({
            "left": "-=10px"
        });
    })
    $("#up").click(function () {
        $("#inicio").css({
            "top": "-=10px"
        });
    })
    $("#down").click(function () {
        $("#inicio").css({
            "top": "+=10px"
        });
    })
    $("#reset").click(function () {
        $("#inicio").css({
            "top": "50%",
            "left":"50%",
            "position":"absolute",
        });
    });


});