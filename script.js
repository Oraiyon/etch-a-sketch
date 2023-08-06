//brings in html elements
const grid=document.querySelector(".grid");
    //sizes
const small=document.querySelector(".small");
const classic=document.querySelector(".classic");
const large=document.querySelector(".large");
const extraLarge=document.querySelector(".xl");
    //colors
const black=document.querySelector(".black");
const random=document.querySelector(".random");
const eraser=document.querySelector(".eraser");
const reset=document.querySelector(".reset");

//creates grid of squares
function makeGrid(size) {
    grid.style.gridTemplateColumns= `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows= `repeat(${size}, 1fr)`;
    for (let i = 0; i < (size * size); i++){
       changeColor(); 
    }  
}
makeGrid(16);

//changes colors of squares
function changeColor() {
    let squares= document.createElement("div");
    grid.insertAdjacentElement("beforeend", squares);
    squares.addEventListener("mouseover", () => {
        squares.style.backgroundColor= "black";
    })
}

