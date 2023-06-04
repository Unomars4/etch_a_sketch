const container = document.querySelector(".draw-container");
const slider = document.querySelector(".grid-slider");
const eraseBtn = document.querySelector(".eraser");
const paintBtn = document.querySelector(".paint");
const randomBtn = document.querySelector(".randomcolors");
const clearBtn = document.querySelector(".clear");
let activeBtn = null, currentColor = "rgb(0, 0, 0)", 
gridSize = slider.value, currentMode = null;


window.onload = () => switchMode(paintBtn, "default");
eraseBtn.onclick = () => switchMode(eraseBtn, "eraser");
paintBtn.onclick = () => switchMode(paintBtn, "paint");
randomBtn.onclick = () => switchMode(randomBtn, "random");
clearBtn.onclick = () => clearGrid();
slider.onchange = () => adjustGrid();

function drawGrid() {
    const blockDimension = calcBlockDimensions(gridSize);
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const block = document.createElement("div");
            block.classList = `block`;
            block["data-color"] = `${i + j}`;
            block.style.width = `${blockDimension}px`, block.style.height = `${blockDimension}px`;
            if ((i + j) % 2 == 0) block.style.backgroundColor = "grey";
            container.appendChild(block);
        }
    }
    //Add grid display to grid
    container.style.gridTemplateRows =  `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateColumns =  `repeat(${gridSize}, 1fr)`;
    showBlockDimensions(gridSize);
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

function paintBlock() {
    const blocks = document.querySelectorAll(".block");
    const changeBackground = (el) => el.style.backgroundColor = `${currentColor}`;
    blocks.forEach(block => block.onclick = (e) => changeBackground(e.target));   
}

function switchMode(btn, mode) {
    toggleBtnActive(btn);
    switch (mode) {
        case "paint":
            paintBlock();
            break;
        case "random":
            randomMode();
            break;
        case "eraser":
            eraseBlock();
            break;
        default:
            defaultMode();
            break;
    }
}

function toggleBtnActive(btn) {
    if (activeBtn == btn) return;
    if (activeBtn && activeBtn != btn) activeBtn.classList.toggle("active");    
    activeBtn = btn;
    activeBtn.classList.toggle("active");
}

function clearGrid() {
    const blocks = document.querySelectorAll(".block");
    blocks.forEach(block => container.removeChild(block));
    drawGrid(gridSize);
}

function adjustGrid() {
    gridSize = Number(slider.value);
    clearGrid();
}

function defaultMode() {
    drawGrid(gridSize);
    paintBlock();
}

function eraseBlock() {
    const blocks = document.querySelectorAll(".block");
    const changeBackground = (el, color) => el.style.backgroundColor = `${color}`;
    blocks.forEach(block => block.onclick = (e) => {
        const blockColor = getOriginColor(block["data-color"]);
        changeBackground(e.target, blockColor);
    }); 
}

function getOriginColor(n) {
    if (Number(n) % 2 == 0) return "grey";
    return "white";
};

function randomMode() {
    const blocks = document.querySelectorAll(".block");
    blocks.forEach(block => block.onclick = () => {
        block.style.backgroundColor = `${randomColor()}`;
    });
}

function randomColor() {
    const r = randomNumber(), g = randomNumber(), b = randomNumber();
    const color = `rgb(${r}, ${g}, ${b})`;
    return color;
}

function randomNumber() {
    return Math.floor(Math.random() * 255);
}