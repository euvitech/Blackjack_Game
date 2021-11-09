let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function startGame() {
    let firstCard = 10
    let secondCard = 4
    let sum = firstCard + secondCard
    let hasBlackJack = false
    let inAlive = true
    let calledMessage
    
    if (sum < 21) {
        calledMessage = "Do you want one more letter??"
    } else if(sum === 21) {
        calledMessage = "Uhuuu, You got Blackjack"
        hasBlackJack = true
    } else {
        calledMessage = "It wasn't this time"
        inAlive = false
    }
    
    messageEl.innerHTML = calledMessage
    sumEl.innerHTML = `Sum: ${sum}`
    cardEl.innerHTML = `Card: ${firstCard}, ${secondCard}`
}

function newCard() {
    console.log("New Card")
}