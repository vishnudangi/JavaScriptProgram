function encodeStr(str){
  var count = 1, temp= '';
  for(var i = 0; i<str.length; i++){
    if(str[i] === str[i+1]){
      count++
    }
    else {
      temp = temp + str[i] + count;
      count = 1;
    }
    
  }
  console.log(temp);
}
  var str = 'axabbcccabbb'
  encodeStr(str)