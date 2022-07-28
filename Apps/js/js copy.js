// let plates = document.querySelector("header .tab.plates"),
//   tasks = document.querySelector("header .tasks"),
//   Pplates = document.querySelector(".container-fluid > .content.plates"),
//   btnGen = document.querySelector(".plates + .btnGen"),
//   libPlates = [],
//   btn_lib = document.querySelector(".sidebar > ul.links > li.library"),
//   library = document.querySelector(
//     ".container-fluid > .plates + .btnGen + .content.library"
//   ),
//   btn_plates = document.querySelector(".sidebar > ul.links > li.paint");
// btn_plates.addEventListener("click", () => {
//   btn_lib.classList.remove("active");
//   library.classList.remove("active");
//   Pplates.classList.add("active");
//   btnGen.classList.add("active");
//   btn_plates.classList.add("active");
// });
// btn_lib.addEventListener("click", () => {
//   Pplates.classList.remove("active");
//   btnGen.classList.remove("active");
//   btn_plates.classList.remove("active");
//   btn_lib.classList.add("active");
//   library.classList.add("active");
// });
// if (localStorage.getItem("libPlates")) {
//   libPlates = JSON.parse(window.localStorage.getItem("libPlates"));
//   downloadPlates(libPlates);
// }
// plates.addEventListener("click", () => {
//   tasks.classList.remove("active");
//   plates.classList.add("active");
// });
// tasks.addEventListener("click", () => {
//   plates.classList.remove("active");
//   tasks.classList.add("active");
// });
// Object.prototype.randomColor = function () {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"],
//     color = "#";
//   for (let i = 0; i < 6; i++) {
//     let rNum = arr[Math.floor(Math.random() * arr.length)];
//     color += rNum;
//   }
//   this.style.backgroundColor = color;
//   return color;
// };
// function R_Cs() {
//   let arr = Array.from(Pplates.children);
//   arr.forEach((child) => {
//     if (!child.classList.contains("btnGen")) {
//       child.remove();
//     }
//   });
//   for (let i = 0; i < 9; i++) {
//     let div = document.createElement("div"),
//       plate = document.createElement("ul"),
//       desc = document.createElement("div");
//     div.classList.add("plate");
//     plate.classList.add("colors");
//     let colorM = "",
//       PlatesColors = [];
//     for (let index = 0; index < 4; index++) {
//       let color = document.createElement("li"),
//         span = document.createElement("div"),
//         colorA = color.randomColor();
//       span.appendChild(document.createTextNode(colorA));
//       colorM = colorA;
//       color.appendChild(span);
//       span.addEventListener("click", () => {
//         navigator.clipboard.writeText(span.textContent);
//         let msg = document.createElement("div"),
//           icon = document.createElement("i"),
//           btn_close = document.createElement("div"),
//           iconC = document.createElement("i"),
//           txt = document.createElement("div");
//         msg.classList.add("copy-msg");
//         icon.classList.add("fa", "fa-circle-check");
//         txt.classList.add("text");
//         txt.appendChild(icon);
//         txt.appendChild(document.createTextNode("Copied to Clipboard."));
//         btn_close.classList.add("btn-cansel");
//         iconC.classList.add("fa", "fa-xmark");
//         btn_close.appendChild(iconC);
//         msg.appendChild(txt);
//         msg.appendChild(btn_close);
//         Pplates.appendChild(msg);
//         setTimeout(() => {
//           msg.classList.add("remove");
//           setTimeout(() => {
//             msg.remove();
//           }, 450);
//         }, 3000);
//         btn_close.addEventListener("click", () => {
//           msg.remove();
//         });
//       });
//       plate.appendChild(color);
//       PlatesColors.push(colorA);
//     }
//     desc.classList.add("desc");
//     let icon = document.createElement("i");
//     icon.classList.add("far", "fa-heart", "fa-2x");
//     icon.addEventListener("click", () => {
//       icon.classList.toggle("far");
//       icon.classList.toggle("fas");
//       icon.classList.toggle("liked");
//     });
//     icon.addEventListener("click", () => {
//       uploadPlate(PlatesColors);
//       downloadPlates(libPlates);
//     });
//     desc.appendChild(icon);
//     div.appendChild(plate);
//     div.appendChild(desc);
//     Pplates.appendChild(div);
//   }
// }
// R_Cs();
// btnGen.addEventListener("click", () => {
//   R_Cs();
// });

