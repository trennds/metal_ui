import $ from "jquery"

$(".input-group > label").css("visibility", "hidden")

$(".input-group > input").focus(function() {
    $(this).siblings("label").css("visibility", "visible")
})
$(".input-group > input").focusout(function() {
    if ($(this).val() == "") $(this).siblings("label").css("visibility", "hidden")
})