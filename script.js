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
grid.style.gridTemplateColumns= "repeat(16, 1fr)";
grid.style.gridTemplateRows= "repeat(16, 1fr)";
for (let i = 0; i < (16 * 16); i++){
    let squares= document.createElement("div");
    grid.insertAdjacentElement("beforeend", squares);
} 