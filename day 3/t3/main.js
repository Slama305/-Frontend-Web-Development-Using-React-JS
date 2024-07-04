var arr = [];
for (var i = 0; i < 3; i++) {
    var value = prompt("Enter value :");
    value = parseFloat(value);
    if (isNaN(value)) {
        alert("Please enter a valid number.");
        i--;
    }
    else{
      arr.push(value);
    }  
}
var sum =0 , mul =1 , div =arr[0];
for(var i=0 ;i< 3 ;i++){
   sum+=arr[i];
   mul*=arr[i];
   if(i>0)div/=arr[i];
}
document.write(`<h2 style="color: red;">sum is : </h2>` +sum);
document.write(`<h2 style="color: red;">multiplication is : </h2>` +mul);
document.write(`<h2 style="color: red;">division is : </h2>` +div);