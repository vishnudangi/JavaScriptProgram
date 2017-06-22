function BST(){ 
  this.head = null;
}

BST.prototype.insert = function(value){ 
  var node = {
        value:value, 
        left:null, 
        right:null
      }; 

  if(this.head === null){
    this.head = node; 
    return;
  } 

  var current = this.head; 
  while(current){ 
    if(current.value > value){
      if(current.left === null){
        current.left = node;
        break;
      }
      else {
        current = current.left
      }
    } 
    else { 
      if(current.right === null){
        current.right = node;
        break;
      }
      else {
        current = current.right;
      } 
    }
  } 
}

//BST Preorder traversal
BST.prototype.preorder = function(node){
  if(node === null){
    return;
  }
  console.log(node.value);
  this.preorder(node.left);
  this.preorder(node.right);
}

//BST Inorder traversal
BST.prototype.inorder = function(node){
  if(node === null){
    return;
  }
  this.inorder(node.left);
  console.log(node.value);
  this.inorder(node.right);
}

//BST Postorder traversal
BST.prototype.postorder = function(node){
  if(node === null){
    return;
  }
  this.postorder(node.left);
  this.postorder(node.right);
  console.log(node.value);
}

var child = new BST();
child.insert(10);
child.insert(8);
child.insert(12);
child.insert(4);
child.insert(20);
//console.log(child.head)

//child.preorder(child.head);
//child.inorder(child.head);
child.postorder(child.head);

