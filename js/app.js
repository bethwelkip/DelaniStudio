$(document).ready(function () {
    $("#what-hide1").click(function () {
        $("#what-hide1").css("display", "none");
        $(".photo1").css("display", "block");
    });

    $("#photo1").click(function () {
        $(".photo1").css("display", "none");
        $("#what-hide1").css("display", "block");
    });

    $("#what-hide2").click(function () {
        $("#what-hide2").css("display", "none");
        $(".photo2").css("display", "block");
    });

    $("#photo2").click(function () {
        $(".photo2").css("display", "none");
        $("#what-hide2").css("display", "block");
    });

    $("#what-hide3").click(function () {
        $("#what-hide3").css("display", "none");
        $(".photo3").css("display", "block");
    });

    $("#photo3").click(function () {
        $(".photo3").css("display", "none");
        $("#what-hide3").css("display", "block");

        $(".container").hover(function () {
            $("body").removeClass(".hide");
        })
    });










})