//f(n)=n*n+3n+4
function example(n) {
  let counter = 0;
  for (let i = 0; i < 3 * n; i++) {
    // console.log("Hello");
    counter++;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // console.log("Hello");
      counter++;
    }
  }

  // console.log("Hello");
  // console.log("Hello");
  // console.log("Hello");
  // console.log("Hello");
  counter += 4;

  return counter;
}

// example(2);
for (let i = 1; i < 10; i++) {
  console.log(`example${i} will print out ` + example(i) + "Hello.");
}

//Big O in Objects and Arrays
let n = 5;
let arr = [1, 3, 5, 7, 9];

for (let i = 0; i < n; i++) {
  arr.unshift(10);
}
console.log(arr);
//for loop為O(n),unshift為O(n),此程式為O(n*n)
