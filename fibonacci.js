//Using Iterative method
function fibbanacci(n){
  var a=0, b=1, c;
  if(n<=2){
    return 1;
  }
  for(var i =2; i<=n; i++){
    c= a+b;
    a=b;
    b=c;
  }
  return c;
}

var fibNumber = fibbanacci(13);
console.log('fibNumber', fibNumber);

//using Recursion
function fibbanacciRecu(n){
  if(n<=2){
    return 1;
  }
  else{
    return fibbanacciRecu(n - 1)+ fibbanacciRecu(n - 2);
  }
}
  
var fib = fibbanacciRecu(12);
console.log("fib", fib);