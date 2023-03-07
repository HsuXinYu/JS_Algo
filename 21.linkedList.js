class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) {
      return null;
    } else if (this.length == 1) {
      let temp = this.head;
      this.head = null;
      this.length = 0;
      return temp;
    } else {
      let currentNode = this.head;
      for (let i = 1; i <= this.length - 2; i++) {
        currentNode = currentNode.next;
      }
      let temp = currentNode.next;
      currentNode.next = null;
      this.length--;
      return temp;
    }
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    this.length++;
  }

  shift() {
    if (!this.head) {
      return null;
    } else if (this.length === 1) {
      let temp = this.head;
      this.head = null;
      this.length = 0;
      return temp;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      this.length--;
      return temp;
    }
  }

  insertAt(index, value) {
    if (index > this.length || index < 0) {
      return null;
    } else if (index === 0) {
      this.unshift(value);
      return;
    } else if (index === this.length) {
      this.push(value);
      return;
    }
    let currentNode = this.head;
    let newNode = new Node(value);
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
  }

  removeAt(index) {
    if (index > this.length - 1 || index < 0) {
      return null;
    } else if (index === 0) {
      this.shift();
      return;
    } else if (index === this.length - 1) {
      this.pop();
      return;
    }
    let currentNode = this.head;
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next.next;
    this.length--;
  }

  get(index) {
    if (index > this.length - 1 || index < 0) {
      return null;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      return currentNode.value;
    }
  }

  printAll() {
    if (this.length === 0) {
      console.log("Nothing in this linked list!");
      return;
    } else {
      let currentNode = this.head;
      while (currentNode !== null) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }
}

let myLinkedList = new LinkedList();
myLinkedList.push("amy");
myLinkedList.push("betty");

// let poppedValue = myLinkedList.pop();
// console.log(poppedValue);

// let shiftedtValue = myLinkedList.shift();
// console.log(shiftedValue);

myLinkedList.push("cindy");
myLinkedList.push("david");

// myLinkedList.insertAt(1, "tank");
// myLinkedList.removeAt(3);
console.log(myLinkedList.get(1));

// myLinkedList.printAll();
