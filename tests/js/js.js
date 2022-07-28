let fileEl = document.querySelector("input"),
  fileInp = document.querySelector(".input span:not(.fileName)"),
  show = document.querySelector(".show");

fileInp.addEventListener("click", () => fileEl.click());
fileEl.addEventListener("change", () => {
  const [file] = fileEl.files;
  if (file) {
    const reader = new FileReader();
    let fileName = document.createElement("div");
    fileName.textContent = file.webkitRelativePath;
    console.log(file.webkitRelativePath);
    fileInp.parentElement.appendChild(fileName);
    fileName.classList.add("fileName");
    reader.onload = () => {
      show.textContent = reader.result;
    };
    reader.readAsText(file);
  }
});
const obj = { hello: "world" };
const blob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});
// Other Way To Read Content From Blob As Text
function typedArrayToURL(typedArray, mimeType) {
  return URL.createObjectURL(new Blob([typedArray.buffer], { type: mimeType }));
}

// const bytes = new Uint8Array(59);
const bytes = ["adrtrtrt", "rtrtrt", "uyuyu"];

// for (let i = 0; i < 59; i++) {
//   bytes[i] = 32 + i;
// }

const url = typedArrayToURL(bytes, "text/plain");

const link = document.createElement("a");
link.href = url;
link.innerText = "Open the array URL";
document.body.appendChild(link);

const fileInp2 = document.querySelectorAll("input")[1],
  fileEl2 = document.querySelector(".select-img");

