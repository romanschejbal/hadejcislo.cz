function startGame () {
    let randomNumber = getRandomNumber(0, 100)
    console.log(randomNumber)

    let buttonElement = document.querySelector('#guessButton')
    let inputElement = document.querySelector('#guessInput')

    buttonElement.addEventListener('click', function () {
        console.log('Oklikal si tlacitko.')
        let guessedNumber = Number(inputElement.value)
        console.log(guessedNumber, typeof guessedNumber)
    })
}

function getRandomNumber (min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
}

window.addEventListener('load', startGame)
