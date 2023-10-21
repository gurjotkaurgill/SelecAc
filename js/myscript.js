// myscript.js for selectorsActions
$(document).ready(function(){
    console.log("In doc ready");
    //create header
    $("h3:first").html("Selectors and ");
    $("h3:first").append("Actions");
    $("h3:first").css("font-style","italic");
    $("h3:nth(0)").addClass("h3Style");
    //buttons
    $("#gifImages").click(function(){
        console.log("In gifimages");
        $("#list img[src $= '.gif']").addClass("gifBorder");
    });
    $("#clearGIF").click(function(){
        $("#list img[src $= '.gif']").removeClass("gifBorder");
    });
    $("#pngToggle").click(function(){
        $("#list img[src $= '.png']").toggle();
        //toggle is with hide and show
    });
    $("#spinJPG").click(function(){
        $("#list img[src $= '.jpg']").toggleClass("rotate");
    });
    //DOM
    $("#d2button").hide();
    $("#rbutton").click(function(){
        $("img#pear").remove();
        $("#rbutton").remove();
    });
    var a;
    $("#dbutton").click(function(){
        a = $("img#strawberry").detach();
        $("#dbutton").hide();
        $("#d2button").show();
    });
    $("#d2button").click(function(){
        $("img#orange").after(a);
        $("#d2button").hide();
    });
});//end if doc ready