//best O(n) worst O(n^2) average O(n^2)
function bubbleSort(arr) {
  let steps = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    let swapping = false;
    for (let j = arr.length - 1; j >= i; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        steps++;
        swapping = true;
      }
    }
    if (swapping == false) {
      break;
    }
  }
  console.log("It takes " + steps + " steps");
  console.log(arr);
}

let test = [];

for (let i = 0; i < 100; i++) {
  test.push(Math.floor(Math.random() * 100));
}

// bubbleSort([4, 1, 5, 2, 7]);
bubbleSort(test);
