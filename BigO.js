//1+2+3+4+...+n=sum 演算法 1.時間短(較不實際，因不同電腦執行狀況不同，因此分析複雜度) 2.占用記憶體空間少 較佳

//f(n)=3n
function fun1(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(fun1(10));

//f(n)=3
function fun2(n) {
  return ((1 + n) * n) / 2;
}
console.log(fun2(10));

let time1 = window.performance.now();
fun1(10000000);
let time2 = window.performance.now();
let timeDiff1 = (time2 - time1) / 1000;
console.log(`it takes ${timeDiff1} seconds to run fun1`);

let time3 = window.performance.now();
fun2(10000000);
let time4 = window.performance.now();
let timeDiff2 = (time4 - time3) / 1000;
console.log(`it takes ${timeDiff2} seconds to run fun2`);
