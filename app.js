
let cards = []
let sum = 0

let hasBlackjack = false
let isAlive = true

let player = {
    name: "Patrick",
    chips: 350
}

const startBtn = document.getElementById('start')
const messageElt = document.getElementById('message')
const sumElt = document.getElementById('sum')
const cardsElt = document.getElementById('cards')
const newCardElt = document.getElementById('newCard')
const playerElt = document.getElementById('player')

playerElt.textContent = player.name +  " : " + player.chips + "€"

startBtn.addEventListener('click', () => {
    startGame()
})

newCardElt.addEventListener('click', () => {
    newCard()
})

function startGame(){
    if (isAlive) {
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards.push(firstCard)
        cards.push(secondCard)
        renderGame()
    }
}
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber == 1) {
        return 11
    } else if ( randomNumber in [11, 12, 13]){
        return 10
    } else {
        return randomNumber
    }
}

function renderCards(){
    sum = 0
    let cardsTxt = ""
    for( i = 0; i < cards.length; i++){
        cardsTxt += cards[i] + " "
        sum += cards[i]
    }
    console.log(cardsTxt)
    cardsElt.textContent = cardsTxt
    sumElt.textContent = sum
}

function renderGame() {
    renderCards()
    if(sum <= 20){
        message = "Do you want to draw a card?"
    } else if(sum == 21){
        hasBlackjack = true
        message = "You got Blackjack!"
    } else {
        message = "You are out of the game."
        isAlive = false
    }
    messageElt.textContent = message
    playerElt.textContent = player.name +  " : " + player.chips + "€"
 }

 function newCard() {
    if(isAlive && !hasBlackjack) {
        let newCard = getRandomCard()
        cards.push(newCard)
        console.log(cards)
        renderGame()
    }
 }