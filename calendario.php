<?php
  include 'db_connection.php';
  session_start();
  $_SESSION['login'] = true;
  function mes_num_for_text($num) {
    $num = intval($num);
    if ($num > 0 && $num < 13) {
      $mes = array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
      return $mes[$num - 1];
    }
  }
?>
<html>
  <head>
    <title>Calendario</title>
    <script type="text/javascript" src="js/teste.js"></script>
    <script type="text/javascript" src="js/CalendarControl.js"></script>
    <link rel="stylesheet" type="text/css" href="css/calendario.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">
  </head>
  </body>
    <?php
      echo "<script> var calendarCtrl = new CalendarControl(".date('m').",".date('Y')."); </script>";
    ?>
    <header id="header">
      <div class="voltar">
        <a href="agenda.php"><i class="fas fa-arrow-left"></i><span>Voltar</span></a>
      </div>
      <div class="calendar-control">
        <button onclick="calendarCtrl.decreaseDate(1);"><i class="fas fa-chevron-left"></i></button>
        <div class="details">
          <span>
            <?= "<span id='month'>".mes_num_for_text(date('m'))."</span> de <span id='year'>".date('Y')."</span>"; ?>
          </span>
        </div>
        <button onclick="calendarCtrl.increaseDate(1);"><i class="fas fa-chevron-right"></i></button>
      </div>
    </header>
    <main id="main">
      <div id="calendario">
        <div class="dia-semana">
          <div>
            <span>Domingo</span>
          </div>
          <div>
            <span>Segunda</span>
          </div>
          <div>
            <span>Terça</span>
          </div>
          <div>
            <span>Quarta</span>
          </div>
          <div>
            <span>Quinta</span>
          </div>
          <div>
            <span>Sexta</span>
          </div>
          <div>
            <span>Sabado</span>
          </div>
        </div>
        <div class="dia-mes">
          <div class="row">
            <div class="dia">
              <span>1</span>
            </div>
            <div class="dia"></div>
            <div class="dia"></div>
            <div class="dia"></div>
            <div class="dia"></div>
            <div class="dia"></div>
            <div class="dia"></div>
          </div>

          <div class="row">
            <div class="dia"></div>
            <div class="dia"></div>
            <div class="dia"></div>
            <div class="dia"></div>
            <div class="dia"></div>
            <div class="dia"></div>
            <div class="dia"></div>
          </div>
        </div>
      </div>
    </main>
  </body>
</html>
