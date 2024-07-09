var img = document.querySelector('img');
img.style.float = 'right';

var nav = document.getElementById("nav");
nav.style.padding = '250px 6px 10px';
nav.style.display = 'flex';
nav.style.flexDirection = 'column';
nav.style.alignItems = 'center';
var menu = document.querySelectorAll('#nav li');
for (var i = 0; i < menu.length; i++) {
    menu[i].style.listStyleType = 'circle';
    menu[i].style.textAlign = 'right'; 
}

var imgCopy = img.cloneNode(true);
imgCopy.style.float = 'left';
document.body.appendChild(imgCopy);

