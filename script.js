let container = document.querySelector(".container");
let gridLength = 16;

let divNodes = document.querySelectorAll(".container > *");
drawgrid();

function drawgrid(){
    container.innerHTML = "";
    for(let i=0; i<gridLength; i++){
        for(let j=0; j<gridLength; j++){
            let div = document.createElement("div");
            container.appendChild(div);
        }
    }
    divNodes.innerHTML = "";
    divNodes = document.querySelectorAll(".container > *");
    hoverEffect();
}

function hoverEffect(){
    divNodes.forEach(node => {
        node.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "black";
            e.target.style.border = "1px solid white";
        })
    });
}

let input = document.querySelector("input");
let btn = document.querySelector("button");
input.addEventListener('keydown', (event) => {
    if (event.key == "Enter") {
        gridSize(event);
    }
});
btn.addEventListener("click", (event) => {
    gridSize(event);
});

function gridSize(e) {
    if(input.value > 0 && input.value <= 100){
        gridLength = input.value;
        drawgrid();
    }
}

// Prompt input method (optional): 
// let testSize = 0;
// let promp = document.querySelector("#prompt");
// promp.addEventListener("click", (e) => {
//     testSize = prompt("Enter size for test");

// console.log(testSize);
// });
// console.log(testSize);