function primenum(num){
  if(num === 2){
    console.log("it 2 is prime number");
    return true;
  }
  for(var i=2; i<num; i++){
    if(num % i === 0){
     // console.log("number is not prime ");
      return false;
    }
    
  }
 
  if(i === num){
    //console.log("numbr is prime number");
    return true;
  }
}
//primenum(21)

function totalprimeFact(n){
  var factors = [];
  for(var j=2; j<n; j++){
    if(n % j === 0){
    if(primenum(j)){
      factors.push(j)
    }
    }
  }
  console.log("factors", factors);
}
totalprimeFact(25)