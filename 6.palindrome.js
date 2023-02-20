function palindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (right >= left) {
    if (str[left] == str[right]) {
      left++;
      right--;
    } else if (str[left] != str[right]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

palindrome("tacocat"); // true
palindrome("amanaplanacanalpanama"); // true
palindrome("asdfsafeaw"); // false