// // function
// function uploadPlate(colors) {
//   libPlates.push(colors);
//   window.localStorage.setItem("libPlates", JSON.stringify(libPlates));
// }
// function downloadPlates(plates) {
//   library.innerHTML = "";
//   for (let i = 0; i < plates.length; i++) {
//     let div = document.createElement("div"),
//       plate = document.createElement("ul");
//     div.classList.add("plate");
//     plate.classList.add("colors");
//     for (let index = 0; index < plates[i].length; index++) {
//       let color = document.createElement("li"),
//         span = document.createElement("div"),
//         colorA = plates[i][index];
//       color.style.backgroundColor = colorA;
//       span.appendChild(document.createTextNode(colorA));
//       color.appendChild(span);
//       span.addEventListener("click", () => {
//         navigator.clipboard.writeText(span.textContent);
//         let msg = document.createElement("div"),
//           icon = document.createElement("i"),
//           btn_close = document.createElement("div"),
//           iconC = document.createElement("i"),
//           txt = document.createElement("div");
//         msg.classList.add("copy-msg");
//         icon.classList.add("fa", "fa-circle-check");
//         txt.classList.add("text");
//         txt.appendChild(icon);
//         txt.appendChild(document.createTextNode("Copied to Clipboard."));
//         btn_close.classList.add("btn-cansel");
//         iconC.classList.add("fa", "fa-xmark");
//         btn_close.appendChild(iconC);
//         msg.appendChild(txt);
//         msg.appendChild(btn_close);
//         library.appendChild(msg);
//         setTimeout(() => {
//           msg.classList.add("remove");
//           setTimeout(() => {
//             msg.remove();
//           }, 450);
//         }, 3000);
//         btn_close.addEventListener("click", () => {
//           msg.remove();
//         });
//       });
//       plate.appendChild(color);
//     }
//     div.appendChild(plate);
//     library.appendChild(div);
//   }
// }
// Vue.js
function randomNum(length) {
  let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let theNum = [];
  for (let i = 0; i < length; i++) {
    let num = nums[Math.floor(Math.random() * nums.length)];
    theNum.push(num);
  }
  return +theNum.join("");
}
function randomName(length) {
  let letters = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];
  let name = "";
  for (let i = 0; i < length; i++) {
    let letter = letters[Math.floor(Math.random() * letters.length)];
    name += letter;
  }
  let reg = /\d{1}\w/i;
  while (reg.test(name)) {
    name = "";
    for (let i = 0; i < length; i++) {
      let letter = letters[Math.floor(Math.random() * letters.length)];
      name += letter;
    }
  }
  return name;
}
function randomParagraph(lengthParagraph) {
  let paragraph = "";
  for (let i = 0; i < lengthParagraph; i++) {
    let word = randomName(randomNum(1));
    paragraph += `${word} `;
  }
  return paragraph;
}
function randomStatus(statue, notStatue) {
  let statues = [statue, notStatue],
    finalStatue = statues[Math.floor(Math.random() * statues.length)];
  return finalStatue;
}
function randomDate(
  fromYear = "1999",
  fromMonth = "1",
  fromDate = "1",
  toYear = `${new Date().getFullYear()}`,
  toMonth = `${new Date().getMonth() + 1}`,
  toDate = `${new Date().getDate()}`,
  formated = "y-m-d"
) {
  if (+fromYear > +toYear) {
    [fromYear, toYear] = [toYear, fromYear];
  }
  if (+fromMonth > +toMonth) {
    [fromMonth, toMonth] = [toMonth, fromMonth];
  }
  if (+fromDate > +toDate) {
    [fromDate, toDate] = [toDate, fromDate];
  }
  fromYear == "" || fromYear == null ? (fromYear = "1999") : "";
  fromMonth == "" || fromMonth == null ? (fromMonth = "1") : "";
  fromDate == "" || fromDate == null ? (fromDate = "1") : "";
  toYear == "" || toYear == null
    ? (toYear = `${new Date().getFullYear()}`)
    : "";
  toMonth == "" || toMonth == null
    ? (toMonth = `${new Date().getMonth() + 1}`)
    : "";
  toDate == "" || toDate == null ? (toDate = `${new Date().getDate()}`) : "";
  (theYear = `${randomNum(4)}`),
    (theMonthLengths = [
      `${randomNum(fromMonth.length)}`,
      `${randomNum(toMonth.length)}`,
    ]),
    (theMonth =
      theMonthLengths[Math.floor(Math.random() * theMonthLengths.length)]),
    (theDateLengths = [
      `${randomNum(fromDate.length)}`,
      `${randomNum(toDate.length)}`,
    ]),
    (theDay =
      theDateLengths[Math.floor(Math.random() * theDateLengths.length)]);
  while (+theYear < +fromYear || +theYear > +toYear) {
    theYear = `${randomNum(4)}`;
  }
  while (+theMonth < +fromMonth || +theMonth > +toMonth) {
    (theMonthLengths = [
      `${randomNum(fromMonth.length)}`,
      `${randomNum(toMonth.length)}`,
    ]),
      (theMonth =
        theMonthLengths[Math.floor(Math.random() * theMonthLengths.length)]);
  }
  while (+theDay < +fromDate || +theDay > +toDate) {
    (theDateLengths = [
      `${randomNum(fromDate.length)}`,
      `${randomNum(toDate.length)}`,
    ]),
      (theDay =
        theDateLengths[Math.floor(Math.random() * theDateLengths.length)]);
  }
  let theDate = formated;
  theDate = theDate.replace("y", `${theYear}`);
  theDate = theDate.replace("m", `${theMonth}`);
  theDate = theDate.replace("d", `${theDay}`);
  // theDate = `${theYear}${separetor}${theMonth}${separetor}${theDay}`;
  return theDate;
}
function randomNumber(min, max) {
  let arr = [...Array(max.toString().length).keys()];
  let arr2 = [];
  arr.forEach((e) => {
    let val5 = randomNum(e + 1);
    arr2.push(val5);
  });
  let theNum = arr2[Math.floor(Math.random() * arr2.length)];
  while (theNum < min || theNum > max) {
    arr = [...Array(max.toString().length).keys()];
    arr2 = [];
    arr.forEach((e) => {
      let val5 = randomNum(e + 1);
      arr2.push(val5);
    });
    theNum = arr2[Math.floor(Math.random() * arr2.length)];
  }
  return theNum;
}
const random2 = {
  num: function (length) {
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let theNum = [];
    for (let i = 0; i < length; i++) {
      let num = nums[Math.floor(Math.random() * nums.length)];
      theNum.push(num);
    }
    return +theNum.join("");
  },
  statues: function (statue, notStatue) {
    let statues = [statue, notStatue],
      finalStatue = statues[Math.floor(Math.random() * statues.length)];
    return finalStatue;
  },
  name: function (length) {
    let letters = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
    ];
    let name = "";
    for (let i = 0; i < length; i++) {
      let letter = letters[Math.floor(Math.random() * letters.length)];
      name += letter;
    }
    let reg = /\d{1}\w/i;
    while (reg.test(name)) {
      name = "";
      for (let i = 0; i < length; i++) {
        let letter = letters[Math.floor(Math.random() * letters.length)];
        name += letter;
      }
    }
    return name;
  },
  paragraph: function (lengthParagraph) {
    let paragraph = "";
    for (let i = 0; i < lengthParagraph; i++) {
      let word = random.name(random.num(1));
      paragraph += `${word} `;
    }
    return paragraph;
  },
  date: (
    fromYear = "1999",
    fromMonth = "1",
    fromDate = "1",
    toYear = `${new Date().getFullYear()}`,
    toMonth = `${new Date().getMonth() + 1}`,
    toDate = `${new Date().getDate()}`,
    formated = "$y-$m-$d"
  ) => {
    fromYear == "" || fromYear == null ? (fromYear = "1999") : "";
    fromMonth == "" || fromMonth == null ? (fromMonth = "1") : "";
    fromDate == "" || fromDate == null ? (fromDate = "1") : "";
    toYear == "" || toYear == null
      ? (toYear = `${new Date().getFullYear()}`)
      : "";
    toMonth == "" || toMonth == null
      ? (toMonth = `${new Date().getMonth() + 1}`)
      : "";
    toDate == "" || toDate == null ? (toDate = `${new Date().getDate()}`) : "";
    if (+fromYear > +toYear) {
      [fromYear, toYear] = [toYear, fromYear];
    }
    if (+fromMonth > +toMonth) {
      [fromMonth, toMonth] = [toMonth, fromMonth];
    }
    if (+fromDate > +toDate) {
      [fromDate, toDate] = [toDate, fromDate];
    }
    console.log(fromYear, fromMonth, fromDate, toYear, toMonth, toDate);
    let theYear = `${random.num(4)}`,
      theMonthLengths = [
        `${random.num(fromMonth.length)}`,
        `${random.num(toMonth.length)}`,
      ],
      theMonth =
        theMonthLengths[Math.floor(Math.random() * theMonthLengths.length)],
      theDateLengths = [
        `${random.num(fromDate.length)}`,
        `${random.num(toDate.length)}`,
      ],
      theDay =
        theDateLengths[Math.floor(Math.random() * theDateLengths.length)];
    while (+theYear < +fromYear || +theYear > +toYear) {
      theYear = `${random.num(4)}`;
    }
    while (+theMonth < +fromMonth || +theMonth > +toMonth) {
      (theMonthLengths = [
        `${random.num(fromMonth.length)}`,
        `${random.num(toMonth.length)}`,
      ]),
        (theMonth =
          theMonthLengths[Math.floor(Math.random() * theMonthLengths.length)]);
    }
    while (+theDay < +fromDate || +theDay > +toDate) {
      (theDateLengths = [
        `${random.num(fromDate.length)}`,
        `${random.num(toDate.length)}`,
      ]),
        (theDay =
          theDateLengths[Math.floor(Math.random() * theDateLengths.length)]);
    }
    let nameMonths = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let nameMoth = nameMonths[theMonth - 1];
    let theDate = formated;
    theDate = theDate.replace("$y", `${theYear}`);
    theDate = theDate.replace("$m", `${theMonth}`);
    theDate = theDate.replace("$nM", `${nameMoth}`);
    theDate = theDate.replace("$d", `${theDay}`);
    return theDate;
  },
  number: function (min, max) {
    let arr = [...Array(max.toString().length).keys()];
    let arr2 = [];
    arr.forEach((e) => {
      let val5 = random.num(e + 1);
      arr2.push(val5);
    });
    let theNum = arr2[Math.floor(Math.random() * arr2.length)];
    while (theNum < min || theNum > max) {
      arr = [...Array(max.toString().length).keys()];
      arr2 = [];
      arr.forEach((e) => {
        let val5 = random.num(e + 1);
        arr2.push(val5);
      });
      theNum = arr2[Math.floor(Math.random() * arr2.length)];
    }
    return theNum;
  },
};
function cls() {
  console.clear();
}
