function bubble(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  console.log(arr);
  return arr;
}

let test = [14, -4, 17, 6, 22, 1, -5];
bubble(test);
