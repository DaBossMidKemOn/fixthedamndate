//formats minutes to be always double digits
function fixMinutes(mins) {
  if (mins < 10) {
    return "0" + mins;
  }
  return mins;
}

//formats hours to be always double digits
function fixHours(hours) {
  if (hours < 10) {
    return "0" + hours;
  }
  return hours;
  }

function formatAMPM(hours, minutes){
  var cycle = " am";
  if (hours > 11) {
    hours = hours - 12;
    cycle = " pm";
  }
  if (hours == 0) {
    hours = 12;
  }
  return hours + "." + minutes + cycle;
}

//formats the time to display in DAY MONTH DATE 24HRSTART-24HRFINISH
function formatTime(d) {

  //return dayArray[d.getDay()] +  " " + monthArray[d.getMonth()] + " " + d.getDate() + " " + fixHours(d.getHours()) + fixMinutes(d.getMinutes()) + "-" + fixHours(((d.getHours() + 2) % 24)) + fixMinutes(d.getMinutes());
  return formatAMPM(d.getHours(), d.getMinutes()) + " - " + formatAMPM((d.getHours() + 2), d.getMinutes());
}


function formatDate(d) {
  var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var monthArray = ["January", "February", "March", "April", "May", "June", "July",
  "August", "Sep", "October",  "November", "December"];
  return dayArray[d.getDay()] + " " + d.getDate() + " " + MonthArray[d.getMonth()] + " " + d.getFullYear();
}

//retrieves the minutes from last midnight
function minsFromMidnight(d) {
  return d.getHours() * 60 + d.getMinutes();
}

//converts from minutes from last midnight back to HH/MM format
function minsToHoursMins(mins) {
  var hours = Math.floor(mins/60);
  var minutes = mins % 60;
  return [hours, minutes];
}

//takes browser information and calculates the converted time of the workshop
function convertToLocal(d, c) {
  var melbMins = minsFromMidnight(d);
  var newDate = d.getDate();
  var convertedMins = melbMins + c;
  var newHours = minsToHoursMins(convertedMins)[0];
  var newMins = minsToHoursMins(convertedMins)[1];
  return new Date(d.getFullYear(), d.getMonth(), newDate, newHours, newMins, d.getSeconds(), d.getMilliseconds())
}


function displayWorkshopTime() {

  /*
  uncomment the date you need (below the corresponding title)
  */

  //Wednesday 9 September 5:00pm
  var d1 = new Date(2020, 8, 9, 17, 00, 00, 00);

  //Wednesday 9 September 7:00pm
  var d2 = new Date(2020, 8, 9, 19, 00, 00, 00);

  //Thursday 10 September 9:00am
  var d3 = new Date(2020, 8, 10, 09, 00, 00, 00);

  //Thursday 10 September 5:00pm
  var d4 = new Date(2020, 8, 10, 17, 00, 00, 00);

  //Thursday 10 September 7:00pm
  var d5 = new Date(2020, 8, 10, 19, 00, 00, 00);

  //Friday 11 September 9:00am
  var d6 = new Date(2020, 8, 11, 09, 00, 00, 00);

  //Friday 11 September 5:00pm
  var d7 = new Date(2020, 8, 11, 17, 00, 00, 00);

  //Friday 11 September 7:00pm
  var d8 = new Date(2020, 8, 11, 19, 00, 00, 00);


  //gets users local timezone based off their device
  var local = new Date();

  //gets time offset from UTC in minutes
  var offset = -(local.getTimezoneOffset());

  //gets time relative to AEST
  var compareToAEST = offset - 600;

  /* THESE DISPLAY THE TIME ON THE WEBPAGE
       In order for the script to do anything whatever HTML object you would like to insert the time into
       be it a paragraph or a box or a button etc, will need to have an ID tag matching the quoted text.
       i.e. id = "workshop1" MUST be in the opening tag
       <in here> not in here </or in here>
  */

  //document.getElementById("melbtime").innerHTML = formatTime(d);

  document.getElementById("ws1date").innerHTML = formatDate(convertToLocal(d1, compareToAEST));
  document.getElementById("ws1time").innerHTML = formatTime(convertToLocal(d1, compareToAEST));
  document.getElementById("ws2date").innerHTML = formatDate(convertToLocal(d2, compareToAEST));
  document.getElementById("ws2time").innerHTML = formatTime(convertToLocal(d2, compareToAEST));
  document.getElementById("ws3date").innerHTML = formatDate(convertToLocal(d3, compareToAEST));
  document.getElementById("ws3time").innerHTML = formatTime(convertToLocal(d3, compareToAEST));
  document.getElementById("ws4date").innerHTML = formatDate(convertToLocal(d4, compareToAEST));
  document.getElementById("ws4time").innerHTML = formatTime(convertToLocal(d4, compareToAEST));
  document.getElementById("ws5date").innerHTML = formatDate(convertToLocal(d5, compareToAEST));
  document.getElementById("ws5time").innerHTML = formatTime(convertToLocal(d5, compareToAEST));
  document.getElementById("ws6date").innerHTML = formatDate(convertToLocal(d6, compareToAEST));
  document.getElementById("ws6time").innerHTML = formatTime(convertToLocal(d6, compareToAEST));
  document.getElementById("ws7date").innerHTML = formatDate(convertToLocal(d7, compareToAEST));
  document.getElementById("ws7time").innerHTML = formatTime(convertToLocal(d7, compareToAEST));
  document.getElementById("ws8date").innerHTML = formatDate(convertToLocal(d8, compareToAEST));
  document.getElementById("ws8time").innerHTML = formatTime(convertToLocal(d8, compareToAEST));


/*TO DO:
    -add <body onload="displayWorkshopTime()", class = ...>
    -put the script in the HTML, between other two scripts
    -add <h3 id = "ws1time"> UTC Code </h3> for all 16 instances
    -leave current h3 text as filler in case script has errors in loading
*/

}
