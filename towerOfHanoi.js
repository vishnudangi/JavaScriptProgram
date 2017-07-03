function towerOfHanoi(n, A, B, C){
  if(n > 0){
    towerOfHanoi(n-1, A, C, B);
    console.log(A + '-' + C);
    towerOfHanoi(n-1, B, A, C)
  }
  
}
  towerOfHanoi(4, "1", "2", "3");