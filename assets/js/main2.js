/* Dar vida al menú, incorporando la funcionalidad de que se oculte y muestre las
opciones a partir de un click en el icono de la hamburguesa, utiliza algún efecto para
que el cambio sea suave. */
$(document).ready(function () {
    $(".menu").hide("");
  $(".hamburguesa").click(function () {
    $(".menu").slideToggle("slow");
  });
});


