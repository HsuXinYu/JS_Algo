class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    if (this.values === 0) {
      this.values.push(newNode);
      return true;
    }

    this.values.push(newNode);
    let newIndex = this.values.length - 1;
    let parentIndex = Math.floor((newIndex - 1) / 2);
    while (
      parentIndex >= 0 &&
      this.values[newIndex].priority > this.values[parentIndex].priority
    ) {
      let result = this.values[parentIndex];
      this.values[parentIndex] = this.values[newIndex];
      this.values[newIndex] = result;

      newIndex = parentIndex;
      parentIndex = Math.floor((newIndex - 1) / 2);
    }
  }
}

let pq = new PriorityQueue();
pq.enqueue("Eat", 15);
pq.enqueue("Learn Javascript", 20);
pq.enqueue("Sleep", 10);

console.log(pq);
