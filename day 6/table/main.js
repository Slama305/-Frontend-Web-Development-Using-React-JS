var num = prompt("Enter the number of persons:");
num = parseInt(num);
var names = [];
var ages = [];

for (var i = 0; i < num; i++) {
    var namee = prompt("Enter user" + (i + 1) + " name:");
    while (namee.length <= 3 || namee.length >= 10) {
        namee = prompt("Try again. Enter user" + (i + 1) + " name");
    }

    var age = prompt("Enter user" + (i + 1) + " age:");
    age = parseInt(age);
    while (isNaN(age) || age <= 10 || age >= 60) {
        age = prompt("Try again. Enter user" + (i + 1) + " age :");
        age = parseInt(age);
    }
    names.push(namee);
    ages.push(age);
}

var row = "<tbody>";
for (var i = 0; i < num; i++) {
    row += "<tr><td>" + names[i] + "</td><td>" + ages[i] + "</td></tr>";
}
row += "</tbody>";
document.getElementById("users").innerHTML = row;
var styl= document.getElementById("table");
styl.style.textAlign ='center';
styl.style.width = '300px';