function birdate(dates) {
  if (dates.length!== 10) {   
      alert("Wrong Date Format");
      return;
  }
  // if (dates[2] !== '-' || dates[5] !== '-') {
  //     alert("Wrong Date Format");
  //     return;
  // }
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
  var date = new Date(dates);
  if(!days[date.getDay()]){
    alert("Wrong Date Format");
    return;
  }
  alert(days[date.getDay()]);
}
var dates = prompt("enter your birthdate in the following format (YYYY-MM-DD):");
birdate(dates);