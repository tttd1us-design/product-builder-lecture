const generateBtn = document.getElementById("generate");
const numbersContainer = document.querySelector(".numbers");
const themeBtn = document.getElementById("theme-btn");
const body = document.body;

// Theme Logic
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  body.classList.add("dark-mode");
  themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  
  let theme = "light";
  if (body.classList.contains("dark-mode")) {
    theme = "dark";
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
  localStorage.setItem("theme", theme);
});

// Generate Numbers Logic
generateBtn.addEventListener("click", () => {
  generateNumbers();
});

function generateNumbers() {
  numbersContainer.innerHTML = "";
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }
  
  const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
  
  for (const number of sortedNumbers) {
    const numberEl = document.createElement("div");
    numberEl.classList.add("number");
    numberEl.textContent = number;
    numbersContainer.appendChild(numberEl);
  }
}