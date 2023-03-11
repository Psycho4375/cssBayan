let firstMeme = document.getElementById("first");
let secondMeme = document.getElementById("second");
let thirdMeme = document.getElementById("third");
let fourthMeme = document.getElementById("fourth");
let fifthMeme = document.getElementById("fifth");

let isActive = document.querySelector(".isActive");

function active1(){
    firstMeme.classList.add("isActive");
    secondMeme.classList.remove("isActive");
    thirdMeme.classList.remove("isActive");
    fourthMeme.classList.remove("isActive");
    fifthMeme.classList.remove("isActive");
}
firstMeme.onclick = active1;

function active2(){
    firstMeme.classList.remove("isActive");
    secondMeme.classList.add("isActive");
    thirdMeme.classList.remove("isActive");
    fourthMeme.classList.remove("isActive");
    fifthMeme.classList.remove("isActive");
}
secondMeme.onclick = active2;

function active3(){
    firstMeme.classList.remove("isActive");
    secondMeme.classList.remove("isActive");
    thirdMeme.classList.add("isActive");
    fourthMeme.classList.remove("isActive");
    fifthMeme.classList.remove("isActive");
}
thirdMeme.onclick = active3;

function active4(){
    firstMeme.classList.remove("isActive");
    secondMeme.classList.remove("isActive");
    thirdMeme.classList.remove("isActive");
    fourthMeme.classList.add("isActive");
    fifthMeme.classList.remove("isActive");
}
fourthMeme.onclick = active4;

function active5(){
    firstMeme.classList.remove("isActive");
    secondMeme.classList.remove("isActive");
    thirdMeme.classList.remove("isActive");
    fourthMeme.classList.remove("isActive");
    fifthMeme.classList.add("isActive");
}
fifthMeme.onclick = active5;
