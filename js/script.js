// variable declarations 
inputString = '';
var randomWordsArray = ['cat', 'bags', 'dugout', 'onsites'];
var wordToGuess = randomWordsArray[Math.floor(Math.random() * randomWordsArray.length)].split('');
var guesses = Array(wordToGuess.length).fill('*')
var x;
var misses = 0;





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
var pEl = document.getElementById('text');

var body = ['head', 'shoulders', 'leftarm', 'rightarm', 'torso', 'leftleg', 'rightleg'];



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
    textInput.value = '';
    checkWinner();
});

// letterGuess.addEventListener('keypress', function(e){
//     let key = e.which || e.keyCode;
//     if (key === 13) { 
//         mainGame();
//     }
// });



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
        var bodyPart = document.createElement('p');
        bodyPart.setAttribute('id', body[misses]);// body[0];
        misses = misses + 1;
        document.getElementsByTagName("main")[0].appendChild(bodyPart);
    }
};

function checkWinner(){
    if(misses >= 7){
        document.getElementById('head').textContent = 'You died!!!';
    } else if (!(guesses.includes('*'))){
        alert('you win!')
    }
}


//one function to determine if winner or loser.  Call this function at the end of the check answer. 

// function checkWinner() {
//     let winFlag = false;
//     for (let i = 0; i < guesses.length; i++) {
//         if (!(guesses[i].includes('*'))) {
//             // document.getElementById('head').textContent = 'You win!!!';
//             flag = true;
//             console.log(guesses);
//             var guessedRight = document.getElementById('wrong').textContent;
//             if (misses >= 7) {
//                 document.getElementById('head').textContent = 'You died!!!';
//             } else if (winFlag === true); {
//                 alert('you win');
//             };

//         }
//     }
// }

// function checkWinner(){
//     winFlag = false;
//     if ((guesses[i].includes('*')))
// }


