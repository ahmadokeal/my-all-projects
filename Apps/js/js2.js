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
      " ",
      "<",
      ">",
      "_",
      "-",
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

let numQuestsSpan = document.querySelector(".quiz-info .count span"),
  questName = document.querySelector(".quiz-area h2"),
  bulletsCont = document.querySelector(".bullets .spans"),
  answersArea = document.querySelector(".answers-area"),
  btnSub = document.querySelector(".btn-sub"),
  results = document.querySelector(".results"),
  rightsanswers = 0;
let currentQuest = 0,
  endquiz = false,
  counterInterval,
  choosenAnswerT = false;
function getQuests() {
  let quizApi = new XMLHttpRequest();
  quizApi.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let test = JSON.parse(this.responseText),
        quests = chooseQusts(test),
        qCount = quests.length;
      shuffle(quests);
      createBullets(qCount);
      addQuest(quests[currentQuest], qCount);
      countDown(3, qCount);
      btnSub.addEventListener("click", () => {
        let rightAnswerM = "";
        if (currentQuest < qCount) {
          let rightAnswer = quests[currentQuest].right_answer;
          rightAnswerM = rightAnswer;
        }
        checkerAnswer(rightAnswerM, qCount);
        currentQuest++;
        addQuest(quests[currentQuest], qCount);
        handleBullets();
        handleBulletAnswer(choosenAnswerT);
        clearInterval(counterInterval);
        countDown(3, qCount);
        getResult(qCount);
      });
    }
  };

  quizApi.open("GET", "js/quiz2.json", true);
  quizApi.send();
}
getQuests();
function addQuest(quest, numQuests) {
  if (currentQuest < numQuests) {
    if (quest !== undefined) {
      questName.textContent = quest.title;
      answersArea.innerHTML = "";
      for (let i = 1; i <= 5; i++) {
        let answerTxt = quest[`answer_${i}`];
        if (answerTxt !== undefined) {
          let answer = document.createElement("div"),
            input = document.createElement("input"),
            label = document.createElement("label");
          answer.classList.add("answer");
          input.type = "radio";
          input.name = "answer";
          input.id = `answer_${i}`;
          input.dataset.answer = quest[`answer_${i}`];
          input.classList.add("form-check-input");
          if (i === 1) {
            input.checked = true;
          }
          label.htmlFor = `answer_${i}`;
          label.textContent = answerTxt;
          answer.appendChild(input);
          answer.appendChild(label);
          answersArea.appendChild(answer);
        }
      }
      console.log(quest.right_answer);
    }
  }
}

function createBullets(num) {
  numQuestsSpan.innerHTML = num;
  for (let i = 0; i < num; i++) {
    let bullet = document.createElement("span");
    if (i === 0) {
      bullet.classList.add("on");
    }
    bulletsCont.appendChild(bullet);
  }
}
function checkerAnswer(rightAnswer, qCount) {
  if (currentQuest < qCount) {
    let answers = document.getElementsByName("answer"),
      chooserAnswer;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
        chooserAnswer = answers[i].dataset.answer;
        if (chooserAnswer === rightAnswer) {
          rightsanswers++;
          choosenAnswerT = true;
        } else if (chooserAnswer !== rightAnswer) {
          choosenAnswerT = false;
        }
      }
    }
  }
}
function getResult(qCount) {
  if (currentQuest === qCount) {
    let resultSpan = document.createElement("span");
    if (rightsanswers < qCount / 2) {
      resultSpan.classList.add("bad");
      resultSpan.textContent = "bad";
    } else if (rightsanswers >= qCount / 2 && rightsanswers < qCount) {
      resultSpan.classList.add("good");
      resultSpan.textContent = "good";
    } else if (rightsanswers === qCount) {
      resultSpan.classList.add("perfect");
      resultSpan.textContent = "perfect";
    }
    questName.parentElement.remove();
    answersArea.remove();
    btnSub.remove();
    results.appendChild(resultSpan);
    results.appendChild(
      document.createTextNode(` you answerd ${rightsanswers} from ${qCount}`)
    );
    results.classList.add("show");
  }
}
function handleBullets() {
  let bullets = Array.from(document.querySelectorAll(".bullets .spans span"));
  bullets.forEach((bullet, index) =>
    index === currentQuest ? bullet.classList.add("on") : false
  );
}
function countDown(duration, qCount) {
  if (currentQuest < qCount) {
    counterInterval = setInterval(() => {
      let minutes, seconds;
      minutes = parseInt(duration / 60);
      seconds = parseInt(duration % 60);
      document.querySelector("span.minutes").textContent =
        minutes < 10 ? `0${minutes}` : minutes;
      document.querySelector("span.seconds").textContent =
        seconds < 10 ? `0${seconds}` : seconds;
      if (--duration < 0) {
        clearInterval(counterInterval);
        btnSub.click();
      }
    }, 1000);
  }
}
function handleBulletAnswer(choosenAnswer) {
  let bullets = Array.from(document.querySelectorAll(".bullets .spans span"));
  bullets.forEach((bullet, index) => {
    if (index === currentQuest - 1) {
      if (choosenAnswer === false) {
        bullet.classList.add("false");
      } else if (choosenAnswer === true) {
        bullet.classList.add("true");
      }
    }
  });
}

function shuffle(arr) {
  let current = arr.length,
    temp,
    random;
  while (current > 0) {
    random = Math.floor(Math.random() * current);
    current--;
    temp = arr[current];
    arr[current] = arr[random];
    arr[random] = temp;
  }
  arr.forEach((quest) => {
    let answers = [];
    for (let i = 0; i < 5; i++) {
      if (quest[`answer_${i + 1}`] !== undefined) {
        answers.push(quest[`answer_${i + 1}`]);
      }
    }
    current = answers.length;
    while (current > 0) {
      random = Math.floor(Math.random() * current);
      current--;
      temp = answers[current];
      answers[current] = answers[random];
      answers[random] = temp;
    }
    answers.forEach((answer, index) => {
      quest[`answer_${index + 1}`] = answer;
    });
  });
  return arr;
}
/*
  arr1 => [4, 2, 5, 1, 3] temp = 5
  arr2 => []
*/
function chooseQusts(quizApi) {
  let choosenQuests = [];
  for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * quizApi.length);
    let randomQuest = quizApi[randomNum];
    choosenQuests.forEach((quest) => {
      while (quest === randomQuest) {
        randomNum = Math.floor(Math.random() * quizApi.length);
        randomQuest = quizApi[randomNum];
      }
    });
    choosenQuests.push(randomQuest);
  }
  return choosenQuests;
}

function genQuizApi() {
  let Api = [];
  for (let i = 0; i < 100; i++) {
    let quest = {
      title: random.paragraph(random.number(4, 9)),
    };
    let numAnswers = 0;
    for (let index = 0; index < random.number(3, 5); index++) {
      quest[`answer_${index + 1}`] = random.paragraph(random.number(1, 4));
      numAnswers++;
    }
    quest.right_answer =
      quest[`answer_${Math.floor(Math.random() * numAnswers) + 1}`];
    Api.push(quest);
  }
  navigator.clipboard.writeText(JSON.stringify(Api));
}
// genQuizApi();
/*
  arr => [1,2,3,4,5]
  math.floor(Math.random() * arr.length)
*/
