function longestCommonPrefix(strs) {
  let counter = 0;
  let isSame = false;

  if (strs[0] == "") {
    console.log("");
    return "";
  } else if (strs.length == 1) {
    console.log(strs[0]);
    return strs[0];
  }

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
    } else if (isSame == false) {
      break;
    } else if (counter == 0) {
      console.log("");
      return "";
    }
  }
  console.log(strs[0].substring(0, counter));
  return strs[0].substring(0, counter);
}

// let strs = [""]; //""
// let strs = ["a"]; //"a"
// // let strs = ["flower", "flow", "flight"]; //"fl"
let strs = ["flower", "flower", "flower", "flower"]; //flower
// let strs = ["cir", "car"]; //c

longestCommonPrefix(strs);
