var msg = prompt("Enter your message:");
if(msg){
    for (var _= 1; _<= 6; _++) {
        document.write(`<h${_}>${msg}</h${_}>`);
    }
}
else {
    document.write("not found your message");
}
