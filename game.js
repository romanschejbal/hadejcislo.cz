function startGame () {
    let randomNumber = getRandomNumber(0, 100)
    let minRange = 0
    let maxRange = 100

    console.log(randomNumber)

    let buttonElement = document.querySelector('#guessButton')
    let inputElement = document.querySelector('#guessInput')
    let messageElement = document.querySelector('#guessMessage')
    let formElement = document.querySelector('.guessForm')
    let minRangeElement = document.querySelector('#minRange')
    let maxRangeElement = document.querySelector('#maxRange')
    let mysterElement = document.querySelector('#mysteryNumber')

    inputElement.focus()

    function handleGuess () {
        let guessedNumber = Number(inputElement.value)
        inputElement.value = ''
        inputElement.focus()
        
        if (guessedNumber === randomNumber) {
            messageElement.innerHTML = 'Gratulki! Uhadla si.'
            minRange = guessedNumber
            maxRange = guessedNumber
            mysterElement.innerHTML = guessedNumber
        } else if (guessedNumber < randomNumber) {
            messageElement.innerHTML = 'Myslim na VYSSIE cislo.'
            if (minRange < guessedNumber) {
                minRange = guessedNumber
            }
        } else if (guessedNumber > randomNumber) {
            messageElement.innerHTML = 'Myslim na NIZSIE cislo.'
            if (maxRange > guessedNumber) {
                maxRange = guessedNumber
            }
        }

        minRangeElement.innerHTML = minRange
        maxRangeElement.innerHTML = maxRange
    }

    formElement.addEventListener('submit', function (event) {
        event.preventDefault()
        handleGuess()
    })

    /*
    inputElement.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            handleGuess()
        }
    })

    buttonElement.addEventListener('click', handleGuess)
    */
}

function getRandomNumber (min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
}

window.addEventListener('load', startGame)
