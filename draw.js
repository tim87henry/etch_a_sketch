// This function creates the sketch pad grid and starts coloring 
function createGrid() {
    let flexBasisPercent = 100/gridSize;
    flexBasisPercent = flexBasisPercent+"%";
    for(i=0; i < gridSize; i++) {
        for (j=0; j < gridSize; j++) {
            const div = document.createElement('div');
            div.style.flexBasis = flexBasisPercent;
            container.appendChild(div);
            div.addEventListener('mouseover', function() {
                div.style.background = '#173b67';
            });
        }
    }
}

let gridSize = 16;
const container = document.querySelector('#container');
const restart = document.querySelector('.restart');
createGrid();

// Function to clear sketch pad and to re-set the pen size
restart.addEventListener('click', function(){
    container.innerHTML="";
    gridSize=prompt("Enter the number of squares, per side, in the sketch pad :");
    createGrid();
});
