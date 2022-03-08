/* Al hacer click sobre la caja que dice "haz click", aumenta el tamaño y el color de la
caja que dice "cambiame" (sólo utiliza jQuery). Siente la libertad de agregar las
clases o ids que sean necesarios (no modificar estructura html entregada).
*/

$(document).ready(function () {
  $(".box_1").click(function () {
    $(".box_2").animate(
      {
        height: "+=150px",
      },
      "slow"
    );
    $(".box_2").css("background-color", "blue");
  });
});
