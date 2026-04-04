const generateBtn = document.getElementById("generate");
const numbersContainer = document.querySelector(".numbers");

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

  for (const number of numbers) {
    const numberEl = document.createElement("div");
    numberEl.classList.add("number");
    numberEl.textContent = number;
    numbersContainer.appendChild(numberEl);
  }
}
