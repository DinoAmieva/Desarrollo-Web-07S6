<?php
require_once '../model/formulario.php';
$operaciones= new formulario();
$nombre= isset($_POST['nombre'])?$_POST['nombre']:"";
$carrera= isset($_POST['carrera'])?$_POST['carrera']:"";
$tipo= isset($_POST['tipo'])?$_POST['tipo']:"";


switch ($_GET['opcion']) {
    case 'ingresa_usuario':
        $rspta=$operaciones->alta_usuario('Dino', 'ISW', '2');
        echo $rspta? "Se realizo la alta con exito!":"Error al realizar la alta";
        break;

        default:
            echo 'No se encontro la opcion';
            break;
}

?>