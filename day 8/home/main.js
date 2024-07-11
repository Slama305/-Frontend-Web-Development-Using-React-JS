document.getElementById('addButton').addEventListener('click', function(e) {
    var name = document.getElementById('name').value;
    var pass = document.getElementById('pass').value;
    var email = document.getElementById('email').value;
    var n = validName(name);
    var p = validPass(pass);
    var em = validEmail(email);
 
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

function validPass(p) {
    var passError = document.getElementById('passError');
    var valid = true;
    if (p === '') {
        passError.innerText = "Please enter your password!";
        valid = false;
    } else if (p.length < 8) {
        passError.innerText = "Please enter a valid password with at least 8 characters!";
        valid = false;
    } else {
        passError.innerText = "";
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
