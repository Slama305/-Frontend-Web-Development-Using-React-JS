alert("Welcome to my site");
var name1 = prompt("Please enter your name :");
var c;
while (name1) {
    c = prompt("choose a color (red, green, or blue):");
    if(c === "red" || c === "green" || c === "blue") {
        break;
    } 
    else {
        alert("color not found please try agine");
    }
}
c? document.write(`<h2 style="color: ${c};">Welcome, ${name1}</h2>`):document.write("Hello");
