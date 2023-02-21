//recusion
function recusion(n) {
  if (n == 1) {
    return 10;
  } else {
    return recusion(n - 1) + 15;
  }
}

console.log(recusion(2));
