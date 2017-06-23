function mergeSort (arr) {
  if(arr.length < 2){
    return arr;
  }
  var mid = Math.floor(arr.length/2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  return merging(mergeSort(left), mergeSort(right));
}
function merging(A, B){
  var result = [];
  while(A.length && B.length){
    if(A[0] <= B[0]){
      result.push(A.shift());
    }
    else {
      result.push(B.shift());
    }
  }
  while(A.length){
     result.push(A.shift());
  }
  while(B.length){
     result.push(B.shift());
  }
  return result;
}

var test = [1,2,9,3,2,5,14,0];
console.log(mergeSort(test)); // -> [0, 1, 2, 2, 3, 5, 9, 14]