function subsequence(str1, str2) {
  let pointer1 = 0;
  let pointer2 = 0;
  if ((str1.length = 0)) {
    console.log(true);
    return true;
  }
  while (pointer2 < str2.length) {
    if (str1[pointer1] == str2[pointer2]) {
      pointer1++;
    }
    if (pointer1 >= str1.length) {
      console.log(pointer1, true);
      return true;
    }
    pointer2++;
  }
  console.log(pointer1, false);
  return false;
}

subsequence("Hello", "Hello Dear"); //true
subsequence("book", "brooklyn"); //ture
subsequence("abc", "bac"); //false
