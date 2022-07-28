let canvas = document.querySelector("canvas"),
  ctx = canvas.getContext("2d"),
  grad = ctx.createLinearGradient(0, 0, 200, 0);
// img1 = document.querySelector("img"),
// thePattern = ctx.createPattern(img1, "repeat-x");

grad.addColorStop(0, "#00e9a4");
grad.addColorStop(1, "#fe2378");
// ctx.fillStyle = grad;
// ctx.fillStyle = thePattern;
// ctx.fillStyle = "#00e9a4";
// ctx.fillRect(0, 0, canvas.width, canvas.height);
// ctx.strokeStyle = grad;
// ctx.strokeStyle = thrPattern;
// ctx.strokeStyle = "#00e9a4";
// ctx.lineWidth = 10;
// ctx.strokeRect(40, 20, 200, 100);
// ctx.font = "32px Tahoma";
// ctx.fillStyle = grad;
// ctx.fillText("Ahmad", 70, 50);
// ctx.strokeStyle = grad;
// ctx.strokeText("Ahmad", 70, 50);
ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.lineTo(canvas.width / 2, canvas.height / 2 - 30);
// ctx.moveTo(canvas.width, 0);
// ctx.lineTo(canvas.width / 2, canvas.height / 2 - 30);
// ctx.moveTo(25, 25);
// ctx.lineTo(25, 250);
// ctx.lineTo(200, 250);
// ctx.lineTo(250, 200);
// ctx.closePath();
// ctx.strokeStyle = "#00b478";
// ctx.lineWidth = 5;
// ctx.fillStyle = "#00a4ff";
// ctx.fill();
// ctx.stroke();
let deg = Math.PI / 180,
  circelRad = Math.PI * 2;
ctx.arc(canvas.width / 2, canvas.height / 2, 120, 0, circelRad * 0.5, true);
ctx.strokeStyle = "#db09ff";
ctx.lineWidth = 10;
// Math.Pi = 1 Radias
ctx.shadowColor = "rgba(0,0,0,0.4)";
ctx.shadowBlur = 18;
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 10;
ctx.save();
ctx.scale(1.5, 2);
ctx.stroke();
ctx.restore();
ctx.fillStyle = "#f8018e";
ctx.translate(50, 50);
ctx.fillRect(15, 15, 100, 100);

// Apps
//  app [1]
let canvas2 = document.getElementById("app1"),
  ctx2 = canvas2.getContext("2d"),
  w = canvas2.width,
  h = canvas2.height,
  colors = ["#f9584c", "#00c4a4", "#f6cf03", "#7a51f2", "#f8018e", "#ff7d0b"];

let posX = 0,
  wColumn = 50;
for (let i = 0; i < 6; i++) {
  ctx2.fillStyle = colors[i];
  ctx2.fillRect(posX, wColumn, w / 6 - 40, h - wColumn);
  posX += 100;
  wColumn += 50;
}
function genCharts(canvas, numColumns, space, decrease = 50) {
  let ctx = canvas.getContext("2d"),
    w = canvas.width,
    h = canvas.height,
    widthColumn = w / numColumns - space,
    posX = 0,
    posY = 0,
    colors = [
      "#f9584c",
      "#00c4a4",
      "#f6cf03",
      "#7a51f2",
      "#f8018e",
      "#ff7d0b",
      "#43c1e5",
      "#3bf273",
    ];
  ctx.font = "32px Tahoma";
  for (let i = 0; i < numColumns; i++) {
    ctx.fillStyle = colors[i];
    ctx.fillRect(posX, posY, widthColumn, h - posY);
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.fillText(`${i + 1}`, posX + widthColumn / 2, h - 20);
    posX += widthColumn + space;
    posY += decrease;
  }
}
let canvas3 = document.getElementById("app2");

genCharts(canvas3, 6, 40);
let canvas4 = document.querySelectorAll("canvas")[3],
  ctx3 = canvas4.getContext("2d");
