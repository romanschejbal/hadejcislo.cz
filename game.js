function startGame () {
    let randomNumber = getRandomNumber(0, 100)
    console.log(randomNumber)

    let buttonElement = document.querySelector('#guessButton')
    let inputElement = document.querySelector('#guessInput')
    let messageElement = document.querySelector('#guessMessage')

    buttonElement.addEventListener('click', function () {
        let guessedNumber = Number(inputElement.value)
        
        if (guessedNumber === randomNumber) {
            messageElement.innerHTML = 'Gratulki! Uhadla si.'
        } else if (guessedNumber < randomNumber) {
            messageElement.innerHTML = 'Myslim na VYSSIE cislo.'
        } else if (guessedNumber > randomNumber) {
            messageElement.innerHTML = 'Myslim na NIZSIE cislo.'
        }

    })
}

function getRandomNumber (min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
}

window.addEventListener('load', startGame)
