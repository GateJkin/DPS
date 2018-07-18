
app.controller('AgendaController', function ($scope) {
    
    $scope.items = [];
    $scope.dia = 0;
    $scope.mes = 0;
    $scope.ano = 0;

    $scope.month_num_for_text = function(num) {
        if (num >= 0 && num < 12) {
            var mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
            return mes[num];
        }
        return null;
    } // Final de month_num_for_text

    $scope.buildCalendar = function() {

        var json = JSON.parse($scope.queryUp('webcalendar.php?month=' + ($scope.month + 1) + '&year=' + $scope.year));
        
        for (var j = 0; j < json.days_start; j++) {
            $scope.items.push({
                class: "ndia",
                num_day: 0,
                ocorrencias: 0
            });
        }

        for (var i = 1; i <= json.days_in_month; i++) {
            $scope.items.push({
                class: "dia",
                num_day: i,
                ocorrencias: json.days[i - 1]
            });
        }

        if ($scope.items.length < json.days_in_month) {
            for (var i = 1; i + $scope.items.length < json.days_in_month; i++) {
                $scope.items.push({
                    class: "ndia",
                    num_day: 0,
                    ocorrencias: 0
                });
            }
        }

    } // Final de buildCalendar

    $scope.decreaseDate = function(sum = 1) {
        
        if ($scope.month - sum < 0) {
            $scope.year--;
        }
        $scope.month = (($scope.month - sum) + 12) % 12;

        $scope.buildCalendar();

    } // Final de decreaseDate

    // Aumenta o mês
    $scope.increaseDate = function(sum = 1) {
        //window.alert("increase");
        if ($scope.month + sum > 11) {
            $scope.year++;
        }
        $scope.month = ($scope.month + sum) % 12;

        $scope.buildCalendar();
    } // Final de increaseDate

});