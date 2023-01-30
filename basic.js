//array
// let arr = ["Amy", "Bate", "Cindy"];

// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// arr.forEach((person, index) => {
//   console.log(person);
//   console.log(index);
// });

//object
// let Herry = {
//   mame: "Harry Potter",
//   age: "40",

//   sayHi() {
//     console.log("Harry says hi to you");
//   },
// };

// Herry.sayHi();

//funtion
// function add(n1, n2) {
//   return n1 + n2;
// }
// console.log(add(10, 15));

//class
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

let c1 = new Circle(5);
let c2 = new Circle(10);
console.log(c2.radius);
console.log(c2.getArea());
