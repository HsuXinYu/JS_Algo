//best O(n) worst O(n^2) average O(n^2)
function insertionSort(arr) {
  for (j = 0; j <= arr.length - 1; j++) {
    let key = arr[j];
    let i = j - 1;
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i -= 1;
    }
    arr[i + 1] = key;
  }
  console.log(arr);
  return arr;
}

let test = [14, -4, 17, 6, 22, 1, -5];

insertionSort(test);
