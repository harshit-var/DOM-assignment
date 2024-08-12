const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");

// for decrement button
decrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value > 0) {
    displayValue.innerText = value - 1;
  } else {
    alert("Negative value not allowed");
  }
});

// for increment button
incrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  displayValue.innerText = value + 1;
});

// for reset button click
resetBtn.addEventListener("click", () => {
  displayValue.innerText = 0;
});