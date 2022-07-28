// export function get(url) {
//   let req = new XMLHttpRequest();
//   req.open("Get", url);
//   req.send();
//   req.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       return this.responseText;
//     }
//   };
// }
// let app = document.getElementById("app");
function r_name(nameLength) {
  let arr = [
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
  for (let i = 0; i < nameLength; i++) {
    let letter = arr[Math.floor(Math.random() * arr.length)];
    name += letter;
  }
  let reg = /\d{1}\w/i;
  while (reg.test(name)) {
    name = "";
    for (let i = 0; i < nameLength; i++) {
      let letter = arr[Math.floor(Math.random() * arr.length)];
      name += letter;
    }
  }
  return name;
}
function genUser() {
  let users = {};
  for (let i = 0; i < 50; i++) {
    let user = {
      repos: [
        {
          full_name: r_name(10),
        },
        {
          full_name: r_name(5),
        },
        {
          full_name: r_name(7),
        },
        {
          full_name: r_name(8),
        },
        {
          full_name: r_name(12),
        },
        {
          full_name: r_name(10),
        },
        {
          full_name: r_name(13),
        },
        {
          full_name: r_name(9),
        },
      ],
    };
    users[r_name(5)] = user;
  }
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(JSON.stringify(users)));
  app.appendChild(div);
  navigator.clipboard.writeText(JSON.stringify(users));
}
// genUser();
let app = new Vue({
  el: "#app13",
  data: {
    formErrors: [],
    username: null,
    subject: null,
    msg: null,
    maxChars: 10,
    minChar: 3,
  },
  methods: {
    validForm: function (e) {
      this.formErrors = [];
      if (!this.username) {
        this.formErrors.push("username can't be empty");
      }
      if (!this.subject) {
        this.formErrors.push("subject can't be empty");
      }
      if (!this.msg) {
        this.formErrors.push("message can't be empty");
      }
      if (this.username && this.username.length > this.maxChars) {
        this.formErrors.push(
          `username can't be more than ${this.maxChars} charachter`
        );
      } else if (this.username && this.username.length < this.minChar) {
        this.formErrors.push(
          `username can't be less than ${this.minChar} charachter`
        );
      }
      !this.formErrors.length ? true : e.preventDefault();
    },
  },
});
