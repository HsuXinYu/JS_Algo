function romanToInteger(s) {
  let roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let ans = 0;
  let left = 0;
  let right = left + 1;
  while (left < s.length) {
    if (roman[s[left]] >= roman[s[right]]) {
      ans += roman[s[left]];
    } else if (roman[s[left]] < roman[s[right]]) {
      let temp = roman[s[right]] - roman[s[left]];
      ans = ans - roman[s[right]] + temp;
    } else if (right >= s.length) {
      break;
    }
    left++;
    right++;
  }
  ans = ans + roman[s[left]];
  console.log(ans);
  return ans;
}

romanToInteger("III"); //3
romanToInteger("LVIII"); //58
romanToInteger("MCMXCIV"); //1994
