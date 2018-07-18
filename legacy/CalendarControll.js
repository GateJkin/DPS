class CalendarControl {

    constructor(month, year) {
      this.month = month - 1;
      this.year = year;
    }
  
  
    month_num_for_text(num) {
      if (num >= 0 && num < 12) {
        var mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        return mes[num];
      }
      return null;
    } // Final de month_num_for_text
  
    redirect(e) {
      var day = this.querySelector('.numero-dia').innerHTML;
      var month = calendarCtrl.month + 1;
      var year = calendarCtrl.year;
      window.location.assign("teste.php?dia="+day+"&mes="+month+"&year="+year);
    }
  
    buildCalendar() {
      document.getElementById("month").innerHTML = this.month_num_for_text(this.month);
      document.getElementById("year").innerHTML = this.year;
  
      var i = 0;
  
      if(document.querySelectorAll('.dia')) {
        let elements = document.querySelectorAll('.dia');
        for(i = 0; i < elements.length; i++) {
            elements[i].removeEventListener('click', this.redirect);
        }
      }
  
      var json = JSON.parse(this.queryUp('webcalendar.php?month=' + (this.month + 1) + '&year=' + this.year));
  
      var b = 7 - json.days_start;
      var num_linhas = Math.ceil((json.days_in_month + json.days_start) / 7);
      var alturaPorDia = 100 / num_linhas;
      var row = "<div class='row' style='height: "+ (alturaPorDia) +"%'>";
  
      for (var j = 0; j < json.days_start; j++) {
        row += "<div class='ndia'></div>";
      }
      for (var i = 1; i + j <= 7; i++) {
        if (json.days[i - 1] != "0") {
          row += "<div class='dia'><span class='numero-dia'>" + (i) + "</span>";
          row += "<span class='ocorrencia'>" + json.days[i - 1] + "</span></div>";
        } else {
          row += "<div class='dia'><span class='numero-dia'>" + (i) + "</span></div>";
        }
      }
  
      for (i = 0; i < num_linhas - 1; i++) {
        row += "</div><div class='row' style='height: "+ (alturaPorDia) +"%'>";
        for (j = 1; j <= 7 && (i * 7 + j + b) <= json.days_in_month; j++) {
          if (json.days[i * 7 + j + b - 1] != "0") {
            row += "\n<div class='dia'><span class='numero-dia'>" + (i * 7 + j + b) + "</span>";
            row += "<span class='ocorrencia'>" + json.days[i * 7 + j + b - 1] + "</span></div>";
          } else {
            row += "\n<div class='dia'><span class='numero-dia'>" + (i * 7 + j + b) + "</span></div>";
          }
        }
        //if (i < num_linhas - 1) {
        //  row += "\n</div><div class='row'>";
        //}
      }
  
      var final = num_linhas * 7 - (json.days_in_month + json.days_start);
      for (i = 0; i < final; i++) {
        row += "<div class='ndia'></div>";
      }
      row += "</div>";
  
      document.querySelector(".dia-mes").innerHTML = row;
  
      var elements = document.querySelectorAll('.dia');
      for(i = 0; i < elements.length; i++) {
          elements[i].addEventListener('click', this.redirect);
      }
  
    } // FInal de buildCalendar
  
    decreaseDate(sum = 1) {
      //window.alert("decrease");
      if (this.month - sum < 0) {
          this.year--;
      }
      this.month = ((this.month - sum) + 12) % 12;
  
      this.buildCalendar();
    } // Final de decreaseDate
  
    // Aumenta o mês
    increaseDate(sum = 1) {
      //window.alert("increase");
      if (this.month + sum > 11) {
          this.year++;
      }
      this.month = (this.month + sum) % 12;
  
      this.buildCalendar();
    } // Final de increaseDate
  
  } // Final da classe CalendarControl
  
  // Equivalente a usar o $(document).ready() do JQuery
  document.addEventListener("DOMContentLoaded", function(event) {
  });