let playerOneScoreboard = document.getElementById('scorep1')
let playerTwoScoreboard = document.getElementById('scorep2')

let playerTwo = 0
let playerOne = 0

// Player 1 Below

function buttona2() {
    playerOne = playerOne+2
    playerOneScoreboard.innerText=playerOne
}

function buttona3() {
    playerOne = playerOne+3
    playerOneScoreboard.innerText=playerOne
}

function buttona4() {
    playerOne = playerOne+4
    playerOneScoreboard.innerText=playerOne
}

function buttona5() {
    playerOne = 0
    playerOneScoreboard.innerText=playerOne
}

// Player 2 Below

function buttonb2() {
    playerTwo = playerTwo+2
    playerTwoScoreboard.innerText=playerTwo
}

function buttonb3() {
    playerTwo = playerTwo+3
    playerTwoScoreboard.innerText=playerTwo
}

function buttonb4() {
    playerTwo = playerTwo+4
    playerTwoScoreboard.innerText=playerTwo
}

function buttonb5() {
    playerTwo  = 0
    playerTwoScoreboard.innerText=playerTwo
}
