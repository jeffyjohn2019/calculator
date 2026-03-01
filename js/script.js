const input = document.getElementById("inputValue");
console.log("input ", input.value);

const buttons = document.querySelectorAll(".calc-btn");
const equalBtn = document.querySelector(".equal-btn");
const clearBtn = document.querySelector(".clear-btn");
const squareBtn = document.querySelector(".square-btn");
const cubeBtn = document.querySelector(".cube-btn");

// NUMBER & OPERATOR CLICK
buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("text content ", button.textContent)
        input.value += button.textContent;
        console.log("input ", input.value);
    });
});

// EQUAL BUTTON
equalBtn.addEventListener("click", () => {
    try {
        input.value = eval(input.value);
    } catch {
        input.value = "";
    }
    console.log("input ", input.value);
});

// CLEAR
clearBtn.addEventListener("click", () => {
    input.value = "";
});

// SQUARE 
squareBtn.addEventListener("click", () => {
    if (input.value !== "") {
        input.value = (input.value) * (input.value);
    }
    console.log("input ", input.value);
});

// CUBE 
cubeBtn.addEventListener("click", () => {
    if (input.value !== "") {
        input.value = (input.value) * (input.value * (input.value));
    }
    console.log("input ", input.value);
});