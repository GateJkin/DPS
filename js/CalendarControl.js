class CalendarControl {

  constructor(month, year) {
    this.month = month - 1;
    this.year = year;
  }

  queryUp(url, callback = 0) {
    var type = false;
    if(typeof callback == 'function')
    type = true;

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
              callback(this.responseText);
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
    var json = JSON.parse(queryUp('websearvice.php?month=' + this.month + '&year=' + this.year));

    for (var day in json) {

    }

  } // FInal de buildCalendar

  decreaseDate(sum = 1) {
    //window.alert("decrease");
    if (this.month - sum < 0) {
        this.year--;
    }
    this.month = ((this.month - sum) + 12) % 12;
    document.getElementById("month").innerHTML = this.month_num_for_text(this.month);
    document.getElementById("year").innerHTML = this.year;
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
  } // Final de increaseDate

} // Final da classe CalendarControl

// Equivalente a usar o $(document).ready() do JQuery
document.addEventListener("DOMContentLoaded", function(event) {

});
