function maxOccuringChar(str){
  var hashmap = {};
  for(var i = 0; i<str.length; i++){
    if(hashmap[str[i]]){
      hashmap[str[i]]++
    }
    else {
      hashmap[str[i]] = 1;
    }
  }

  var max = 0;
  for(var key in hashmap){
    if(hashmap[key] > max){
      max = hashmap[key];
      var result = key;
    }
    
  }
  return result;
}

console.log(maxOccuringChar("etesethsesdttt"));