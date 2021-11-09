
let firstCard = 1
let secondCard = 20
let sum = firstCard + secondCard
let hasBlackJack = false
let inAlive = true
let calledMessage

if (sum < 21) {
    calledMessage = "Você quer mais uma carta?"
} else if(sum === 21) {
    calledMessage = "Uhhuuu, você conseguiu 21"
    hasBlackJack = true
} else {
    calledMessage = "Puts amigo, não foi dessa vez ;-;"
    inAlive = false
}


console.log(calledMessage)

