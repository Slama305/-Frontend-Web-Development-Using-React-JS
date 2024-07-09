function colors() {
    var hexc = '0123456789ABCDEF';
    var color = '#';//#63d7583
    for (var i = 0; i < 6; i++) {
      color += hexc[Math.round(Math.random()*16)];
    }
    return color;
  }
  var box = document.querySelector('.box');
  box.addEventListener('click', function() {
    var nbox = box.cloneNode(true); 
    var ncolor = colors();
    nbox.style.backgroundColor = ncolor;
    document.body.appendChild(nbox);
  });