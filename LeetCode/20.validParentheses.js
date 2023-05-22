var isValid = function (s) {
  let counter = {};
  for (let i = 0; i < s.length; i++) {
    if (counter[s[i]]) {
      counter[s[i]]++;
    } else {
      counter[s[i]] = 1;
    }
  }
  // console.log(counter["["]);
  if (
    counter["("] == counter[")"] &&
    counter["{"] == counter["}"] &&
    counter["["] == counter["]"]
  ) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
};

// isValid("()"); //true
// isValid("(]"); //false
// isValid("()[]{}"); //true
isValid("{[]}"); //true
isValid("(]"); //false
isValid("([)]"); //flase
