do{
  var flag=true;
  var r = prompt("Enter the radius of the circle:");
  r = parseFloat(r);
    if (isNaN(r) || r <= 0) {
        alert("Please enter a valid radius.");
    } else {
        var area = Math.PI * Math.pow(r, 2);
        alert("The area is: " + area.toFixed(2));
        flag=false;
    }
}while(falg);

///////////////////////////////

var x = prompt("Enter a value to calculate its square root:");
     x = parseFloat(x);
      if (isNaN(x) || x < 0) {
        alert("Please enter a valid number.");
      } else {
        var value = Math.sqrt(x);
        alert("The square root of " + x + " is: " + value.toFixed(2));
    }