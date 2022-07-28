let start = new Date();
function rnd_color() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"],
    color = "#";
  for (let index = 0; index < 6; index++) {
    let num = arr[Math.floor(Math.random() * arr.length)];
    color += num;
  }
  return color;
}
let genum = document.querySelector(".genum .content");
for (let i = 0; i < 5; i++) {
  let color = document.createElement("div");
  color.classList.add("color");
  color.style.backgroundColor = rnd_color();
  genum.appendChild(color);
}
// setInterval(() => {
//   let arr = Array.from(genum.children);
//   arr.forEach((color) => {
//     color.style.backgroundColor = rnd_color();
//   });
// }, 500);
class User {
  #e;
  #privating;
  static count = 0;
  constructor(id, name, salary, eSalary) {
    this.i = id;
    this.n = name || "unknown";
    this.s = salary < 6000 ? salary + 1000 : salary;
    this.#e = eSalary;
    this.msg = function () {
      return `hello ${this.n} salary is ${this.s}`;
    };
    this.#privating = function () {
      return "private";
    };
    User.count++;
  }
  getSalary() {
    return parseInt(this.#e);
  }
  w_msg() {
    return `Hello from method ${this.n} salary ${this.s}`;
  }
  updateName(newName) {
    this.n = newName;
  }
  manege() {
    return this.#privating() + " A";
  }
  static numMembers() {
    return `${this.count} members created with this class`;
  }
}
// class admin extends User {
//   constructor(id, nameA, premision, e1) {
//     super(id, nameA, null, e1);
//     this.p = premision;
//   }
// }
// class SuperAdmin extends admin {
//   constructor(id, nameS, permisionS, ability) {
//     super(id, nameS, permisionS);
//     this.a = ability;
//   }
// }
// let user1 = new User(104, "ab", 4000, "4736 dolar$");
// let user2 = new User(105, "", 8000);
// let user3 = new User(145, "ef", 6500);

// let admin1 = new admin(457, "@$?>&*", 45, "5000 Geneh");
// let superAdmin1 = new SuperAdmin(457, "@$?>&**71", 7, "A");

// console.log(user1.i);
// console.log(user1.n);
// user1.updateName("ahmad");
// console.log(user1.n);
// console.log(user1.s);
// console.log(user1.getSalary() * 0.3);
// console.log(user1.manege());
// console.log(user1.msg());
// console.log(user1.w_msg());

// console.log("#".repeat(30));

// console.log(user2.i);s
// console.log(user2.n);
// console.log(user2.s);
// console.log(user2.s);
// console.log(user2.msg);
// console.log(user2.w_msg);

// console.log("#".repeat(30));

// console.log(User.numMembers());

// console.log("#".repeat(30));

// console.log(admin1);
// console.log(admin1.getSalary() * 3.5);
// console.log(user2 instanceof User);
// console.log(user2.constructor === User);
// let myStr = "ahmad";
// String.prototype.dBaA = function () {
//   return `.${this}.`;
// };
// const obj = {
//   a: 1,
//   b: 2,
// };
// Object.defineProperty(obj, "c", {
//   // defulte (false)
//   writable: false,
//   enumerable: false, // loop able on it
//   configurable: false, // delete able and change able it
//   value: 3,
// });
// Object.defineProperties(obj, {
//   d: {
//     configurable: true,
//     value: 4,
//   },
//   e: {
//     configurable: true,
//     value: 5,
//   },
//   f: {
//     configurable: true,
//     value: 6,
//   },
// });
// console.log(obj);
// console.log(delete obj.c);
// console.log(Object.getOwnPropertyDescriptor(obj, "e"));
// console.log(Object.getOwnPropertyDescriptors(obj));
// use getFullYear() not getYear()
// let datenow = new Date(0);
// console.log(Date.parse("Dec 15 2007"));
// let datenow = new Date(1197151200000);
// let datenow = new Date("12/15/2007");
// let datenow = new Date("12-15-2007");
// let datenow = new Date("12 15 2007");
// let datenow = new Date("12@15@2007");
// let datenow = new Date("2007-12-15");
// let datenow = new Date("2007-12");
// console.log(datenow.getDate()); // اليوم من الشهر
// console.log(datenow.getFullYear()); // return this year
// console.log(datenow.getMonth()); // return index of this month from all months
// console.log(datenow.getDay()); // return index of this day from this week
// datenow.setDate(40); // day of month
// console.log(datenow);
// datenow.setFullYear(1978);
// console.log(datenow);
// datenow.setMonth(12);
// console.log(datenow);
// let datenow = new Date("96");
// let datenow = new Date(2007, 11, 15, 20, 56, 7);
// let datenow = new Date(2007, 11, 15);
// let datenow = new Date("2007-12-15T02:45:00Z"); // the (T) for (time), the (Z) (for time zone)
// performance.now();
// performance.mark("oct 15 2007");
// console.log(datenow);
// let end = new Date();
// let duration = end - start;
// console.log(duration);
function* gn_nums() {
  yield 1;
  console.log("hello after yield 1");
  yield 2;
  yield 3;
  yield 4;
}
let gner = gn_nums();
console.log(typeof gner);
console.log(gner);

console.log(gner.next());
console.log(gner.next());
console.log(gner.next());
console.log(gner.next());
console.log(gner.next());

for (let i of gn_nums()) {
  console.log(i);
}
for (let i of gner) {
  console.log(i);
}
function* gn1_nums() {
  yield 1;
  yield 2;
  yield 3;
}
function* gn1_let() {
  yield "a";
  yield "b";
  yield "c";
}
function* gn_all() {
  // yield* gn1_nums();
  // yield* gn1_let();
  // return 'R'
  // yield [4, 5, 6];
  // yield* [4, 5, 6];
  let index = 0;
  while (true) {
    yield index++;
  }
}
let gn = gn_all();
console.log(gn.next());
console.log(gn.next());
console.log(gn.next());
console.log(gn.next());
console.log(gn.next());
console.log(gn.next());
console.log(gn.return("Y"));
console.log(gn.next());
console.log(gn.next());
console.log(gn.next());
console.log(gn.next());

console.clear();

import * as copm from "./MyCommponant.js";

console.log(copm.some(), copm.a, copm.arrTest);
let req = new XMLHttpRequest();
req.open("Get", "./repos.json");
req.send();
console.log(req);
req.onreadystatechange = function () {
  // console.log(req.readyState);
  // console.log(req.status);
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    const jsDate = JSON.parse(this.responseText);
    for (let i = 0; i < jsDate.length; i++) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(jsDate[i].name));
      div.classList.add("repo");
      document.body.appendChild(div);
    }
  }
};
