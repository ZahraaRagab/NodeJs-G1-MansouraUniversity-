var body = document.querySelector("body"),
  input1 = document.querySelector(".green-input"),
  input2 = document.querySelector(".blue-input"),
  lightBtn = document.querySelector(".light"),
  darkBtn = document.querySelector(".dark"),
  h1 = document.querySelector("h1");

function setGradient() {
  body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
}

function darkMode() {
  body.style.background = "#2d2d2d";
  h1.style.color = "#fff";
}
function lightMode() {
  body.style.background = "#fff";
  h1.style.color = "#2d2d2d";
}

function generateRandomColor() {
  var button1 = input1.value;
  var button2 = input2.value;

  var randomColor = getRandomColor([button1, button2]);

  document.getElementById("generateButton").style.backgroundColor = randomColor;
}

function getRandomColor(colors) {
  var randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

input1.addEventListener("input", setGradient);
input2.addEventListener("input", setGradient);
darkBtn.addEventListener("click", darkMode);
lightBtn.addEventListener("click", lightMode);
