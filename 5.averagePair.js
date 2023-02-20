// O(n^2)
function averagePair(arr, avg) {
  let result = [];
  // let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // count++;
      if ((arr[i] + arr[j]) / 2 == avg) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  // console.log(count);
  console.log(result);
  return result;
}

averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);

//pointer
function pointer(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];
  while (right >= left) {
    let temp_avg = (arr[left] + arr[right]) / 2;
    if (temp_avg > avg) {
      right--;
    } else if (temp_avg < avg) {
      left++;
    } else if (temp_avg == avg) {
      result.push([arr[left], arr[right]]);
      right--;
      left++;
    }
  }
  console.log(result);
  return result;
}

pointer([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);
