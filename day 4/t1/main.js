function birdate(dates) {
  if (dates.length!== 10) {   
      alert("Wrong Date Format");
      return;
  }
  if (dates[2] !== '-' || dates[5] !== '-') {
      alert("Wrong Date Format");
      return;
  }
  var day = dates.substring(0, 2);
  var month = dates.substring(3, 5);
  var year = dates.substring(6, 10);
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
      alert("Wrong Date Format");
      return;
  }
  day = parseInt(day);
  month = parseInt(month);
  year = parseInt(year);
  var date = new Date(year, month - 1, day);
  alert(date);
}
var dates = prompt("enter your birthdate in the following format (DD-MM-YYYY):");
birdate(dates);
