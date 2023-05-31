drawGrid(100, 100);


function drawGrid(rows, cols) {
    const container = document.querySelector(".draw-container");
    console.log(container.style.width);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const block = document.createElement("div");
            block.classList = `block`;
            if ((i + j) % 2 == 0) block.style.backgroundColor = "grey";
            container.appendChild(block);
        }
    }
}