ctx3.globalAlpha = 0.5;
ctx3.strokeStyle = "#00c4a4";
ctx3.lineWidth = 5;
ctx3.moveTo(canvas4.width / 2, 0);
ctx3.lineTo(canvas4.width / 2, canvas4.height);
ctx3.stroke();
ctx3.font = "30px cursive";
ctx3.fillStyle = "#f8018e";
ctx3.direction = "rtl";
ctx3.textAlign = "start";
ctx3.fillText("start", 300, 50);
ctx3.textAlign = "end";
ctx3.fillText("end", 300, 100);
ctx3.textAlign = "center";
ctx3.fillText("center", 300, 150);
ctx3.textAlign = "left";
ctx3.fillText("left", 300, 200);
ctx3.textAlign = "right";
ctx3.fillText("right", 300, 250);
ctx3.beginPath();
ctx3.strokeStyle = "#fd4598";
ctx3.arc(150, 150, 100, 0, circelRad);
ctx.fill();
ctx3.arcTo(0, 0, 100, 100, 100);
ctx3.stroke();
ctx3.transform(5, 78, 32, 45, 78, 12);
ctx3.clearRect(0, 0, 600, 400);

let canv = document.querySelectorAll("canvas")[4],
  catx = canv.getContext("2d"),
  raf,
  runing = false,
  ball = {
    x: 100,
    y: 100,
    vx: 5,
    vy: 1,
    radius: 25,
    color: "#00c4a4",
    draw: function () {
      catx.beginPath();
      catx.arc(this.x, this.y, this.radius, 0, circelRad, true);
      catx.closePath();
      catx.fillStyle = this.color;
      catx.fill();
    },
  };
function clear() {
  catx.fillStyle = "rgba(255,255,255, 0.3)";
  catx.fillRect(0, 0, canv.width, canv.height);
}
function draw() {
  clear();
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  if (ball.y + ball.vy > canv.height - 30 || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canv.width - 20 || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }
  raf = window.requestAnimationFrame(draw);
}
canv.addEventListener("mousemove", (e) => {
  if (!runing) {
    clear();
    ball.x = e.clientX - 20;
    ball.y = e.clientY - 140;
    ball.draw();
  }
});
canv.addEventListener("click", (e) => {
  if (!runing) {
    raf = window.requestAnimationFrame(draw);
    runing = true;
  }
});
canv.addEventListener("mouseout", function (e) {
  window.cancelAnimationFrame(raf);
  runing = false;
});
ball.draw();

let canv2 = document.querySelectorAll("canvas")[5],
  ctx4 = canv2.getContext("2d");
ctx4.lineWidth = 25;
// ctx4.rotate(360);
const prog = {
  x: canv2.width / 2,
  y: canv2.height / 2,
  prog: 360 * deg,
  vprog: 360,
  vvprog: 2,
  draw: function () {
    ctx4.beginPath();
    ctx4.strokeStyle = "rgb(255,100,100)";
    ctx4.save();
    ctx4.strokeStyle = "#eee";
    ctx4.arc(canv2.width / 2, canv2.height / 2, 150, 0.5, 150 * deg, true);
    ctx4.stroke();
    ctx4.restore();
    ctx4.strokeStyle = "#f8018e";
    ctx4.beginPath();
    ctx4.arc(this.x, this.y, 150, 0.5, this.prog, true);
    ctx4.stroke();
  },
};
function clear2() {
  ctx4.fillStyle = "#fff";
  ctx4.fillRect(0, 0, canv2.width, canv2.height);
}
const random = {
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
function draw2(goal) {
  test = setInterval(() => {
    clear2();
    prog.draw();
    prog.prog = deg * prog.vprog;
    prog.vprog -= prog.vvprog;
    if (prog.vprog <= goal) {
      clearInterval(test);
    }
  }, 10);
}
let btn = document.querySelector("button");
let test = setInterval(() => {
  clear2();
  prog.draw();
  prog.prog = deg * prog.vprog;
  prog.vprog -= prog.vvprog;
  if (prog.vprog <= 150 - 3) {
    clearInterval(test);
  }
}, 10);
btn.onclick = () => {
  prog.prog = 360 * deg;
  prog.vprog = 360;
  clearInterval(test);
  let goal = random.number(150, 360);
  draw2(goal - 3);
  console.log(goal);
};
