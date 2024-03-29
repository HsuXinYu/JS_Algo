class HashTable {
  constructor(size) {
    this.size = size;
    this.table = [];
    for (let i = 0; i < this.size; i++) {
      this.table.push([]);
    }
  }

  parse(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      result += str.charCodeAt(i);
    }
    return result % this.size;
  }

  //division method
  hash1(key) {
    return key % this.size;
  }

  //multiplication
  hash2(key) {
    let parsedKey = 0;
    if (typeof key !== "number") {
      parsedKey = this.parse(key);
    } else {
      parsedKey = key;
    }
    let A = (Math.sqrt(5) - 1) / 2;
    return Math.floor(this.size * ((parsedKey * A) % 1));
  }

  set(key, value) {
    let index = this.hash2(key);
    this.table[index].push({ key, value });
  }

  get(key) {
    let index = this.hash2(key);
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i].key == key) {
        return this.table[index][i];
      }
    }
    return null;
  }

  printAll() {
    console.log(this.table);
  }
}

let myHashTable = new HashTable(6);

// myHashTable.set(11424, "mike");
// myHashTable.set(6254, "james");
// myHashTable.set(4171, "drake");
// myHashTable.set(554, "kevin");

// console.log(myHashTable.get(11424));

myHashTable.set("white", "#FFFFFF");
myHashTable.set("magenta", "#FF00FF");
myHashTable.set("red", "#FF0000");

// console.log(myHashTable.get("red").value);
// myHashTable.printAll();

//object and arrays are hashed
let Harry = {
  fullname: "Harry Potter",
  age: "15",
  school: "Hogwarts",
};

console.log(Harry.fullname);
