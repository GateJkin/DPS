DROP SCHEMA IF EXISTS `dps_bd` ;
CREATE SCHEMA IF NOT EXISTS `dps_bd` DEFAULT CHARACTER SET Latin1 COLLATE latin1_swedish_ci ;
USE `dps_bd` ;

CREATE TABLE `dps_bd`.`Users` (
  user_id INT NOT NULL AUTO_INCREMENT,
  user_matricula BIGINT NOT NULL,
  user_nome VARCHAR(40),
  user_senha CHAR(32) NOT NULL,
  PRIMARY KEY (`user_id`)
);

CREATE TABLE `dps_bd`.`Pacientes` (
  paciente_id INT NOT NULL AUTO_INCREMENT,
  nome_completo CHAR(40) NOT NULL,
  nome_social CHAR(15),
  dt_nascimento DATE NOT NULL,
  genero TINYINT NOT NULL,
  endereco CHAR(40) NOT NULL,
  complemento CHAR(10),
  bairro CHAR(20) NOT NULL,
  cep INT NOT NULL,
  cidade CHAR(20) NOT NULL,
  telefone1 CHAR(11) NOT NULL,
  telefone2 CHAR(11),
  email CHAR(40) NOT NULL,
  matricula BIGINT NOT NULL,
  curso CHAR(30) NOT NULL,
  periodo CHAR(1) NOT NULL,
  campus char(1) NOT NULL,
  dependencias TEXT,
  bolsa_estudo TEXT,
  -- primeiro_atendimento TINYINT,
  -- ds_primeiro_atendimento TEXT,
  localizacao_problema CHAR(20) NOT NULL,
  ic_desabafar TINYINT NOT NULL,
  ds_desabafar TEXT NOT NULL,
  categoria CHAR(30) NOT NULL,
  subcategoria CHAR(30),
  PRIMARY KEY (`paciente_id`)
);

CREATE TABLE `dps_bd`.`Orientacao` (
  paciente_id INT NOT NULL,
  id_atendente INT NOT NULL,
  dt_acompanhamento DATE NOT NULL,
  ds_atendimento TEXT NOT NULL,
  agendamento_id INT NOT NULL
);

CREATE TABLE `dps_bd`.`Agenda` (
  agendamento_id INT NOT NULL AUTO_INCREMENT,
  agenda_data DATETIME NOT NULL,
  paciente_id INT NOT NULL,
  cd_status TINYINT,
  PRIMARY KEY (`agendamento_id`)
);
