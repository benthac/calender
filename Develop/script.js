var currentDayEl = new Date();
var date = currentDayEl.getFullYear()+'-'+
(currentDayEl.getMonth()+1)+'-'+currentDayEl.getDate();
document.getElementById("currentDay").value = date;

var currentTimeEl = new Date
var time = currentTimeEl.getHours() + ":" +
currentTimeEl.getMinutes() + ":" +
currentTimeEl.getSeconds();
document.getElementById("currentTime").value = time;

$( "time-block" ).html("Add Event ...");