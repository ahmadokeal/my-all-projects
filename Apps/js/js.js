let input = document.querySelector("input"),
  btnGet = document.querySelector(".btn-get"),
  showData = document.querySelector(".show-data");

// ignore this

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
      "-",
      "_",
      ".",
      "Q",
      "W",
      "E",
      "R",
      "T",
      "Y",
      "U",
      "I",
      "O",
      "P",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      "Z",
      "X",
      "C",
      "V",
      "B",
      "N",
      "M",
    ];
    withSpace === true ? letters.push(" ") : "";
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

// ignore that
btnGet.addEventListener("click", () => {
  if (input.value === "") {
    showData.innerHTML = `<span class="text-capitalize text-center fs-1">plaese write github username or github repo name</span>`;
  } else {
    let username = input.value;

    // fetch("/Apps/json.json")
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())

      .then((repos) => {
        showData.innerHTML = "";
        // let reposData = repos[`${username}`];
        let reposData = repos;
        if (reposData !== undefined) {
          // reposData = reposData.repos;
          reposData.forEach((repo) => {
            let mainDiv = document.createElement("div"),
              repoName = document.createTextNode(repo.name),
              theUrl = document.createElement("a"),
              starsSpan = document.createElement("span"),
              starsTxt = document.createTextNode(
                `Stars ${repo.stargazers_count}`
              );
            theUrl.textContent = "Visit";
            theUrl.target = "_blank";
            theUrl.href = `https://github.com/${username}/${repo.name}`;
            starsSpan.appendChild(starsTxt);
            mainDiv.appendChild(repoName);
            mainDiv.appendChild(theUrl);
            mainDiv.appendChild(starsSpan);
            mainDiv.classList.add("repo");
            showData.appendChild(mainDiv);
          });
          let numReposSpan = document.createElement("span");
          numReposSpan.classList.add("position-absolute", "end-0", "numRepos");
          numReposSpan.appendChild(
            document.createTextNode(`number of repos: ${reposData.length}`)
          );
          showData.classList.add("position-relative");
          showData.appendChild(numReposSpan);
        } else {
          for (const [user, val] of Object.entries(repos)) {
            val.repos.forEach((repo) => {
              if (repo.name === username) {
                showData.innerHTML = "";
                let ownerName = document.createElement("div"),
                  starsSpan = document.createElement("span"),
                  type = "",
                  typeSpan = document.createElement("span");
                ownerName.appendChild(document.createTextNode(`${user}`));
                ownerName.classList.add("repo");
                starsSpan.appendChild(
                  document.createTextNode(`Stars ${getStars(val)}`)
                );
                if (getStars(val) < 200000) {
                  type = "normal user";
                } else if (
                  200000 <= getStars(val) &&
                  getStars(val) <= 1000000
                ) {
                  type = "pro user";
                } else if (getStars(val) > 1000000) {
                  type = "Enterprice";
                }
                typeSpan.classList.add("type");
                typeSpan.appendChild(document.createTextNode(type));
                ownerName.appendChild(starsSpan);
                ownerName.appendChild(typeSpan);
                showData.appendChild(ownerName);
              }
            });
          }
        }
      });
  }
});
// Data Of github API
// [1] => username
// [2] => repos [
//            name: randomName,
//            stargazers_count: randomNumber
//            ]
const githubAPI = {};

function genJson() {
  for (let i = 0; i < 100; i++) {
    let user = {
      repos: [],
    };
    for (let index = 0; index < random.number(17, 50); index++) {
      let repo = {
        name: random.name(random.number(3, 22), true),
        id: random.number(1000, 3e6),
        node_id: random.name(random.number(16, 35)),
        stargazers_count: random.number(0, 5e5),
      };
      user.repos.push(repo);
    }
    githubAPI[`${random.name(random.number(3, 15))}`] = user;
  }
  // let theobj = githubAPI;
  // githubAPI = JSON.stringify(githubAPI);
  setClipboard(JSON.stringify(githubAPI));
  // navigator.clipboard.write(githubAPI);
}
// genJson();
function setClipboard(text) {
  const type = "text/plain";
  const blob = new Blob([text], { type });
  const data = [new ClipboardItem({ [type]: blob })];
  navigator.clipboard
    .write(data)
    .then(function () {
      console.log("good");
    })
    .then(function () {
      console.log("bad");
    });
}
function getStars(user) {
  let stars = 0;
  user.repos.forEach((repo) => {
    stars += repo.stargazers_count;
  });
  return stars;
}
