function QuickSort(A, start, end){ 
  if(start >= end){
    return;
  }
  var pIndex = partition(A, start, end);
  QuickSort(A, start, pIndex - 1);
  QuickSort(A, pIndex + 1, end);
  return A;
}

function partition(A, start, end){
  var pivot = A[end];
  var pIndex = start;
  while(start < end){
    if(A[start] < pivot){
      swap(A, start, pIndex);
      pIndex++;
    }
    start++
  }
  swap(A, pIndex, end);
  return pIndex;
}

function swap(A, x, y){
  var temp = A[x];
  A[x] = A[y];
  A[y] = temp;
}

console.log(QuickSort([11,8,14,3,6,2,7],0,6));
console.log(QuickSort([11,8,14,3,6,2,1, 7],0,7));
console.log(QuickSort([16,11,9,7,6,5,3, 2],0,7));