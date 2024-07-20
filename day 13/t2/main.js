
let array = [10,20,30,40,50];

function fun(num) {
    let mn = Math.min(...num);
    let mx = Math.max(...num);
    return { mn, mx };
  }
  let {mn, mx} = fun(array);
  
  console.log("min = ", mn); 
  console.log("max = ", mx); 
  