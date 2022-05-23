// Hangman game JavaScript code
// This file defines the event behavior for the Hangman game.

// constants
var MAX_GUESSES = 6;           // number of total guesses per game
var POSSIBLE_WORDS = [/* "obdurate", "obsequious", "toady", "idempotent", */
"kindness", "courage", "brave", "love", "perseverance", 
"curiosity", "spirit", "opportunity", "ingenuity", "honest", 
"loyalty", "patience", "confidence", "strong", "fearless" ];
var MULTI_WORDS = '';

// global variables
var word = "";
var wordMulti = "";                 // random word user is trying to guess 
var guesses = "";              // letters the player has guessed
var guessCount = MAX_GUESSES;  // number of guesses player has left

// Choose a new random word and display its clue on the page.
function newGame() {
  // choose a random word
  var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
  word = POSSIBLE_WORDS[randomIndex];
  // initialize variables
  guessCount = MAX_GUESSES;
  guesses = "";  
  updatePage();  // show initial word clue - all underscores
}

function newGameMulti() {
  // choose a random word
  wordMulti = document.getElementById("guessMulti").value;
  // initialize variables
  guessCount = MAX_GUESSES;
  guesses = "";  
  document.getElementById("guessMulti").value='';
  updatePageMulti()  // show initial word clue - all underscores
}

// Guess a letter. Called when user presses the Guess button.
function guessLetter() {
  var input = document.getElementById("guess");
  var clue = document.getElementById("clue");
  var letter = input.value;
 
  if (guessCount == 0 || clue.innerHTML.indexOf("_") < 0 ||
      guesses.indexOf(letter) >= 0) {
    return;    // game over, or already guessed this letter
  }

  guesses += letter;
  if (word.indexOf(letter) < 0) {
	guessCount--;  // an incorrect guess
  }

  ClearBox();
  updatePage();   // update word clue, image, etc.
}




function guessLetterMulti() {
  var input = document.getElementById("guessMulti");
  var clue = document.getElementById("clue");
  var letter = input.value;
 
  if (guessCount == 0 || clue.innerHTML.indexOf("_") < 0 ||
      guesses.indexOf(letter) >= 0) {
    return;    // game over, or already guessed this letter
  }

  guesses += letter;
  if (wordMulti.indexOf(letter) < 0) {
	guessCount--;  // an incorrect guess
  }

  ClearBoxMulti();
  updatePageMulti();   // update word clue, image, etc.
}

function ClearBox() {
  document.getElementById('guess').value='';
}

function ClearBoxMulti() {
  document.getElementById('guessMulti').value='';
}



// Updates the hangman image, word clue, etc. to the current game state.
function updatePage(){
  var clueString = "";
  // update clue string such as "h _ l l _ "
  for (var i = 0; i < word.length; i++) {
    var letter = word.charAt(i);
    if (guesses.indexOf(letter) >= 0) { // letter has been guessed
      clueString += letter + " ";
	} else {  // not guessed
      clueString += "_ ";
    }	  
  }
  // display clue string 
  var clue = document.getElementById("clue");
  clue.innerHTML = clueString;
  
  // show all guesses made by player
  var guessArea = document.getElementById("guesses");
  if (guessCount == 0) {
	guessArea.innerHTML = "You lose.";  // game over (loss)
  } else if (clueString.indexOf("_") < 0) {
	guessArea.innerHTML = "You win!!!"; // game over (win)
  } else {
	guessArea.innerHTML = "Guesses: " + guesses;
  }
  
  // update hangman image
  var image = document.getElementById("hangmanpic");
  image.src = "hangman" + guessCount + ".gif";
}

function updatePageMulti(){
  var clueString = "";
  // update clue string such as "h _ l l _ "
  for (var i = 0; i < wordMulti.length; i++) {
    var letter = wordMulti.charAt(i);
    if (guesses.indexOf(letter) >= 0) { // letter has been guessed
      clueString += letter + " ";
	} else {  // not guessed
      clueString += "_ ";
    }	  
  }
  // display clue string 
  var clue = document.getElementById("clue");
  clue.innerHTML = clueString;
  
  // show all guesses made by player
  var guessArea = document.getElementById("guesses");
  if (guessCount == 0) {
	guessArea.innerHTML = "You lose.";  // game over (loss)
  } else if (clueString.indexOf("_") < 0) {
	guessArea.innerHTML = "You win!!!"; // game over (win)
  } else {
	guessArea.innerHTML = "Guesses: " + guesses;
  }
  
  // update hangman image
  var image = document.getElementById("hangmanpic");
  image.src = "hangman" + guessCount + ".gif";
}



function SingleGame() {
  location.href = "./Hangman.html";
}

function MultiGame() {
  location.href = "./HangmanMulti.html";
}