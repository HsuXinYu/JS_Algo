//best O(n) worst O(n^2) average O(n^2)
function insertionSort(arr) {
  for (i = 0; i <= arr.length - 1; i++) {
    //key用來暫存待被交換的值
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
      console.log(arr, key);
    }
    arr[j + 1] = key;
  }
  console.log(arr);
  return arr;
}

let test = [14, -4, 17, 6, 22, 1, -5];

insertionSort(test);

// function insertionSort(arr) {
//   console.log(arr);
//   for (i = 0; i <= arr.length - 1; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     for (; j >= 0 && arr[j] > key; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = key;
//   }
//   console.log(arr);
//   return arr;
// }
