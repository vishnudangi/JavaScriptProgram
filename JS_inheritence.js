function parent(a, b){
  //console.log("test", a, b);
  this.a = a;
  this.b = b;
}

parent.prototype.add = function(){
  return this.a+this.b;
}

function child(a, b, c){
  console.log("multi");
  parent.call(this, a, b);
  this.c = c;
}


child.prototype = Object.create(parent.prototype);
child.prototype.constructor = child;

child.prototype.multiply = function(){
  return this.a * this.c;
}

//function overloading JS
child.prototype.add = function(){
  return this.a+this.c;
}

var obj = new child(10, 20, 30);
console.log(obj.add());
//console.log(obj.multiply())