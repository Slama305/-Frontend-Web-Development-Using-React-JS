
var msg = prompt("Enter a message : ");
var cont = 0;
for (var i = 0; i < msg.length; i++) {
  if (msg[i] === 'e') {
    cont++;
  }
}
alert("number of 'e' in the string is: " + cont);
