//bring in html elements
const grid=document.querySelector(".grid");
const classic=document.querySelector(".classic");
const large=document.querySelector(".large");
const extraLarge=document.querySelector(".xl");
const black=document.querySelector(".black");
const eraser=document.querySelector(".eraser");
const random=document.querySelector(".random");
const reset=document.querySelector(".reset");

//global variables
let color= "black";

//buttons set grid size
classic.addEventListener("click", () => {
    makeGrid(16);
});
large.addEventListener("click", () => {
    makeGrid(32);
});
extraLarge.addEventListener("click", () => {
    makeGrid(64);
});

//create grid of squares
function makeGrid(size) {
    grid.style.gridTemplateColumns= `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows= `repeat(${size}, 1fr)`;
    for (let i = 0; i < (size * size); i++){
        let squares= document.createElement("div");
        grid.insertAdjacentElement("beforeend", squares);
        squares.addEventListener("mouseover", () => {
        squares.style.backgroundColor= color;
        });
    }  
}

//buttons change color
black.addEventListener("click", () => {
    color= "black";
});
eraser.addEventListener("click", () => {
    color= "white";
});
random.addEventListener("click", () => {
    color= `hsl(${Math.random() * 360}, 100%, 50%)`;
});
reset.addEventListener("click", () => {
    location.reload();
});
