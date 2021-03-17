
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let num1 = getRandomNumber();
    let num2 = getRandomNumber();
    let num3 = getRandomNumber();

    document.body.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
    color.textContent = `(${num1}, ${num2}, ${num3})`;
});

function getRandomNumber() {
    return Math.floor(Math.random() * 255);
}