class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.path = "";
    this.queue = [];
  }

  treeInsert(z) {
    let y = null;
    let x = this.root;
    while (x !== null) {
      y = x;
      if (z.value < x.value) {
        x = x.left;
      } else {
        x = x.right;
      }
    }
    if (y == null) {
      this.root = z;
    } else if (z.value < y.value) {
      y.left = z;
    } else {
      y.right = z;
    }
  }

  preOrder(n) {
    if (n != null) {
      this.path += n.value + " ";
      this.preOrder(n.left);
      this.preOrder(n.right);
    }
  }

  inOrder(n) {
    if (n != null) {
      this.inOrder(n.left);
      this.path += n.value + " ";
      this.inOrder(n.right);
    }
  }

  postOrder(n) {
    if (n != null) {
      this.postOrder(n.left);
      this.postOrder(n.right);
      this.path += n.value + " ";
    }
  }

  bftt(n) {
    if (n != null) {
      this.queue.push(n);
      for (let i = 0; i < this.queue.length; i++) {
        let currentNode = this.queue[i];
        if (currentNode != null) {
          if (currentNode.left != null) {
            this.queue.push(currentNode.left);
          }
          if (currentNode.right != null) {
            this.queue.push(currentNode.right);
          }
        }
      }
    }
  }
}

let bst = new BinarySearchTree();

bst.treeInsert(new Node(15));
bst.treeInsert(new Node(6));
bst.treeInsert(new Node(5));
bst.treeInsert(new Node(1));
bst.treeInsert(new Node(13));
bst.treeInsert(new Node(-7));
bst.treeInsert(new Node(3));

// bst.postOrder(bst.root);
bst.bftt(bst.root);
console.log(bst.queue);
