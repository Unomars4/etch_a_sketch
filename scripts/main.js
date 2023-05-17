drawGrid(16, 16);


function drawGrid(rows, cols) {
    const container = document.querySelector(".draw-container");
    console.log(container.style.width);
    for (let i = 0; i < (rows * cols); i++) {
        const block = document.createElement("div");
        block.classList = `block`;
        container.appendChild(block);
    }
}
