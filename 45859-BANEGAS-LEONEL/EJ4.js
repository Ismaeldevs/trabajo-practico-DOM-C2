let nombre = document.getElementById("inputNombre");
let vista = document.getElementById("preview");

nombre.addEventListener("input", function () {

    let texto = nombre.value.trim();

    if (texto === "") {

        vista.textContent = "Escribí tu nombre arriba.";

    } else {

        vista.textContent = "Hola, " + texto + "!";

    }

});