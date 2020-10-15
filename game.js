function startGame () {
    let randomNumber = getRandomNumber(0, 100)
    console.log(randomNumber)

    let buttonElement = document.querySelector('#guessButton')
    let inputElement = document.querySelector('#guessInput')
    let messageElement = document.querySelector('#guessMessage')
    let formElement = document.querySelector('.guessForm')

    inputElement.focus()

    function handleGuess () {
        let guessedNumber = Number(inputElement.value)
        inputElement.value = ''
        inputElement.focus()
        
        if (guessedNumber === randomNumber) {
            messageElement.innerHTML = 'Gratulki! Uhadla si.'
        } else if (guessedNumber < randomNumber) {
            messageElement.innerHTML = 'Myslim na VYSSIE cislo.'
        } else if (guessedNumber > randomNumber) {
            messageElement.innerHTML = 'Myslim na NIZSIE cislo.'
        }

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
