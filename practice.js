function practice(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
  return arr;
}

function practice1(arr) {
  for (i = 0; i <= arr.length - 1; i++) {
    let key = arr[i];
    let j = i - 1;
    console.log(arr);
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
    console.log(arr);
  }
  return arr;
}

function practice2(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (j = i; j <= arr.length - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
  return arr;
}

let test = [14, -4, 17, 6, 22, 1, -5];
practice1(test);
