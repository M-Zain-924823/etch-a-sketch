let container = document.querySelector(".container");

for(let i=0; i<16; i++){
    for(let j=0; j<16; j++){
        let div = document.createElement("div");
        container.appendChild(div);
    }
}

let divNodes = document.querySelectorAll(".container > *");
divNodes.forEach(node => {
    node.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "black";
        e.target.style.border = "1px solid white";
    })
});

