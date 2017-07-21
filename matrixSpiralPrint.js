function matrixSpiral(arr){
  var rows = arr.length;
  var cols= arr[0].length;
  var j=0, k=0;
  
  while(j<rows && k<cols){
    for(var i=k; i<cols; i++){
      console.log(arr[j][i])
    }
    j++
    for(var i = j; i<rows; i++){
       console.log(arr[i][cols -1])
    }
    cols--
    for(var i = cols-1; i>=k; i--){
       console.log(arr[rows-1][i])
    }
    rows--
    for(var i = rows -1; i>=j; i--){
       console.log(arr[i][k])
    }
    k++
  }
  
}

var matrix = [ [1,  2,  3,   4],
               [5,  6,  7,  8],
               [9,  10, 11, 12],
               [13, 14, 15, 16]
             ];
matrixSpiral(matrix);