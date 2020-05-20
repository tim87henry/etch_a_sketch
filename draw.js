function createGrid() {
    for(i=0; i < gridSize; i++) {
        for (j=0; j < gridSize; j++) {
            const div = document.createElement('div');
            div.style.flexBasis = '6%';
            container.appendChild(div);
            div.addEventListener('mouseover', function(e) {
                div.style.background = 'red';
            });
        }
    }
}

let gridSize = 16;
const container = document.querySelector('#container');
createGrid();