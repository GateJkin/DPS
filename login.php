<?php
require 'db_connection.php';

$user = $_POST['user'];
$password = $_POST['password'];

$query = mysqli_query($db, 'SELECT user_matricula, user_senha FROM users WHERE user_matricula = '.$user.';');
if($query)
  $query_result = mysqli_fetch_array($query);
else
  header('Location: index.html');

//$hash = md5($password);

/*if($hash == $query_result['senha']) {
  session_start();
  $_SESSION['user'] = $user;
}*/

session_start();

if($password == $query_result['user_senha']) {
  session_start();
  $_SESSION['logado'] = true;

  echo 200; // Tudo OK
}
else
  $_SESSION['logado'] = false;
  echo 404; // Ususario não encontrado
?>
