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
//    for(let a = 0; a < arrayOfRows.length; a++){
        if(arrayOfRows[0].innerHTML === playerO.innerHTML && arrayOfRows[1].innerHTML === playerO.innerHTML && arrayOfRows[2].innerHTML === playerO.innerHTML){
            hasWinner = true;
           renderWinnerO();
           arrayOfRows[0].style.textDecoration = 'line-through'
           arrayOfRows[1].style.textDecoration = 'line-through'
        }
         if(arrayOfRows[0].innerHTML === playerX.innerHTML  && arrayOfRows[1].innerHTML === playerX.innerHTML && arrayOfRows[2].innerHTML === playerX.innerHTML){
            hasWinner = true;
           renderWinnerX();
        }
        if(arrayOfRows[3].innerHTML === playerO.innerHTML  && arrayOfRows[4].innerHTML === playerO.innerHTML && arrayOfRows[5].innerHTML === playerO.innerHTML){
            hasWinner = true;
            renderWinnerO();
        }
        if(arrayOfRows[3].innerHTML === playerX.innerHTML  && arrayOfRows[4].innerHTML === playerX.innerHTML && arrayOfRows[5].innerHTML === playerX.innerHTML){
            hasWinner = true;
            renderWinnerX();
        }
        if(arrayOfRows[6].innerHTML === playerO.innerHTML  && arrayOfRows[7].innerHTML === playerO.innerHTML && arrayOfRows[8].innerHTML === playerO.innerHTML){
            hasWinner = true;
            renderWinnerO();
        }
        if(arrayOfRows[6].innerHTML === playerX.innerHTML  && arrayOfRows[7].innerHTML === playerX.innerHTML && arrayOfRows[8].innerHTML === playerX.innerHTML){
            hasWinner = true;
            renderWinnerX();
        }
        if(arrayOfRows[0].innerHTML === playerO.innerHTML && arrayOfRows[3].innerHTML === playerO.innerHTML && arrayOfRows[6].innerHTML === playerO.innerHTML){
            hasWinner = true;
            renderWinnerO();
        }
        if(arrayOfRows[0].innerHTML === playerX.innerHTML && arrayOfRows[3].innerHTML === playerX.innerHTML && arrayOfRows[6].innerHTML === playerX.innerHTML){
            hasWinner = true;
            renderWinnerX();
        }
        if(arrayOfRows[1].innerHTML === playerO.innerHTML && arrayOfRows[4].innerHTML === playerO.innerHTML && arrayOfRows[7].innerHTML === playerO.innerHTML){
            hasWinner = true;
            renderWinnerO();
        }
        if(arrayOfRows[1].innerHTML === playerX.innerHTML && arrayOfRows[4].innerHTML === playerX.innerHTML && arrayOfRows[7].innerHTML === playerX.innerHTML){
            hasWinner = true;
            renderWinnerX();
        }
        if(arrayOfRows[2].innerHTML === playerO.innerHTML && arrayOfRows[5].innerHTML === playerO.innerHTML && arrayOfRows[8].innerHTML === playerO.innerHTML){
            hasWinner = true;
            renderWinnerO();
        }
        if(arrayOfRows[2].innerHTML === playerX.innerHTML && arrayOfRows[5].innerHTML === playerX.innerHTML && arrayOfRows[8].innerHTML === playerX.innerHTML){
            hasWinner = true;
            renderWinnerX();
        }
        if(arrayOfRows[0].innerHTML === playerX.innerHTML && arrayOfRows[4].innerHTML === playerX.innerHTML && arrayOfRows[8].innerHTML === playerX.innerHTML){
            hasWinner = true;
            renderWinnerX();
        }
        if(arrayOfRows[0].innerHTML === playerO.innerHTML && arrayOfRows[4].innerHTML === playerO.innerHTML && arrayOfRows[8].innerHTML === playerO.innerHTML){
            hasWinner = true;
            renderWinnerO();
        }
        if(arrayOfRows[2].innerHTML === playerX.innerHTML && arrayOfRows[4].innerHTML === playerX.innerHTML && arrayOfRows[6].innerHTML === playerX.innerHTML){
            hasWinner = true;
            renderWinnerX();
        }
        if(arrayOfRows[2].innerHTML === playerO.innerHTML && arrayOfRows[4].innerHTML === playerO.innerHTML && arrayOfRows[6].innerHTML === playerO.innerHTML){
            hasWinner = true;
            renderWinnerO();
        }

//    }
    
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

function renderWinnerO (){
    whoIsWinner.innerHTML = `Winner:  `;
    playerX.style.display = 'none'
}

function renderWinnerX (){
    whoIsWinner.innerHTML = `Winner:  `;
    playerO.style.display = 'none'
}