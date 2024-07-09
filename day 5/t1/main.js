

// 4.1. Create a function that accepts only 2 parameters and throw exception if number of
// parameters either less than or exceeds 2 parameters.

// function fun(x,y){
//     if(arguments.length!=2){
//         throw "error" ;
//     }
//     else {
//         console.log(x,y);
//     }
// }
// fun(33,5);
// fun(3,4,5);


////////////////////////////////////////////////////////////////////////////
// 4.2. Write your own function that can add n values ensure that all passing parameters are
// numerical values only.  “add”

// function add(arr) {
//     var res = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             res += arr[i];
//         } else {
//             throw ("erorr in values.");
//         }
//     }
//     return res;
// }

// try {
//     var arr = [1, 4, 5, 4, "5", 2, 4, 5];
//     var sum = add(arr);
//     console.log("Sum:", sum);
// } catch (e) {
//     console.error(e.message);
// }

//////////////////////////////////////////////////////////////////////////////////
// 4.3. Write a function that takes any number of parameters and returns them reversed using
// array’s reverse function.


function rev(arr) {
    var res=[];
    for (var i = arr.length -1; i >=0; i--) {
        res.push(arr[i]);
    }
    return res;
}

var arr=[1,2,3,4,5];
var revarr=rev(arr);
console.log(revarr);
for(var i=0 ; i<arr.length ;i++ ){
    console.log(revarr[i]);
}


////////////////////////////////////////////////////////////////////////////
