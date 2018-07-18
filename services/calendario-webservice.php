<?php
  function mes_num_for_text($num) {
      $num = intval($num);
      if ($num > 0 && $num < 13) {
          $mes = array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
          return $mes[$num - 1];
      }
  }

  session_start();
  $_SESSION['login'] = true;

  if (!isset($_SESSION['month']) || !isset($_SESSION['year'])) {
    $_SESSION['month'] = date('m') - 1;
    $_SESSION['year'] = date('Y');
  }

  if (isset($_SESSION) && isset($_SESSION['login']) && $_SESSION['login']) {
    if (isset($_GET['method'])) {
      require 'db-connection.php';
      
      $month = $_SESSION['month'];
      $year = $_SESSION['year'];

      if ($_GET['method'] == 'j1p') {
        if ($month + 1 > 11) {
          $year++;
        }
        $month = ($month + 1) % 12;
      }
      else if ($_GET['method'] == 'j1n') {
        if ($month - 1 < 0) {
          $year--;
        }
        $month = (($month - 1) + 12) % 12;
      }

      $_SESSION['month'] = $month;
      $_SESSION['year'] = $year;

      $days_in_month = cal_days_in_month(CAL_GREGORIAN, intval(date($month + 1)), intval(date($year)));
      $json = new \stdClass();
      $json->days_start = intval(date('w', strtotime($year.'-'.($month + 1).'-01')));
      $json->days = array($days_in_month);
      $json->days_in_month = $days_in_month;

      for ($i = 1; $i <= $days_in_month; $i++) {
        $query = "SELECT count(agenda_data) as num_agendamentos FROM Agenda WHERE agenda_data BETWEEN \'".$year."-".($month + 1)."-".$i."\' AND \'".$year."-".$month."-".$i." 23:59:59\';";
        $query = mysqli_query($db, $query);
        if($query != null) {
          $query = mysqli_fetch_assoc($query);
          $json->days[$i - 1] = $query['num_agendamentos'];
        } else {
          $json->days[$i - 1] = 0;
        }
      }
      echo json_encode($json);
    }
    else {
        echo 422;
        http_response_code(422);
    }
  }
  else {
    echo 401;
    http_response_code(401);
  }
?>