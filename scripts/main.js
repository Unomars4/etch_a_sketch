const slider = document.querySelector(".grid-slider");
const container = document.querySelector(".draw-container");

drawGrid(slider.value);


function drawGrid(gridDimension = 16) {
    const width = calcBlockDimensions(gridDimension);    
    
    for (let i = 0; i < gridDimension; i++) {
        for (let j = 0; j < gridDimension; j++) {
            const block = document.createElement("div");
            block.classList = `block`;
            block.style.width = `${width}px`, block.style.height = `${width}px`;
            if ((i + j) % 2 == 0) block.style.backgroundColor = "grey";
            container.appendChild(block);
        }
    }

    container.style.gridTemplateRows =  `repeat(${gridDimension}, 1fr)`;
    container.style.gridTemplateColumns =  `repeat(${gridDimension}, 1fr)`;
    showBlockDimensions(gridDimension);
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