var isValid = function (s) {
  let arr = [];
  let times = s.length / 2;

  if (Number.isInteger(times)) {
    for (let i = 0; i < s.length; i++) {
      if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
        arr.push(s[i]);
      }

      // console.log(arr, arr.length, s[i]);
      let last = arr[arr.length - 1];
      if (last == "(" && s[i] == ")") {
        arr.pop();
      } else if (s[i] == ")") {
        console.log(false);
        return false;
      }

      if (last == "[" && s[i] == "]") {
        arr.pop();
      } else if (s[i] == "]") {
        console.log(false);
        return false;
      }
      if (last == "{" && s[i] == "}") {
        arr.pop();
      } else if (s[i] == "}") {
        console.log(false);
        return false;
      }
    }
    // console.log(arr);

    if (arr.length == 0) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  } else {
    console.log(false);
    return false;
  }
};

// isValid("()"); //true
// isValid("(]"); //false
// isValid("()[]{}"); //true
// isValid("{[]}"); //true
// isValid("([)]"); //false
// isValid("([)]"); //false
isValid("([}}])"); //false
