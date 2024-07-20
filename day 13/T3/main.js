
  let fruits = ["apple", "strawberry", "banana", "orange", "mango"];


///////////////////////////1/////////////////////////////////

  let isStr = fruits.every(f => typeof f === 'string');
  console.log("Every element is string?", isStr);

///////////////////////////2/////////////////////////////////
 
let start_a = fruits.some(f => f[0]==='a');
console.log("Some elements start 'a' ? ", start_a);

////////////////////////////3////////////////////////////////
let newArr = fruits.filter((f) =>{
  return f[0]==='b' || f[0]==='s';
});
console.log("New array : ", newArr); 

////////////////////////////4///////////////////////////////////
let likes = fruits.map(f => {
  return `I like ${f}`;
});
console.log( likes);

////////////////////////////5/////////////////////////////
likes.forEach(f => console.log(f));

///////////////////////////////////////////////////////////////

// gui 
let imgs = document.querySelectorAll('img');


var str = document.getElementById('str');
var startA = document.getElementById('startA');
var filter = document.getElementById('filter');
var all = document.getElementById('all');

function show(fun) {
  for (var i = 0; i < imgs.length; i++) {
      var img = imgs[i];
      var names = img.alt;
      if (fun(names)) {
          img.style.display = 'inline';
      } else {
          img.style.display = 'none';
      }
  }
}


str.addEventListener('click', function() {
  show(function() {
      return isStr; 
  });
});

startA.addEventListener('click', function() {
  show(function(f) {
      return f[0] === 'a';
  });
});

filter.addEventListener('click', function() {
  show(function(f) {
      return f[0] === 'b' || f[0] === 's';
  });
});

all.addEventListener('click', function() {
  show(function() {
      return true;
  });
});