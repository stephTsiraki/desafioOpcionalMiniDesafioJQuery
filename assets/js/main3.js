/* Dar un estilo a los elementos pares e impares de la lista al pasar el mouse sobre la
caja roja y que vuelva a la normalidad cuando el mouse deje la caja (hint:
mouseover(), mouseleave()) */

$(document).ready(function () {
  $(".red_box").mouseenter(function () {
    $("li").filter(":even").css("background-color", "green");
    $("li").filter(":odd").css("background-color", "yellow");
  });
  $(".red_box").mouseleave(function () {
    $("li").css("background-color", "transparent");
  });
});
