function isPalindrome(x) {
  let str = x.toString();
  let i = 0;
  let j = str.length - 1;
  while (i <= j) {
    if (str[i] == str[j]) {
      i++;
      j--;
    } else if (str[i] != str[j]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

isPalindrome(121); //true
