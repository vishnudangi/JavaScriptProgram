function LinkedList(){
 this.head = null;
}

LinkedList.prototype.add = function(value){
  var node = {
    value: value,
    next:null
  };
  var current;
  if(this.head === null){
    this.head = node
  }
  else {
    current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }
  //console.log(current)
  return current;
}
LinkedList.prototype.size = function(){
  var count = 0;
  var temp = this.head;
  while(temp){
    count++;
    temp = temp.next;
  }
  console.log("count", count);
}

LinkedList.prototype.print = function(){
  var temp = this.head
  if(temp === null){
    console.log("LinkedList is empty");
    return;
  }
  while(temp){
    console.log("value",temp.value);
    temp = temp.next;
  }
}
 var list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.size();
list.print();