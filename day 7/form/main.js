var names = [], ages = [], emails = [];
var i = 0;
var tables=document.getElementById('tables');
document.getElementById('addButton').addEventListener('click', function(e) {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var n = validName(name);
    var a = validAge(age);
    var em = validEmail(email);
    if(n && a && em){
        names.push(name);
        ages.push(age);
        emails.push(email); 
        tables.style.display = "block";

        var row = "<tr><td>" + names[i] + "</td><td>" + ages[i] + "</td><td>" + emails[i] + "</td></tr>";
        document.getElementById("user").innerHTML += row;
        i++;
    }
});

function validName(n) {
    var nameError = document.getElementById('nameError');
    var valid = true;
    if (n === '') {
        nameError.innerText = "Please enter your name!";
        valid = false;
    } else if (!isNaN(n)) {
        nameError.innerText = "Please enter a valid name!";
        valid = false;
    } else {
        nameError.innerText = "";
    }
    return valid;
}

function validAge(age) {
    var ageError = document.getElementById('ageError');
    var valid = true;
    if (age === '') {
        ageError.innerText = "Please enter your age!";
        valid = false;
    } else if (isNaN(age) || age > 60 || age < 9) {
        ageError.innerText = "Please enter a valid age (10-60)!";
        valid = false;
    } else {
        ageError.innerText = "";
    }
    return valid;
}

function validEmail(email) {
    var emailError = document.getElementById('emailError');
    var valid = true;
    var emv = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (email === '') {
        emailError.innerText = "Please enter your email!";
        valid = false;
    } else if (!emv) {
        emailError.innerText = "Please enter a valid email!";
        valid = false;
    } else {
        emailError.innerText = "";
    }
    return valid;
}
document.getElementById('resetButton').addEventListener('click', function(e) {
 document.getElementById('name').value="";
  document.getElementById('age').value="";
   document.getElementById('email').value="";
 
})