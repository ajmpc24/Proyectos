function startTime() {

    //variables
    var today = new Date(),
        hours = today.getHours(),
        minutes = today.getMinutes(),
        date = today.getDate(),
        day = today.getDay(),
        month = today.getMonth();

    //mostrar hora de 1 a 12
    hours = (hours == 0) ? 12 : hours;
    hours = (hours > 12) ? hours - 12 : hours;
    
    //horas y minutos
    hours = checkTime(hours);
    minutes = checkTime(minutes);

    //arreglo dias
    var dia = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    //arreglo meses
    var mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    //imprimir hora minutos dia y mes
    var hr = document.getElementById("time").innerHTML = hours + ":" + minutes;
    var dt = document.getElementById("date").innerHTML = dia[day] + ",  " + date + " De " + mes[month];

    //funcion para ejecutar la hora continuamente
    var time = setTimeout(function(){startTime();},500);

}
    function checkTime(e){
        if (e < 10){
            e = "0" + e;
        }
        return  e;
    }