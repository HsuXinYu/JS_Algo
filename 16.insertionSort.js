//best O(n) worst O(n^2) average O(n^2)
function insertionSort(arr) {
  for (i = 0; i <= arr.length - 1; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      //當j不是最小值且j大於key時執行
      arr[j + 1] = arr[j];
      j--;
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
