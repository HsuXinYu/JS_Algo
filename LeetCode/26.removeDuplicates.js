var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let s = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        s++;
      }
    }
    nums.splice(i, s);
  }

  console.log(nums);
  return nums.length;
};

// removeDuplicates([1, 1, 2]);
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
