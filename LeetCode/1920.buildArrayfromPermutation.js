function buildArrayfromPermutation(nums) {
  let number = [];
  for (i = 0; i <= nums.length - 1; i++) {
    number[i] = nums[nums[i]];
  }
  console.log(number);
  return number;
}

let nums = [0, 2, 1, 5, 3, 4]; //[0,1,2,4,5,3]

buildArrayfromPermutation(nums);
