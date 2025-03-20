<?php
require_once 'operaciones.php';
$nombre="Dino";
$numero=23;
$boolean=false;
$imaginario=34.89999;

echo "La variable nombre es ->$nombre, numero->$numero, boolean->$boolean, imaginario->$imaginario";
$array = array('4','5','6','7','8','9','10');
echo "<br>";
//echo var_dump($array);


$operaciones=new sumas();
if($operaciones->suma(3,3)>0){
    echo "El numero es menor a 0";
}else{
        echo "El numero es mayor a 0";
    }
$respuesta=$operaciones->suma(3,3) ? "Tiene datos" : "Ocurrio un error";
echo "<br>".$respuesta;
echo "<br>Resultado de suma ->".$operaciones->suma(3,3);
echo "<br>Resultado de resta ->".$operaciones->resta($numero,$imaginario);
?>