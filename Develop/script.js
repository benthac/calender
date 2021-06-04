// var currentDayEl = new Date();
// var date = currentDayEl.getFullYear()+'-'+
// (currentDayEl.getMonth()+1)+'-'+currentDayEl.getDate();
// document.getElementById("currentDay").value = date;

// var currentTimeEl = new Date
// var time = currentTimeEl.getHours() + ":" +
// currentTimeEl.getMinutes() + ":" +
// currentTimeEl.getSeconds();
// document.getElementById("currentTime").value = time;

// $( "time-block" ).html("Add Event ...");

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('currentTime').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
      startTime()
    }, 500);
  }
  startTime();

  document.getElementById('currentDay').innerHTML = new Date().toJSON().slice(0,10).replace(/-/g,'/');
document.write();
