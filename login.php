<?php
require 'db_connection.php';

$user = $_POST['user'];
$password = $_POST['password'];

$query = mysqli_query($db, 'SELECT matricula, senha FROM users WHERE matricula = $user;');
$query_result = mysqli_fetch_array($query);

$hash = md5($password);

if($hash == $query_result['senha']) {
  session_start();
  $_SESSION['user'] = $user;
}
?>
