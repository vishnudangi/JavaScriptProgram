// 1.We can do it using two for loop O(n2) complexity.

//2. We can sort Unsorted arry using Quick or merge sort then we can do it O(nlogn)

//3. using O(n) space complexity we do it on O(n) complexity. 
function printDuplicat(arr){
  var hash = {};
  for(var i = 0; i<arr.length; i++){
    if(hash[arr[i]]){
     console.log('this is a duplicate number', arr[i]);
    }
    else {
      hash[arr[i]] = true;
    }
  }
}

var arr = [2, 3, 3, 2, 1, 5, 1, 4, 8];
printDuplicat(arr);

//we can do it constatnt space and O(n) if number is between 0 to N-1
function printDuplicat1(arr){
  for(var i = 0; i<arr.length; i++){
    if(arr[Math.abs(arr[i])]>= 0){
      arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])];
    }
    else {
      console.log("this number is duplicate", Math.abs(arr[i]));
    }
  }
}

printDuplicat1(arr);