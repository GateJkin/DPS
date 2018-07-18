<?php
  if(basename($_SERVER['PHP_SELF']) != 'db_connection.php') {
    $db = mysqli_connect('127.0.0.1', 'root', '', 'dps_bd') or die("Erro: ".mysqli_connect_error());
  }
?>
