const btn1 = document.getElementById("btn1")
const display = document.querySelector("form > span")

btn1.addEventListener("click", function(event) {
    event.preventDefault()
    let currentText = display.innerText
    let newTextValue = currentText + btn1.innerText
    display.innerText = newTextValue
});