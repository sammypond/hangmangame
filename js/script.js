// variable declarations 
inputString = '';
var randomWordsArray = ['cat', 'bags', 'dugout', 'onsites'];
var wordToGuess = randomWordsArray[Math.floor(Math.random() * randomWordsArray.length)].split('');
var guesses = Array(wordToGuess.length).fill('*')
var x;





// HTML element references (create variables for html elements) 
var head = document.getElementById('head');
var shoulders = document.getElementById('shoulders');
var leftarm = document.getElementById('leftarm');
var rightarm = document.getElementById('rightarm');
var torso = document.getElementById('torso');
var leftleg = document.getElementById('leftleg');
var rightleg = document.getElementById('rightleg');
var blanks = document.getElementById('wrong');
blanks.textContent = guesses.join('');
var inputElement = document.querySelector('[name="input"]');
var btnEl = document.querySelector("button");
// var letter = document.getElementById('letter').value;
var pEl = document.getElementById('text');



//create all event listeners 
btnEl.addEventListener("click", function (e) {
    //read value in textbox
    var textInput = document.querySelector('#letter').value;
    inputElement.value = '';
    //store in variable 
    //append to inputString variable
    inputString = inputString + textInput;
    //display in an element on the page 
    pEl.textContent = inputString;
    checkAnswer(textInput);
    console.log(inputString);
    textInput.value = ''
});



console.log(wordToGuess);

function checkAnswer(letter) {
    console.log(letter)
    console.log("in checkAnswer ", letter, wordToGuess);
    if (wordToGuess.includes(letter)) {
        for (var i = 0; i < wordToGuess.length; i++) {
            if (wordToGuess[i] === letter) {
                guesses[i] = letter;
                blanks.textContent = guesses.join('');
            } 
        }
    } else {
        head.style.backgroundColor = 'white'; //how to remove other apendeges 
    }
    // checkWinner();
};

//function checkWinner();
// if(wordToGuess === guesses){
//
//}