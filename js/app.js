$(document).ready(function () {
    $().click(function () {

    });
    $().click(function () {

    });
    $().hover(function () {

    });
    $().click(function () {

    });


    $("#blanks form").submit(function (event) {
        var name = $("input#person1").val();
        var email = $("input#person2").val();
        var message = $("input#animal").val();
        var toAlert = "Thank you for contacting us, " + name + ". We have received your message";

        $("#story").show();

        event.preventDefault();
    });
})