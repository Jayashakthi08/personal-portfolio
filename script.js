// Mobile Navigation Menu

function toggleMenu() {

    let nav = document.getElementById("nav");

    nav.classList.toggle("show");

}

// Automatic Year

document.getElementById("year").textContent =
    new Date().getFullYear();

// Typing Text Effect

let words = [
    "Web Developer",
    "Programmer",
    "Creative Learner"
];

let wordIndex = 0;

function changeText() {

    let typing = document.getElementById("typing");

    wordIndex++;

    if (wordIndex >= words.length) {
        wordIndex = 0;
    }

    typing.textContent = words[wordIndex];

}

setInterval(changeText, 2000);