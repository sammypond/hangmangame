function () {
    var letter = document.getElementById('text').value;
    for (var i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === letter) {
            guesses[0] = letter;
            document.getElementById('wrong').textContent = guesses[0];
        }
        else {
            head.style.backgroundColor = 'white';
        }
    }
}
