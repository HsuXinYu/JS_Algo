function RomanToInteger(s) {
  let roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let ans = 0;
  if (s.length < 6) {
    for (i = 0; i < s.length; i++) {
      if (roman[s[i]]) {
        ans += roman[s[i]];
      }
    }
    console.log(ans);
    return ans;
  }
}
RomanToInteger("MCMXCIV"); //1994