fileEl2.addEventListener("click", () => fileInp2.click());
fileInp2.addEventListener("change", handleImgs, false);
function handleImgs() {
  let imgs = this.files;
  if (imgs) {
    for (let i = 0; i < imgs.length; i++) {
      let theImg = document.createElement("img"),
        mainDiv = document.createElement("div"),
        src = URL.createObjectURL(imgs[i]);
      theImg.src = src;
      theImg.classList.add("img-fluid");
      theImg.height = 100;
      mainDiv.appendChild(theImg);
      mainDiv.classList.add("p-1");
      document.querySelector(".display").appendChild(mainDiv);
    }
  }
}
const obj2 = [
  {
    id: 1,
    first_name: "Stanislas",
    last_name: "Lathom",
    email: "slathom0@boston.com",
    ip_address: "69.75.119.38",
  },
  {
    id: 2,
    first_name: "Joshia",
    last_name: "Kubal",
    email: "jkubal1@columbia.edu",
    ip_address: "15.232.41.108",
  },
  {
    id: 3,
    first_name: "Brian",
    last_name: "Sellars",
    email: "bsellars2@freewebs.com",
    ip_address: "203.16.40.196",
  },
  {
    id: 4,
    first_name: "Emmalyn",
    last_name: "Francescotti",
    email: "efrancescotti3@elpais.com",
    ip_address: "84.20.47.181",
  },
  {
    id: 5,
    first_name: "Witty",
    last_name: "Meardon",
    email: "wmeardon4@free.fr",
    ip_address: "174.235.73.235",
  },
  {
    id: 6,
    first_name: "Otto",
    last_name: "Eard",
    email: "oeard5@slideshare.net",
    ip_address: "40.196.120.219",
  },
  {
    id: 7,
    first_name: "Gwenny",
    last_name: "Kmicicki",
    email: "gkmicicki6@joomla.org",
    ip_address: "174.17.13.63",
  },
  {
    id: 8,
    first_name: "Idaline",
    last_name: "Daws",
    email: "idaws7@yellowpages.com",
    ip_address: "6.19.5.204",
  },
  {
    id: 9,
    first_name: "Shepperd",
    last_name: "Labet",
    email: "slabet8@dailymotion.com",
    ip_address: "192.203.243.254",
  },
  {
    id: 10,
    first_name: "Gerri",
    last_name: "Chamberlaine",
    email: "gchamberlaine9@ebay.com",
    ip_address: "219.41.115.221",
  },
  {
    id: 11,
    first_name: "Garvy",
    last_name: "Staunton",
    email: "gstauntona@blogs.com",
    ip_address: "39.252.232.1",
  },
  {
    id: 12,
    first_name: "Anastassia",
    last_name: "MacGlory",
    email: "amacgloryb@bing.com",
    ip_address: "20.75.63.124",
  },
  {
    id: 13,
    first_name: "Aubrette",
    last_name: "Pessler",
    email: "apesslerc@narod.ru",
    ip_address: "188.228.59.100",
  },
  {
    id: 14,
    first_name: "Maure",
    last_name: "Wandrey",
    email: "mwandreyd@engadget.com",
    ip_address: "141.99.62.22",
  },
  {
    id: 15,
    first_name: "Lionel",
    last_name: "Brewers",
    email: "lbrewerse@ebay.com",
    ip_address: "202.85.12.27",
  },
  {
    id: 16,
    first_name: "Elli",
    last_name: "Wardall",
    email: "ewardallf@rakuten.co.jp",
    ip_address: "238.130.50.119",
  },
  {
    id: 17,
    first_name: "Johnette",
    last_name: "Caswall",
    email: "jcaswallg@e-recht24.de",
    ip_address: "110.104.103.122",
  },
  {
    id: 18,
    first_name: "Nani",
    last_name: "Burgum",
    email: "nburgumh@xing.com",
    ip_address: "236.128.104.144",
  },
  {
    id: 19,
    first_name: "Tansy",
    last_name: "Aluard",
    email: "taluardi@weebly.com",
    ip_address: "133.248.250.79",
  },
  {
    id: 20,
    first_name: "Kara-lynn",
    last_name: "Collopy",
    email: "kcollopyj@kickstarter.com",
    ip_address: "224.34.15.1",
  },
  {
    id: 21,
    first_name: "Witty",
    last_name: "Baildon",
    email: "wbaildonk@samsung.com",
    ip_address: "35.118.174.105",
  },
  {
    id: 22,
    first_name: "Natividad",
    last_name: "Blint",
    email: "nblintl@i2i.jp",
    ip_address: "20.159.23.218",
  },
  {
    id: 23,
    first_name: "Dominga",
    last_name: "Robertz",
    email: "drobertzm@google.cn",
    ip_address: "196.237.122.226",
  },
  {
    id: 24,
    first_name: "Teddy",
    last_name: "Camden",
    email: "tcamdenn@eventbrite.com",
    ip_address: "252.40.30.236",
  },
  {
    id: 25,
    first_name: "Derrick",
    last_name: "Seller",
    email: "dsellero@deliciousdays.com",
    ip_address: "191.18.32.246",
  },
  {
    id: 26,
    first_name: "Penelope",
    last_name: "Jurczak",
    email: "pjurczakp@home.pl",
    ip_address: "205.139.252.207",
  },
  {
    id: 27,
    first_name: "Alphard",
    last_name: "Dadge",
    email: "adadgeq@ow.ly",
    ip_address: "147.139.5.73",
  },
  {
    id: 28,
    first_name: "Maren",
    last_name: "Garoghan",
    email: "mgaroghanr@rambler.ru",
    ip_address: "219.154.213.153",
  },
  {
    id: 29,
    first_name: "Bessy",
    last_name: "Bazelle",
    email: "bbazelles@github.com",
    ip_address: "193.117.129.124",
  },
  {
    id: 30,
    first_name: "Dredi",
    last_name: "McGrirl",
    email: "dmcgrirlt@hibu.com",
    ip_address: "231.29.179.161",
  },
  {
    id: 31,
    first_name: "Calvin",
    last_name: "Rintoul",
    email: "crintoulu@nydailynews.com",
    ip_address: "181.103.176.53",
  },
  {
    id: 32,
    first_name: "Constantia",
    last_name: "Comar",
    email: "ccomarv@about.com",
    ip_address: "43.70.137.101",
  },
  {
    id: 33,
    first_name: "Bradford",
    last_name: "Macon",
    email: "bmaconw@xing.com",
    ip_address: "59.61.209.65",
  },
  {
    id: 34,
    first_name: "Agnella",
    last_name: "Baythorp",
    email: "abaythorpx@seesaa.net",
    ip_address: "192.132.221.216",
  },
  {
    id: 35,
    first_name: "Pattie",
    last_name: "Mattaser",
    email: "pmattasery@hud.gov",
    ip_address: "128.235.172.30",
  },
  {
    id: 36,
    first_name: "Lannie",
    last_name: "Tatem",
    email: "ltatemz@time.com",
    ip_address: "192.110.133.52",
  },
  {
    id: 37,
    first_name: "Theodore",
    last_name: "Dukesbury",
    email: "tdukesbury10@shareasale.com",
    ip_address: "92.197.175.116",
  },
  {
    id: 38,
    first_name: "Reamonn",
    last_name: "Doche",
    email: "rdoche11@shinystat.com",
    ip_address: "221.146.185.0",
  },
  {
    id: 39,
    first_name: "Ginger",
    last_name: "Lakes",
    email: "glakes12@nydailynews.com",
    ip_address: "153.242.17.27",
  },
  {
    id: 40,
    first_name: "Shell",
    last_name: "Deniso",
    email: "sdeniso13@prlog.org",
    ip_address: "48.242.29.189",
  },
  {
    id: 41,
    first_name: "Odella",
    last_name: "Bakesef",
    email: "obakesef14@about.com",
    ip_address: "116.81.229.21",
  },
  {
    id: 42,
    first_name: "Tiffanie",
    last_name: "Masterson",
    email: "tmasterson15@infoseek.co.jp",
    ip_address: "175.66.98.111",
  },
  {
    id: 43,
    first_name: "Shanan",
    last_name: "Sulland",
    email: "ssulland16@paginegialle.it",
    ip_address: "163.171.46.144",
  },
  {
    id: 44,
    first_name: "Corrie",
    last_name: "Pattle",
    email: "cpattle17@hexun.com",
    ip_address: "62.174.87.211",
  },
  {
    id: 45,
    first_name: "Sara",
    last_name: "Copner",
    email: "scopner18@cbsnews.com",
    ip_address: "69.91.119.235",
  },
  {
    id: 46,
    first_name: "Aldous",
    last_name: "Mulberry",
    email: "amulberry19@dedecms.com",
    ip_address: "132.83.29.18",
  },
  {
    id: 47,
    first_name: "Chen",
    last_name: "Edmund",
    email: "cedmund1a@a8.net",
    ip_address: "82.2.165.12",
  },
  {
    id: 48,
    first_name: "Olimpia",
    last_name: "Goulborn",
    email: "ogoulborn1b@foxnews.com",
    ip_address: "179.170.101.143",
  },
  {
    id: 49,
    first_name: "Bernadene",
    last_name: "Ockland",
    email: "bockland1c@eventbrite.com",
    ip_address: "155.57.95.247",
  },
  {
    id: 50,
    first_name: "Chadd",
    last_name: "Witling",
    email: "cwitling1d@rakuten.co.jp",
    ip_address: "14.92.113.148",
  },
  {
    id: 51,
    first_name: "Wiley",
    last_name: "McCord",
    email: "wmccord1e@comcast.net",
    ip_address: "26.14.166.185",
  },
  {
    id: 52,
    first_name: "Eimile",
    last_name: "Nickoll",
    email: "enickoll1f@google.co.uk",
    ip_address: "201.193.26.143",
  },
  {
    id: 53,
    first_name: "Torrie",
    last_name: "Vasse",
    email: "tvasse1g@weather.com",
    ip_address: "18.95.45.203",
  },
  {
    id: 54,
    first_name: "Heath",
    last_name: "Clerke",
    email: "hclerke1h@cbsnews.com",
    ip_address: "221.105.190.27",
  },
  {
    id: 55,
    first_name: "Georg",
    last_name: "Loveard",
    email: "gloveard1i@craigslist.org",
    ip_address: "152.147.34.178",
  },
  {
    id: 56,
    first_name: "Emili",
    last_name: "Croose",
    email: "ecroose1j@addthis.com",
    ip_address: "50.128.253.142",
  },
  {
    id: 57,
    first_name: "Annalee",
    last_name: "Klink",
    email: "aklink1k@qq.com",
    ip_address: "230.165.87.225",
  },
  {
    id: 58,
    first_name: "Julian",
    last_name: "Breinlein",
    email: "jbreinlein1l@globo.com",
    ip_address: "161.245.179.69",
  },
  {
    id: 59,
    first_name: "Hammad",
    last_name: "Bonnavant",
    email: "hbonnavant1m@about.me",
    ip_address: "239.108.110.126",
  },
  {
    id: 60,
    first_name: "Bidget",
    last_name: "Giffen",
    email: "bgiffen1n@is.gd",
    ip_address: "189.93.84.146",
  },
  {
    id: 61,
    first_name: "Demetra",
    last_name: "Lintill",
    email: "dlintill1o@istockphoto.com",
    ip_address: "209.233.216.234",
  },
  {
    id: 62,
    first_name: "Fabiano",
    last_name: "Sproston",
    email: "fsproston1p@home.pl",
    ip_address: "139.137.84.172",
  },
  {
    id: 63,
    first_name: "Hy",
    last_name: "Reuven",
    email: "hreuven1q@bloglines.com",
    ip_address: "179.0.8.2",
  },
  {
    id: 64,
    first_name: "Broddie",
    last_name: "Hapke",
    email: "bhapke1r@alibaba.com",
    ip_address: "220.157.251.53",
  },
  {
    id: 65,
    first_name: "Hayward",
    last_name: "Stollwerk",
    email: "hstollwerk1s@theguardian.com",
    ip_address: "200.251.237.159",
  },
  {
    id: 66,
    first_name: "Prentiss",
    last_name: "Jakubowski",
    email: "pjakubowski1t@xing.com",
    ip_address: "114.230.115.254",
  },
  {
    id: 67,
    first_name: "Marji",
    last_name: "Hunte",
    email: "mhunte1u@g.co",
    ip_address: "246.222.107.91",
  },
  {
    id: 68,
    first_name: "Artie",
    last_name: "Cussen",
    email: "acussen1v@sitemeter.com",
    ip_address: "148.105.230.47",
  },
  {
    id: 69,
    first_name: "Gusella",
    last_name: "Branston",
    email: "gbranston1w@java.com",
    ip_address: "72.215.231.40",
  },
  {
    id: 70,
    first_name: "Joelie",
    last_name: "Askham",
    email: "jaskham1x@pagesperso-orange.fr",
    ip_address: "195.145.172.87",
  },
  {
    id: 71,
    first_name: "Jeno",
    last_name: "Praton",
    email: "jpraton1y@springer.com",
    ip_address: "168.217.101.47",
  },
  {
    id: 72,
    first_name: "Cyndia",
    last_name: "Himsworth",
    email: "chimsworth1z@businesswire.com",
    ip_address: "145.170.198.111",
  },
  {
    id: 73,
    first_name: "Malia",
    last_name: "Lavers",
    email: "mlavers20@plala.or.jp",
    ip_address: "134.190.112.67",
  },
  {
    id: 74,
    first_name: "Rafaellle",
    last_name: "Rapaport",
    email: "rrapaport21@engadget.com",
    ip_address: "29.202.136.117",
  },
  {
    id: 75,
    first_name: "Rockwell",
    last_name: "Wearden",
    email: "rwearden22@cam.ac.uk",
    ip_address: "209.81.9.239",
  },
  {
    id: 76,
    first_name: "Dudley",
    last_name: "Nicklen",
    email: "dnicklen23@moonfruit.com",
    ip_address: "96.171.56.131",
  },
  {
    id: 77,
    first_name: "Olvan",
    last_name: "Dudhill",
    email: "odudhill24@xinhuanet.com",
    ip_address: "71.18.75.90",
  },
  {
    id: 78,
    first_name: "Lynde",
    last_name: "Levington",
    email: "llevington25@blogspot.com",
    ip_address: "29.142.128.80",
  },
  {
    id: 79,
    first_name: "Alley",
    last_name: "Danbye",
    email: "adanbye26@bluehost.com",
    ip_address: "2.39.10.205",
  },
  {
    id: 80,
    first_name: "Loleta",
    last_name: "Rosone",
    email: "lrosone27@xinhuanet.com",
    ip_address: "219.252.13.103",
  },
  {
    id: 81,
    first_name: "Persis",
    last_name: "Pharaoh",
    email: "ppharaoh28@yale.edu",
    ip_address: "42.89.227.196",
  },
  {
    id: 82,
    first_name: "Berty",
    last_name: "Lombardo",
    email: "blombardo29@biblegateway.com",
    ip_address: "94.192.193.196",
  },
  {
    id: 83,
    first_name: "Reidar",
    last_name: "Jolliman",
    email: "rjolliman2a@earthlink.net",
    ip_address: "83.250.208.134",
  },
  {
    id: 84,
    first_name: "Leann",
    last_name: "Figurski",
    email: "lfigurski2b@tinypic.com",
    ip_address: "147.8.167.140",
  },
  {
    id: 85,
    first_name: "Giffer",
    last_name: "Paolini",
    email: "gpaolini2c@boston.com",
    ip_address: "179.18.120.52",
  },
  {
    id: 86,
    first_name: "Benjamin",
    last_name: "Parcell",
    email: "bparcell2d@usgs.gov",
    ip_address: "112.38.100.52",
  },
  {
    id: 87,
    first_name: "Buddy",
    last_name: "Vanner",
    email: "bvanner2e@howstuffworks.com",
    ip_address: "66.200.239.3",
  },
  {
    id: 88,
    first_name: "Cynthea",
    last_name: "Izon",
    email: "cizon2f@reverbnation.com",
    ip_address: "95.88.27.90",
  },
  {
    id: 89,
    first_name: "Reed",
    last_name: "Clift",
    email: "rclift2g@salon.com",
    ip_address: "44.66.4.31",
  },
  {
    id: 90,
    first_name: "Dareen",
    last_name: "Gosney",
    email: "dgosney2h@liveinternet.ru",
    ip_address: "197.202.66.6",
  },
  {
    id: 91,
    first_name: "Scotty",
    last_name: "MacRorie",
    email: "smacrorie2i@unc.edu",
    ip_address: "208.237.51.20",
  },
  {
    id: 92,
    first_name: "Curcio",
    last_name: "McLaverty",
    email: "cmclaverty2j@virginia.edu",
    ip_address: "73.65.3.125",
  },
  {
    id: 93,
    first_name: "Angelica",
    last_name: "Vescovo",
    email: "avescovo2k@wufoo.com",
    ip_address: "249.74.4.51",
  },
  {
    id: 94,
    first_name: "Shellie",
    last_name: "Nazair",
    email: "snazair2l@pcworld.com",
    ip_address: "101.204.69.69",
  },
  {
    id: 95,
    first_name: "Randolf",
    last_name: "Clayton",
    email: "rclayton2m@dyndns.org",
    ip_address: "90.26.48.114",
  },
  {
    id: 96,
    first_name: "Sheeree",
    last_name: "Cannon",
    email: "scannon2n@unblog.fr",
    ip_address: "253.214.154.70",
  },
  {
    id: 97,
    first_name: "Catrina",
    last_name: "Borlease",
    email: "cborlease2o@ed.gov",
    ip_address: "119.147.209.43",
  },
  {
    id: 98,
    first_name: "Wilbur",
    last_name: "Sweetsur",
    email: "wsweetsur2p@nbcnews.com",
    ip_address: "200.112.133.86",
  },
  {
    id: 99,
    first_name: "Paulie",
    last_name: "Axcell",
    email: "paxcell2q@unesco.org",
    ip_address: "211.82.253.197",
  },
  {
    id: 100,
    first_name: "Patty",
    last_name: "Duddle",
    email: "pduddle2r@nydailynews.com",
    ip_address: "239.83.114.187",
  },
];

