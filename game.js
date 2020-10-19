function startGame () {
    let randomNumber = getRandomNumber(0, 100)
    let minRange = 0
    let maxRange = 100

    console.log(randomNumber)

    let buttonElement = document.querySelector('#guessButton')
    let inputElement = document.querySelector('#guessInput')
    let messageElement = document.querySelector('#guessMessage')
    let formElement = document.querySelector('.guessForm')
    let restartElement = document.querySelector('.restartGame')
    let minRangeElement = document.querySelector('#minRange')
    let maxRangeElement = document.querySelector('#maxRange')
    let mysterElement = document.querySelector('#mysteryNumber')
    let restartButtonElement = document.querySelector('#restartGameButton')

    resetUi()
    inputElement.focus()

    restartButtonElement.addEventListener('click', restartGame)

    function resetUi () {
        messageElement.innerHTML = 'Welcome!'
        minRangeElement.innerHTML = minRange
        maxRangeElement.innerHTML = maxRange
        mysterElement.innerHTML = '?'
        formElement.style.display = 'flex'
        restartElement.style.display = 'none'
    }

    function handleGuess () {
        let guessedNumber = Number(inputElement.value)
        inputElement.value = ''
        inputElement.focus()
        
        if (guessedNumber === randomNumber) {
            messageElement.innerHTML = 'Gratulki! Uhadla si.'
            minRange = guessedNumber
            maxRange = guessedNumber
            mysterElement.innerHTML = guessedNumber

            formElement.style.display = 'none'
            restartElement.style.display = 'flex'
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

    function restartGame () {
        // clean up after ourselves
        restartButtonElement.removeEventListener('click', restartGame);
        formElement.removeEventListener('submit', submit);

        // now we can start a new one and attach new listeners
        startGame();
    }
    
    function submit (event) {
        event.preventDefault()
        handleGuess()
    }

    formElement.addEventListener('submit', submit)

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
