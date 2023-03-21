function defangingAnIPAddress(address) {
  let result = [];
  for (i = 0; i < address.length; i++) {
    if (address[i] != ".") {
      result.push(address[i]);
    } else {
      result.push("[.]");
    }
  }
  let ans = result.join("");
  console.log(ans);
  return ans;
}

let address = "1.1.1.1"; //"1[.]1[.]1[.]1"

defangingAnIPAddress(address);
