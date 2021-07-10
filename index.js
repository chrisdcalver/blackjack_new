// Variables

let cards = []
let sum = 0
let isAlive = true
let blackjack = true
let message = ""

// DOM

// let commentEl = document.getElementById("comment-el")
let cardsEl = document.getElementById("cards-el")
// let sumEl = document.getElementById("sum-el")

// Function to generate random card. This will be used by other functions to generate cards.

function randomCard() {
    newCard = Math.floor(Math.random() * 13) + 1

    if (newCard === 1) {
        return 11
    } else if (newCard > 10) {
        return 10
    } else {
        return newCard
    }
}

// Start game button: generates 2 x new random cards and adds them to cards[] and var sum. 

function startGame() {
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard
}

// Main game play that other functions will use to play. Also controls the message seen on screen.

function renderGame() {
    cardsEl.textContent = "Cards: "

    for (i = 0; i < cards.length; i++) {

    }
}