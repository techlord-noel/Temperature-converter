const textbox = document.getElementById("textbox")
let celsius = document.getElementById("celsius")
let fahrenheit = document.getElementById("fahrenheit")
let submitBtn = document.getElementById("submitBtn")
let result = document.getElementById("result")
let temp;

submitBtn.onclick = function () {
    if (celsius.checked) {
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32
        result.textContent = temp + "℉"

    }
    else if (fahrenheit.checked) {
        temp = Number(textbox.value);
        temp = temp * 5/9 + 32
        result.textContent = temp + "℃"
    }
    else {
        result.textContent = "Select a unit"
        console.log("Select a unit")

    }
}
