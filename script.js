let container = document.querySelector(".container");
let gridLength = 16;
let nodeSize = (400 / gridLength) -1;
let sizeOfGrid = document.querySelector(".sizeOfGrid");
let divNodes = document.querySelectorAll(".container > *");
let selectedButton = 1;
let blackButton = document.querySelector(".black");
let rainbowButton = document.querySelector(".rainbow");
let clearButton = document.querySelector(".clear");
let toggle = document.querySelector(".toggle");
let toggleEffect = "mouseover";
drawgrid();

blackButton.addEventListener("click", ()=> {selectedButton = 1});
rainbowButton.addEventListener("click", ()=> {selectedButton = 2});

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
        node.addEventListener(`${toggleEffect}`, (e) => {
            if(selectedButton==1) black(e);
            if(selectedButton==2) rainbow(e);
        })
    });
}

function black(e){
    e.target.style.backgroundColor = "black";
    e.target.style.border = "1px solid white";
}

function rainbow(e){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    e.target.style.backgroundColor = `rgba(${r},${g},${b},${Math.random()})`;
    e.target.style.border = "1px solid white";
}

sizeOfGrid.addEventListener("click", () => {
    let test = prompt("Enter size for test (1 to 100)");
    if (test > 0 && test <= 100){ 
        gridLength = test;
        drawgrid();
    }
});

clearButton.addEventListener("click", ()=> {
    divNodes.forEach(node => {
        node.style.backgroundColor = "white";
        node.style.border = "1px solid black";
    });
});

toggle.addEventListener("click", (e)=> {
    if(toggleEffect=="mouseover") toggleEffect="click";
    else toggleEffect="mouseover";
    drawgrid();
});