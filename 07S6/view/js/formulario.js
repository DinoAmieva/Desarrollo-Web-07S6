function init() {
    console.log("entra init");
    document.getElementById("cajas_formulario").style.display = "none";
    document.getElementById("mostrar_datos").style.display = "none";
}
function paso_1() {
    document.getElementById("cajas_formulario").style.display = "block";
    document.getElementById("tarjeta_bienvenida").style.display = "none";
}

function paso_2() {
    document.getElementById("cajas_formulario").style.display = "none";
    document.getElementById("mostrar_datos").style.display = "block";
}


init();