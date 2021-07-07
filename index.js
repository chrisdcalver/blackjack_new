let cards = []
let hasBlackjack = false
let isAlive = true
let sum = 0
let message = ""

let commentEl = document.getElementById("comment-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

function randomCard() {
    randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber >= 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startBtn() {
    isAlive = true
    firstCard = randomCard()
    secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    cardsEl.textContent = firstCard + ", " + secondCard
}

function commentUser() {
    if (sum <= 20) {
        commentEl.textContent = "Do you want another card?"
    } else if (sum === 21) {
        hasBlackjack = true
        commentEl.textContent = "Awesome, you got Blackjack!"
    } else {
        commentEl.textContent = "Sorry, you're out!"
    }
}