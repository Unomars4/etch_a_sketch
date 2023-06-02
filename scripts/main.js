const slider = document.querySelector(".grid-slider");
const container = document.querySelector(".draw-container");
const defaultColor = "rgb(0, 0, 0)";

drawGrid(15);
paintBlock();


function drawGrid(gridDimension = 15) {
    const blockDimension = calcBlockDimensions(gridDimension);
    generateGrid(gridDimension, blockDimension);
    showBlockDimensions(gridDimension);
}

function generateGrid(gridDimension, blockDimension) {
    for (let i = 0; i < gridDimension; i++) {
        for (let j = 0; j < gridDimension; j++) {
            const block = document.createElement("div");
            block.classList = `block`;
            block.style.width = `${blockDimension}px`, block.style.height = `${blockDimension}px`;
            if ((i + j) % 2 == 0) block.style.backgroundColor = "grey";
            container.appendChild(block);
        }
    }

    turnBlocksToGrid(gridDimension);
}

function turnBlocksToGrid(gridDimension) {
    container.style.gridTemplateRows =  `repeat(${gridDimension}, 1fr)`;
    container.style.gridTemplateColumns =  `repeat(${gridDimension}, 1fr)`;
}

function sliderChangeGrid() {
    const sliderValue = document.querySelector(".slider-value");
    const value = slider.value;
    sliderValue.textContent = value;
    showBlockDimensions(value);
    drawGrid(value);
}

function calcBlockDimensions(blockDimension) {
    return container.clientWidth / blockDimension ;
}

function showBlockDimensions(blockDimension) {
    const widthDisplay = document.querySelector(".width");
    const heightDisplay = document.querySelector(".height");
    widthDisplay.textContent = `${blockDimension}px`;
    heightDisplay.textContent = `${blockDimension}px`;
}

function windowLoads() {
 //When window loads    
}

function paintBlock() {
    const blocks = document.querySelectorAll(".block");
    const changeBackground = (el) => el.style.backgroundColor = `${defaultColor}`;
    blocks.forEach(block => block.onclick = (e) => changeBackground(e.target));   
}