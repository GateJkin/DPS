<?php
  include 'db_connection.php';
?>
<html>
  <head>
    <title>Agenda</title>
    <link rel="stylesheet" type="text/css" href="css/agenda.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">
  </head>

  <body>
    <header id="header">
      <ul class="navigation">
        <li><a href="#"><i class="fas fa-calendar-plus"></i><span>Adicionar</span></a></li>
        <li><a href="#"><i class="fas fa-calendar-alt"></i><span>Calendario</span></a></li>
        <li><a href="#"><i class="fas fa-clipboard-list"></i><span>Pacientes</span></a></li>
      </ul>
    </header>
    <main id="main">
      <div id="agenda">
        <?php
          $query = "SELECT CONVERT(CONVERT(Agenda.agenda_data, TIME), CHAR(5)) as agenda_data, Agenda.cd_status, Pacientes.nome_completo, Pacientes.nome_social, Pacientes.matricula FROM Agenda INNER JOIN Pacientes ON Agenda.paciente_id = Pacientes.paciente_id WHERE agenda_data BETWEEN '".date('Y-m-d')."' AND '".date('Y-m-d')." 23:59:59';";
          $query = mysqli_query($db, $query);
          if($query != null && mysqli_num_rows($query) > 0) {
            while($row = mysqli_fetch_assoc($query)) {
              echo "<div class='item'>
                <div class='horario'>
                ".($row['cd_status'] == 0 ? "<i class='far fa-clock' style='color: #ffc107;'></i>" : ($row['cd_status'] == '1' ? "<i class='fas fa-check' style='color: #28a745;'></i>" : "<i class='fas fa-times' style='color: #dc3545;'></i>"))."
                  <span>".$row['agenda_data']."</span>
                </div>
                <div class='dados'>
                  <div class='info'>
                    ".($row['nome_social'] != "" ? "<span class='nome-social'><span class='title'>Nome social: </span>".$row['nome_social']."</span>" : "<span class='nome'><span class='title'>Nome: </span>".$row['nome_completo']."</span>")."
                    <span class='matricula'><span class='title'>Matricula: </span>".$row['matricula']."</span>
                  </div>
                  <div class='menu'>
                    <a class='a'>atender</a>
                    <a class='d'>detalhes</a>
                  </div>
                </div>
              </div>";
            }
          }
          else {
            echo "<span id='anything'>Nenhuma consulta agendada para hoje.</span>";
          }
        ?>
      </div>
    </main>
  </body>
</html>
