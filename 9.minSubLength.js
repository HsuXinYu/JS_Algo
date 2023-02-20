function minSubLength(arr, sum) {
  let start = 0;
  let end = 0;
  let total = 0;
  let minLength = Infinity;

  while (start < arr.length) {
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= sum) {
      let currentLength = end - start;
      if (minLength > currentLength) {
        minLength = currentLength;
      }
      total -= arr[start];
      start++;
    } else if (end >= arr.length) {
      break;
    }
  }
  if (minLength === Infinity) {
    console.log("no answer");
    return 0;
  } else {
    console.log(minLength);
    return minLength;
  }
}

minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11); //2
