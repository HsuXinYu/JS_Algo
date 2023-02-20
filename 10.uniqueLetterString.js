function uniqueLetterString(str) {
  let start = 0;
  let end = 0;
  let counter = {};
  let maxLength = -Infinity;
  while (end < str.length) {
    if (!counter[str[end]]) {
      counter[str[end]] = 1;
      end++;
      if (end - start > maxLength) {
        maxLength = end - start;
      }
    } else {
      counter[str[start]]--;
      start++;
    }
  }
  if (maxLength === -Infinity) {
    console.log("no answer");
  } else {
    console.log(maxLength);
    return maxLength;
  }
}

uniqueLetterString("thisishowweodit"); //6
