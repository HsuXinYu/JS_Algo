function twoSum(nums, target) {
  let result = [];
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        result.push(i, j);
      }
    }
  }
  console.log(result);
  return result;
}

twoSum([2, 7, 11, 15], 9); //[0,1]
