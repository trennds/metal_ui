import $ from "jquery"

$(document).ready(function(){
    $(".option").click(function(){
      $(this).addClass("active-option").siblings().removeClass("active-option");
    });
  });