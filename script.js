let container = document.querySelector(".container");
let gridLength = 16;
let nodeSize = (400 / gridLength) -1;
let btn = document.querySelector("button");
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
    nodeSize = (400 / gridLength) -1;
    divNodes.forEach(node => {
        node.style.width = `${nodeSize}px`;
        node.style.height = `${nodeSize}px`;
    });
}

function hoverEffect(){
    divNodes.forEach(node => {
        node.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "black";
            e.target.style.border = "1px solid white";
        })
    });
}

btn.addEventListener("click", (e) => {
    let test = prompt("Enter size for test (1 to 100)");
    if (test > 0 && test <= 100){ 
        gridLength = test;
        drawgrid();
    }
});