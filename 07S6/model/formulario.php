<?php

require_once '../config/conexion.php';
class formulario extends conexion{
    public function _construct(){
        
    }
    public function alta_usuario($nombre,$carrera,$tipo){
        $query="INSERT INTO tb_usuario_ (nombre,carrera,tipo) VALUES ('$nombre','$carrera','$tipo')";
        $sql=conexion::conectar()->prepare($query);
        if($sql->execute()){
            return $sql;
        }else{  
            return false;
        }
    }

}
?>