function grtCmnDiv(a, b){
  if(a ===0 || b === 0){
    return 0;
  }
  if(a === b){
    return a;
  }
  if(a>b){
    if(a % b ===0){
      return b;
    }
    return grtCmnDiv(b, a%b);
  }
  else {
    return grtCmnDiv(b, a);
  }
}
var cmnDiv = grtCmnDiv(138, 69);
console.log("cmnDiv", cmnDiv);

function grtCmnDiv2(a, b){
  if(a ===0 || b === 0){
    return 0;
  }
  if(a === b){
    return a;
  }
  if(a>b){
  return grtCmnDiv2(a-b, b);
  }
  else {
    return grtCmnDiv2(a, b-a);
  }
}
var cmnDiv2 = grtCmnDiv2(50, 10);
console.log("cmnDiv2", cmnDiv2);