const blob2 = new Blob([JSON.stringify(obj2, null, 2)], {
  type: "application/json",
});
let link2 = document.createElement("a");
link2.href = URL.createObjectURL(blob2);
link2.setAttribute("download", "test15.json");
link2.textContent = "dowload";
show.parentElement.appendChild(link2);

let dropbox = document.querySelector(".dropBox"),
  btnSelectFiles = document.querySelector(".dropBox > span");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
btnSelectFiles.addEventListener("click", () => {
  let inp = document.createElement("input");
  // inp.style.display = 'none'
  inp.type = "file";
  inp.multiple = true;
  inp.click();
  inp.addEventListener("change", () => {
    let files = inp.files;
    handleFiles(files);
  });
  inp.remove();
});

function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}
function handleFiles(files) {
  dropbox.innerHTML = "";
  for (let i = 0; i < files.length; i++) {
    let mainDiv = document.createElement("div"),
      fileName = document.createTextNode(files[i].name),
      icon = document.createElement("i");
    if (files[i].type.includes("image")) {
      icon.classList.add("far", "fa-image");
      icon.style.color = "#00c4a1";
    } else if (files[i].type.includes("video")) {
      icon.classList.add("far", "fa-film");
      icon.style.color = "#183153";
    } else {
      icon.classList.add("far", "fa-file");
      icon.style.color = "#183153";
    }
    mainDiv.classList.add("file", "d-flex", "align-items-center", "py-1");
    icon.classList.add("fa-2x", "fa-fw", "me-2");
    mainDiv.appendChild(icon);
    mainDiv.appendChild(fileName);
    dropbox.appendChild(mainDiv);
  }
}
let ball = document.querySelector(".ball");
let area = document.querySelector(".area");

area.addEventListener("dragenter", dragenter, false);
area.addEventListener("dragover", dragover, false);
area.addEventListener("drop", drop2, false);
function drop2(e) {
  const dt = e.dataTransfer;
  const el = dt.items;
  el.ball = ball;
  el.ball.style.left = e.pageX;
  el.ball.style.top = e.pageY;
  el.ball.style.left = e.clientX > 0 ? e.clientX : e.clientX + 100;
  console.log(undefined);
}
let req = new XMLHttpRequest();
req.open(
  "GET",
  "https://service.azhar.eg/Natiga/WebService1.asmx/GetNatigawithNationalLite"
);
req.setRequestHeader("PayLoad", '{ "itemId": "30712152604151" }');
req.send();
req.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log(this.response);
  }
};
