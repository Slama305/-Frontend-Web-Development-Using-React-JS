var arr = [];
for (var i = 0; i < 5; i++) {
    var value = prompt("Enter a number:");
    arr.push(Number(value));
}

document.write("<h2 style='color: red;'>u've entered the values of  : <span style='color: black;'> " + arr.join(", ") + "</span></h2>");
var sortrev = arr;
for (var i = 0; i < sortrev.length; i++) {
    for (var j = i + 1; j < sortrev.length; j++) {
        if (sortrev[i] < sortrev[j]) {
            var temp = sortrev[i];
            sortrev[i] = sortrev[j];
            sortrev[j] = temp;
        }
    }
}
document.write("<h2 style='color: red;'>ur values after being sorted descending : <span style='color: black;'> " + sortrev.join(", ") + "</span></h2>");

var sorts =[];
for(var i=sortrev.length -1; i>=0 ;i--){
   sorts.push(sortrev[i]);
}
document.write("<h2 style='color: red;'>ur values after being sorted ascending  : <span style='color: black;'>  " + sorts.join(", ") + "</span></h2>");