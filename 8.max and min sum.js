// function maxSum(arr, size) {
//   let max_value = -Infinity;
//   if (size > arr.length) {
//     return null;
//   }
//   for (i = 0; i <= arr.length - size; i++) {
//     let attempt = 0;
//     for (j = i; j < i + size; j++) {
//       attempt += arr[j];
//     }
//     if (attempt > max_value) {
//       max_value = attempt;
//     }
//   }
//   console.log(max_value);
//   return max_value;
// }

function maxSum(arr, size) {
  let max_value = 0;
  if (size > arr.length) {
    return null;
  }
  for (i = 0; i < size; i++) {
    max_value += arr[i];
  }
  for (j = size; j < arr.length; j++) {
    let temp = max_value + arr[j] - arr[j - size];
    if (temp > max_value) {
      let max_value = temp;
    }
  }
  console.log(max_value);
}

maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);

function minSum(arr, size) {
  let min_value = Infinity;
  if (size > arr.length) {
    return null;
  }
  for (i = 0; i <= arr.length - size; i++) {
    let attempt = 0;
    for (j = i; j < i + size; j++) {
      attempt += arr[j];
    }
    if (attempt < min_value) {
      min_value = attempt;
    }
  }
  console.log(min_value);
  return min_value;
}

minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);
