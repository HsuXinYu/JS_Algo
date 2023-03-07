function concatenationOfArray(nums) {
  let numbers = [];
  let i = 0;
  let len = nums.length * 2;
  while (i < len) {
    for (j = 0; j < nums.length; j++) {
      numbers[i] = nums[j];
      i++;
    }
  }
  console.log(numbers);
  return numbers;
}

let nums = [1, 2, 1];

concatenationOfArray(nums);

// ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
