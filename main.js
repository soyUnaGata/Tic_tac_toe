const rows = document.querySelectorAll('.row');
const whoIsWinner = document.querySelector('.players_t');
const playerX = document.querySelector('.player_x');
const playerO = document.querySelector('.player_o'); 

const players = [
    {
        element: document.querySelector('.player_x'),
        classSymbol: 'x-symbol'
    },
    {
        element: document.querySelector('.player_o'),
        classSymbol: 'o-symbol'
    }
];

const arrayOfRows = [];
let moveNumber = 0;
let hasWinner = false;
for(let i = 0; i < rows.length; i++){
    const elem = rows[i];
    arrayOfRows.push(elem)
    elem.addEventListener('click', render);  

}

function checkWinner(e){
    const playerOSymbol = playerO.innerHTML;
    const playerXSymbol = playerX.innerHTML;
    
    const columns = [
        [arrayOfRows[0].innerHTML, arrayOfRows[1].innerHTML, arrayOfRows[2].innerHTML],
        [arrayOfRows[3].innerHTML, arrayOfRows[4].innerHTML, arrayOfRows[5].innerHTML],
        [arrayOfRows[6].innerHTML, arrayOfRows[7].innerHTML, arrayOfRows[8].innerHTML]
    ];

    columns.forEach(column => {
        if (hasWinner) return;

        if(column.every(cell => cell === playerOSymbol)){
            hideLosser(playerX);
        }
        if(column.every(cell => cell === playerXSymbol)){
            hideLosser(playerO);
        }
    });

    if(arrayOfRows[0].innerHTML === playerOSymbol && arrayOfRows[3].innerHTML === playerOSymbol && arrayOfRows[6].innerHTML === playerOSymbol){
        hideLosser(playerX);
    }
    if(arrayOfRows[0].innerHTML === playerXSymbol && arrayOfRows[3].innerHTML === playerXSymbol && arrayOfRows[6].innerHTML === playerXSymbol){
        hideLosser(playerO);
    }
    if(arrayOfRows[1].innerHTML === playerOSymbol && arrayOfRows[4].innerHTML === playerOSymbol && arrayOfRows[7].innerHTML === playerOSymbol){
        hideLosser(playerX);
    }
    if(arrayOfRows[1].innerHTML === playerXSymbol && arrayOfRows[4].innerHTML === playerXSymbol && arrayOfRows[7].innerHTML === playerXSymbol){
        hideLosser(playerO);
    }
    if(arrayOfRows[2].innerHTML === playerOSymbol && arrayOfRows[5].innerHTML === playerOSymbol && arrayOfRows[8].innerHTML === playerOSymbol){
        hideLosser(playerX);
    }
    if(arrayOfRows[2].innerHTML === playerXSymbol && arrayOfRows[5].innerHTML === playerXSymbol && arrayOfRows[8].innerHTML === playerXSymbol){
        hideLosser(playerO);
    }
    if(arrayOfRows[0].innerHTML === playerXSymbol && arrayOfRows[4].innerHTML === playerXSymbol && arrayOfRows[8].innerHTML === playerXSymbol){
        hideLosser(playerO);
    }
    if(arrayOfRows[0].innerHTML === playerOSymbol && arrayOfRows[4].innerHTML === playerOSymbol && arrayOfRows[8].innerHTML === playerOSymbol){
        hideLosser(playerX);
    }
    if(arrayOfRows[2].innerHTML === playerXSymbol && arrayOfRows[4].innerHTML === playerXSymbol && arrayOfRows[6].innerHTML === playerXSymbol){
        hideLosser(playerO);
    }
    if(arrayOfRows[2].innerHTML === playerOSymbol && arrayOfRows[4].innerHTML === playerOSymbol && arrayOfRows[6].innerHTML === playerOSymbol){
        hideLosser(playerX);
    }
}  

function render (e){
    elem = e.target;
    if(hasWinner) return;
    if(elem.innerHTML)
        return 
    const playerIndex = moveNumber % 2;
    fillCellAndStyle(elem, players[playerIndex].element.innerHTML, players[playerIndex].classSymbol);
    moveNumber++;
    checkWinner()
    if( moveNumber == 9){
        whoIsWinner.innerHTML = `We don't have a winner today`;  
    }
}

function fillCellAndStyle(cellElement, symbol, classSymbol){
    cellElement.innerHTML = symbol;
    cellElement.classList.add(classSymbol);
}

function hideLosser(losser){
    hasWinner = true;
    whoIsWinner.innerHTML = 'Winner:  ';
    losser.style.display = 'none';
}