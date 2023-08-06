//global variables
const grid=document.querySelector(".grid");
    //sizes
const classic=document.querySelector(".classic");
const large=document.querySelector(".large");
const extraLarge=document.querySelector(".xl");
    //colors
const draw=document.querySelector(".draw");
const eraser=document.querySelector(".eraser");
let color= "black";

//creates grid of squares
function makeGrid(size) {
    grid.style.gridTemplateColumns= `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows= `repeat(${size}, 1fr)`;
    for (let i = 0; i < (size * size); i++){
       paintGrid(); 
    }  
}

//paints squares
function paintGrid() {
    let squares= document.createElement("div");
    grid.insertAdjacentElement("beforeend", squares);
    squares.addEventListener("mouseover", () => {
        squares.style.backgroundColor= color;
    });
}

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

//buttons change color
draw.addEventListener("click", () => {
    color= "black";
});
eraser.addEventListener("click", () => {
    color= "white";
});

