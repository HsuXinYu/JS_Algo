//O(n*n)
let arr1 = [15, 3, 6, 8, 24, 16];
let arr2 = [11, 3, 9, 6, 15, 8];
let result = [];

for (i = 0; i < arr1.length; i++) {
  for (j = 0; j < arr2.length; j++) {
    if (arr1[i] == arr2[j]) {
      result.push(arr1[i]);
    }
  }
}

console.log(result);

function intersection(arr1, arr2) {
  let result = [];
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }
  console.log(result);
  return result;
}

intersection([15, 3, 6, 8, 24, 16], [11, 3, 9, 6, 15, 8]);
