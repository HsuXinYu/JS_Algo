//best O(n log n) worst O(n log n) average O(n log n)
function marge(arr1, arr2) {
  let result = [];
  let i1 = 0;
  let i2 = 0;
  while (i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1] < arr2[i2]) {
      result.push(arr1[i1]);
      i1++;
    } else if (arr1[i1] > arr2[i2]) {
      result.push(arr2[i2]);
      i2++;
    }
  }
  while (i1 < arr1.length) {
    result.push(arr1[i1]);
    i1++;
  }
  while (i2 < arr2.length) {
    result.push(arr2[i2]);
    i2++;
  }
  return result;
}

function margeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return marge(margeSort(left), margeSort(right));
  }
}

console.log(margeSort([14, -4, 17, 6, 22, 1, -5]));
