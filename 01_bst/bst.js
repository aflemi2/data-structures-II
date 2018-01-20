function BinarySearchTree (val) {
  this.value = val; //the only line you need.
  this.count = 1;
}

 BinarySearchTree.prototype.insert = function (val) {
  this.count++;
  var dir = val < this.value ? 'left' : 'right';
  if (!this[dir]) {
    this[dir] = new BinarySearchTree(val);
  } else {
    this[dir].insert(val);
  }
};

  // OLD code var currentNode = this;
  // if (val > currentNode.value) {
  //   while (currentNode.right) {currentNode = this.right;}
  //   this.right = new BinarySearchTree (val);
  //   } else {
  //     while (currentNode.left) {currentNode = this.left;}
  //     this.left = new BinarySearchTree (val);
  //   }
  // this.count++;

BinarySearchTree.prototype.contains = function (val) {
  if (this.value === val) {
    return true;
  }
  var direction = val < this.value ? 'left' : 'right';
  if (!this[direction]) {
    return false;
  }
  return this[direction].contains(val);
};

// BST.prototype.traverse = function (fn){
//   if(this.left){
//     this.left.traverse(fn);
//   } fn(this.value);
//   if(this.right){
//     this.right.traverse(fn);
//   }
// };


BinarySearchTree.prototype.depthFirstForEach = function (iterator, order) {
  if (order === 'pre-order') iterator(this.value);
  if (this.left) {
    this.left.depthFirstForEach(iterator, order);
  }
  if (!order || order === 'in-order') iterator(this.value);
  if (this.right) {
    this.right.depthFirstForEach(iterator, order);
  }
    if (order === 'post-order') iterator(this.value);
};

BinarySearchTree.prototype.breadthFirstForEach = function (iterator) {
  var queue = [this];
  var tree;
  while (queue.length) {
   tree = queue.shift();
   iterator(tree.value);
   if (tree.left) queue.push(tree.left);
   if (tree.right) queue.push(tree.right);
  }
};

BinarySearchTree.prototype.size = function () {
  if (this.count)
  return this.count;
};


