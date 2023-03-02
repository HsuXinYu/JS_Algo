//best O(n log n) worst O(n^2) average O(n log n)
let arr = [15, 3, 17, 18, 20, 1, 66];

function partition(p, r) {
  let x = arr[r]; //pivot
  let i = p - 1;
  for (j = p; j <= r - 1; j++) {
    if (arr[j] <= x) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[i + 1];
  arr[i + 1] = arr[r];
  arr[r] = temp;
  return i + 1;
}

function quickSort(p, r) {
  if (p < r) {
    let q = partition(p, r);
    quickSort(p, q - 1);
    quickSort(q + 1, r);
  }
}

quickSort(0, arr.length - 1);
console.log(arr);
