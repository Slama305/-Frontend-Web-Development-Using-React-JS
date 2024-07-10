var imgs=[
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",

]
var index=0;
var img=document.querySelector("img");
img.src=imgs[0];

function show(n) {
  img.src =imgs[n];
}

function next() {
    if(index==8)index=0;
    index++;
    show(index);
}

function prev() {
    if(index==0)index=9;
    index--;
    show(index);
}
var start;
function Slideshow() {
  start = setInterval(next, 2000);
}

function stop() {
  clearInterval(start);
}
document.querySelector('.next').addEventListener('click', next);
document.querySelector('.prev').addEventListener('click', prev);
document.querySelector('.slideshow').addEventListener('click', Slideshow);
document.querySelector('.stop').addEventListener('click', stop);
