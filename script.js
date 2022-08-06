
const board = document.getElementById("container");
let button = document.getElementById("select");
button.style.display = "flex";
button.style.justifyContent = "center";
board.style.display = "flex";
board.style.justifyContent = "center";
board.style.maxwidth = "12000px";
board.style.border = "solid";
const cell = document.createElement('div');
   function originalBoard() { 
    for (x=1; x <= 256; x++) {
        const cell = document.createElement('div')
        cell.className = "cells";
        cell.setAttribute("style", "height: 30px; width: 30px; color: black;");
        cell.style.backgroundColor = "white";
        cell.style.border = "solid 2px";
        cell.style.borderColor = "black";
        board.style.display ="grid";
        board.style.gridTemplateColumns = "30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px";
        board.appendChild(cell);
        cell.addEventListener("mousedown", change = () => 
        cell.style.backgroundColor = "black")
        cell.addEventListener("mouseout", reset = () => cell.style.backgroundColor = "black") 
    }
}
    originalBoard();
        
function setBoard () {
    let a = prompt("Select a the number of cells for the grid")
    if (a != null) {
        document.getElementById("container").value = a
    }
    board.replaceChildren();
for (x=1; x <= a; x++) {
    const nCell = document.createElement('div')
        nCell.className = "cells";
        nCell.setAttribute("style", "height: 30px; width: 30px; color: black;");
        nCell.style.backgroundColor = "white";
        nCell.style.border = "solid 2px";
        nCell.style.borderColor = "black";
        board.style.columnGap = "0px";
        board.style.display ="grid";
        board.style.gridTemplateColumns = "30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px";
        board.appendChild(nCell);
        nCell.addEventListener("mouseover", change = () => 
        nCell.style.backgroundColor = "grey")
        nCell.addEventListener("mouseout", reset = () => nCell.style.backgroundColor = "black");
        board.appendChild(nCell);
}
    
}

function clearBoard() {
    board.replaceChildren();
    originalBoard();
}

