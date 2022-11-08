const rows = document.querySelectorAll('.row');
const whoIsWinner = document.querySelector('.players_t');
const playerX = document.querySelector('.player_x');
const playerO = document.querySelector('.player_o'); 
const arrayOfRows = [];
let counter = 0;
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
    counter++;
    if(counter % 2 == 1){
        elem.innerHTML = playerX.innerHTML;
        elem.style.color = 'rgb(175,179,214)'; 
        elem.style.textShadow = ' 0 0 5px rgb(66, 110, 211), 0 0 15px rgb(66, 110, 211), 0 0 20px rgb(66, 110, 211), 0 0 35px rgb(49, 37, 142), 0 0 40px rgb(49, 37, 142), 0 0 50px rgb(49, 37, 142)';
        elem.style.fontSize = '70px';
    }else{
        elem.innerHTML = playerO.innerHTML;
        elem.style.fontSize = '70px';
        elem.style.color = 'rgb(248, 211, 203)'; 
        elem.style.textShadow = ' 0 0 5px rgb(178, 80, 72), 0 0 15px rgb(178, 80, 72), 0 0 20px rgb(178, 80, 72), 0 0 35px rgb(181, 42, 56), 0 0 40px rgb(181, 42, 56), 0 0 50px rgb(181, 42, 56)';
    }
    checkWinner()
    if( counter == 9){
        whoIsWinner.innerHTML = `We don't have a winner today`;  
    }
}

function hideLosser(losser){
    hasWinner = true;
    whoIsWinner.innerHTML = 'Winner:  ';
    losser.style.display = 'none';
}