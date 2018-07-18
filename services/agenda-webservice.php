<?php
    if (isset($_SESSION) && isset($_SESSION['login']) && $_SESSION['login']) {
        include 'db-connection.php';
        $query = "SELECT CONVERT(CONVERT(Agenda.agenda_data, TIME), CHAR(5)) as agenda_data, Agenda.cd_status, Pacientes.nome_completo, Pacientes.nome_social, Pacientes.matricula FROM Agenda INNER JOIN Pacientes ON Agenda.paciente_id = Pacientes.paciente_id WHERE agenda_data BETWEEN '".date('Y-m-d')."' AND '".date('Y-m-d')." 23:59:59';";
        $query = mysqli_query($db, $query);
        $query_result = array();
        $i = 0;
        while ($row = mysqli_fetch_assoc($query)) {
            $query_result[$i] = $row;
        }
        echo json_encode($query_result);
    }
    else {
        http_response_code(401);
    }
?>