function longestCommonPrefix(strs) {
  let counter = 0;
  let isSame = false;
  for (let i2 = 0; i2 < strs[0].length; i2++) {
    for (let i1 = 1; i1 < strs.length; i1++) {
      if (strs[0].charAt(i2) == strs[i1].charAt(i2)) {
        isSame = true;
      } else {
        isSame = false;
        break;
      }
    }
    if (isSame == true) {
      counter++;
    } else {
      console.log(strs[0].substr(0, counter));
      return counter;
    }
  }
}

let strs = ["flower", "flow", "flight"];

longestCommonPrefix(strs);
