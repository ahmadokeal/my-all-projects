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
  name: function (length, withSpace = false) {
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
    withSpace === true ? letters.push(" ") : "";
    let name = "";
    for (let i = 0; i < length; i++) {
      let letter = letters[Math.floor(Math.random() * letters.length)];
      name += letter;
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
