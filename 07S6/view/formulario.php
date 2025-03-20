<?php
include_once 'header.html';
?>
<!-------------CUERPO DE LA PAGINA----------------->

<!--MENSAJE DE BIENVENIDA-->
<div id="tarjeta_bienvenida">
  <div class="card" style="width: 18rem;">
    <img src="../img/tarjeta_bienvenida.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Empezaremos con el registro</h5>
      <p class="card-text">Solo te llevara unos minutos</p>
      <a href="#" onclick="paso_1()" class="btn btn-primary">Empecemos</a>
    </div>
  </div>
</div>
<!-- FIN MENSAJE DE BIENVENIDA-->

<!--CAJAS DE TEXTO RECIBE DATOS-->
<div id="cajas_formulario">
  <div class="mb-3">
    <label for="nombre" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="nombre" placeholder="Tu nombre">
  </div>
  <div class="mb-3">
    <label for="carrera" class="form-label">Carrera</label>
    <input type="text" class="form-control" id="carrera" placeholder="Tu carrera">
  </div>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="estudiante">
    <label class="form-check-label" for="estudiante">Eres estudiante</label>
  </div>
  <button type="button" onclick="paso_2()" class="btn btn-dark">Continuar</button>
</div>
<!--FIN CAJAS DE TEXTO RECIBE DATOS-->

<!--CAJAS MOSTRAR DATOS-->
<div id="cajas_mostrar_datos">
  <div class="mb-3">
    <input class="form-control" id="txt_mostrar_nombre" type="text" placeholder="Nombre" aria-label="Disabled input example" disabled>
  </div>
  <div class="mb-3">
    <input class="form-control" id="txt_mostrar_carrera" type="text" placeholder="Carrera" aria-label="Disabled input example" disabled>
  </div>
  <div class="mb-3">
    <input class="form-control" id="txt_mostrar_estudiante" type="text" placeholder="Estudiante" aria-label="Disabled input example" disabled>
  </div>
</div>
<!--FIN CAJAS MOSTRAR DATOS-->

<!-------------+FIN DE CUERPO DE LA PAGINA----------------->
<script>
function init() {
    console.log("entra init");
    document.getElementById("cajas_formulario").style.display = "none";
    document.getElementById("cajas_mostrar_datos").style.display = "none";
}

function paso_1() {
    document.getElementById("cajas_formulario").style.display = "block";
    document.getElementById("tarjeta_bienvenida").style.display = "none";
}

function paso_2() {
    // Obtener los valores ingresados
    var nombre = document.getElementById("nombre").value;
    var carrera = document.getElementById("carrera").value;
    var esEstudiante = document.getElementById("estudiante").checked ? "Sí" : "No";
    
    // Mostrar los valores en las cajas de resultado
    document.getElementById("txt_mostrar_nombre").value = nombre;
    document.getElementById("txt_mostrar_carrera").value = carrera;
    document.getElementById("txt_mostrar_estudiante").value = esEstudiante;
    
    // Cambiar la visualización
    document.getElementById("cajas_formulario").style.display = "none";
    document.getElementById("cajas_mostrar_datos").style.display = "block";
}

// Llamada a la función init cuando la página cargue
window.onload = init;
</script>

<?php
include_once 'footer.html';
?>