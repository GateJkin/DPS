<?php
  session_start();
  if (isset($_SESSION) && isset($_SESSION['login']) && $_SESSION['login']) {
    if (isset($_GET['month']) && isset($_GET['year'])) {
      require 'db_connection.php';
      $month = $_GET['month'];
      $year = $_GET['year'];
      $days_in_month = cal_days_in_month(CAL_GREGORIAN, intval(date($month)), intval(date($year)));
      $json = new \stdClass();
      $json->days_start = date('w', strtotime($year.'-'.$month.'-01'));
      $json->days = array($days_in_month);

      for ($i = 1; $i <= $days_in_month; $i++) {
        $query = "SELECT count(agenda_data) as num_agendamentos FROM Agenda WHERE agenda_data BETWEEN '".$year."-".$month."-".$i."' AND '".$year."-".$month."-".$i." 23:59:59';";
        $query = mysqli_query($db, $query);
        $query = mysqli_fetch_assoc($query);
        if($query != null) {
            $json->days[$i - 1] = $query['num_agendamentos'];
        } else {
          $json->days[$i - 1] = 0;
        }
      }
      echo json_encode($json);
    }
    else {
      echo "falta de argumentos";
    }
  }
  else {
    echo "sem login";
  }
?>
