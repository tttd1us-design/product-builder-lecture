const generateBtn = document.getElementById("generate");
const numbersContainer = document.querySelector(".numbers");

generateBtn.addEventListener("click", () => {
  generateNumbers();
});

function generateNumbers() {
  numbersContainer.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    const setContainer = document.createElement("div");
    setContainer.classList.add("set");
    const numbers = new Set();
    while (numbers.size < 6) {
      const randomNumber = Math.floor(Math.random() * 45) + 1;
      numbers.add(randomNumber);
    }
    for (const number of numbers) {
      const numberEl = document.createElement("div");
      numberEl.classList.add("number");
      numberEl.textContent = number;
      setContainer.appendChild(numberEl);
    }
    numbersContainer.appendChild(setContainer);
  }
}