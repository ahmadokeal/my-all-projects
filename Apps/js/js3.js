let req = new XMLHttpRequest();

let code = "";
req.onreadystatechange = () => {
  if (req.readyState === 4 && req.status === 200) {
    code = req.responseText;
  }
};

req.open("GET", "./js/memory game.js");
req.send();

let box = document.querySelector(".box"),
  currentLet = 0;
let writer = setInterval(() => {
  box.textContent += code[currentLet];
  currentLet++;
  if (currentLet == code.length) {
    clearInterval(writer);
  }
}, 5);
function highLight(text) {
  text.replaceAll("if", '<span class="condtion"></span>');
}
