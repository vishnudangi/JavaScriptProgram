function createArr(){
  var arr = [];
  for(var i = 1; i<=100; i++){
    arr.push(i);
  }
  return arr;
}

function deleteAltElement(){
  var arr = createArr();
  var temp;
  var j = 0;
  while(arr.length > 1){
    temp = arr[j];
    arr.push(temp);
    arr.shift();
    arr.shift();
  }
  console.log(arr)
}

deleteAltElement()