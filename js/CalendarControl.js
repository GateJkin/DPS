class CalendarControl {

  constructor(month, year) {
    this.month = month - 1;
    this.year = year;
  }

  queryUp(url, callback = 0) {
    var type = false;
    if(typeof callback == 'function')
<<<<<<< HEAD
      type = true;
=======
    type = true;
>>>>>>> d6c8ae2affc6848737efd05992a92ababa33f756

    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
      var request = new XMLHttpRequest();
      request.withCredentials = true;
    } else if (window.ActiveXObject) { // IE
      try {
        var request = new ActiveXObject('Msxml2.XMLHTTP');
        request.withCredentials = true;
      }
      catch (e) {
        try {
          request = new ActiveXObject('Microsoft.XMLHTTP');
          request.withCredentials = true;
        }
        catch (e) {
          window.alert("Seu navegador está desatualizado. Baixe a versão mais recente do seu navegador para usar o site.");
        }
      }
    }

    request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
<<<<<<< HEAD
              if(typeof callback == 'function')
                callback(this.responseText);
=======
              callback(this.responseText);
>>>>>>> d6c8ae2affc6848737efd05992a92ababa33f756
            }
    };

    request.open('GET', url, type);
    request.send();

    if(!type) {
      return request.responseText;
    }
  } // Final de queryUp


  month_num_for_text(num) {
    if (num >= 0 && num < 12) {
      var mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
      return mes[num];
    }
    return null;
  } // Final de month_num_for_text

  buildCalendar() {
<<<<<<< HEAD
    var json = JSON.parse(this.queryUp('webcalendar.php?month=' + (this.month + 1) + '&year=' + this.year));

    var row = "<div class='row'>";

    for (var j = 0; j < json.days_start; j++) {
      row += "<div class='dia ndia'></div>";
    }
    for (var i = 1; i + j <= 7; i++) {
      if (json.days[i - 1] != "0") {
        row += "<div class='dia'><span class='numero-dia'>" + (i) + "</span>";
        row += "<span class='ocorrencia'>" + json.days[i - 1] + "</span></div>";
      } else {
        row += "<div class='dia'><span class='numero-dia'>" + (i) + "</span></div>";
      }
    }

    var b = 7 - json.days_start;
    var num_linhas = Math.ceil((json.days_in_month + json.days_start) / 7);

    for (i = 0; i < num_linhas - 1; i++) {
      row += "</div><div class='row'>";
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
      row += "<div class='dia ndia'></div>";
    }

    row += "</div>";
    window.alert(row);
    document.querySelector(".dia-mes").innerHTML = row;

=======
    var json = JSON.parse(queryUp('websearvice.php?month=' + this.month + '&year=' + this.year));

    for (var day in json) {

    }

>>>>>>> d6c8ae2affc6848737efd05992a92ababa33f756
  } // FInal de buildCalendar

  decreaseDate(sum = 1) {
    //window.alert("decrease");
    if (this.month - sum < 0) {
        this.year--;
    }
    this.month = ((this.month - sum) + 12) % 12;
    document.getElementById("month").innerHTML = this.month_num_for_text(this.month);
    document.getElementById("year").innerHTML = this.year;
<<<<<<< HEAD

    this.buildCalendar();
=======
>>>>>>> d6c8ae2affc6848737efd05992a92ababa33f756
  } // Final de decreaseDate

  // Aumenta o mês
  increaseDate(sum = 1) {
    //window.alert("increase");
    if (this.month + sum > 11) {
        this.year++;
    }
    this.month = (this.month + sum) % 12;
    document.getElementById("month").innerHTML = this.month_num_for_text(this.month);
    document.getElementById("year").innerHTML = this.year;
<<<<<<< HEAD

    this.buildCalendar();
=======
>>>>>>> d6c8ae2affc6848737efd05992a92ababa33f756
  } // Final de increaseDate

} // Final da classe CalendarControl

// Equivalente a usar o $(document).ready() do JQuery
document.addEventListener("DOMContentLoaded", function(event) {

});
