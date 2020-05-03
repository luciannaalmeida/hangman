window.onload = function() { newWord() };
var wrongGuessesCount = 0;
var maxWrongGuesses = 7;

function newWord(){
    let wordContainer = document.querySelector('.secret_word_container')

    wordContainer.innerHTML = '';
    resetGame();

    let word = chooseWordRandomly();
    let letters = word.split('');

    letters.forEach(letter => {
        let output = document.createElement('output');
        output.setAttribute('class','secret_letter');
        output.classList.add('unrevealed_letter');

        output.setAttribute('name',letter)
        wordContainer.appendChild(output);
    })
}

function resetGame() {
    resetWrongGuessesCount();
    resetHangman();
    resetLettersSelector();
    closeVictoryModal();
}

function resetWrongGuessesCount() {
    wrongGuessesCount = 0;
}

function resetHangman() {
    let hangmanParts = document.querySelectorAll(".hangman_part.active")

    hangmanParts.forEach(function(hangmanPart) { resetHangmanPart(hangmanPart)});
}

function resetHangmanPart(hangmanPartElement) {
    hangmanPartElement.classList.remove("active");
}

function resetLettersSelector() {
    let letterSelectionLabelElement = document.querySelector(".letter_selection_label")
    letterSelectionLabelElement.classList.remove("disabled");

    let lettersSelector = document.querySelectorAll('.letter');
    lettersSelector.forEach(letterSelector => {
        letterSelector.disabled = false;
    });
}

function closeVictoryModal() {
    modal = document.querySelector('#simpleModal');
    modal.style.display = 'none';
}

function chooseWordRandomly() {
    let randomIndex = Math.ceil(Math.random() * nouns.length) -1;
    let word = nouns[randomIndex];

    return(word);
}

function fillLetter(element){
    let selectedLetter = element.value;
    let wordLettersElements = document.getElementsByClassName("secret_letter")
    let successfulGuess = false;

    Array.prototype.forEach.call(wordLettersElements, function(wordLetterElement) {
        if (wordLetterElement.name == selectedLetter) {
            wordLetterElement.value = selectedLetter;
            wordLetterElement.classList.remove('unrevealed_letter');
            successfulGuess = true;
        }
    });

    if (successfulGuess == false) {
        computeWrongGuess();
    } else if (isSecretWordRevealed() == true) {
        endGameWithPlayerVictory();
    }

    disableLetterSelector(element);
}

function computeWrongGuess() {
    wrongGuessesCount += 1;

    activateHangmanPart(wrongGuessesCount);

    if (wrongGuessesCount >= maxWrongGuesses) {
        gameOver();
    }
}

function activateHangmanPart(index) {
    hangmanPartSelector = ".hangman_part#hangman_part_" + index;
    hangmanPartElement = document.querySelector(hangmanPartSelector);

    hangmanPartElement.classList.add("active");
}

function gameOver() {
    disableLetterSelectors();
}

function disableLetterSelectors() {
    let letterSelectionLabelElement = document.querySelector(".letter_selection_label")
    letterSelectionLabelElement.classList.add("disabled");

    let letterSelectorElements = document.querySelectorAll(".letter_selection_container .letter");
    letterSelectorElements.forEach(function(element) { disableLetterSelector(element) });
}

function disableLetterSelector(letterSelectorElement) {
    letterSelectorElement.disabled = true
}

function isSecretWordRevealed() {
    if (document.querySelector(".secret_letter.unrevealed_letter")) {
        return false;
    }
    return true;
}

function endGameWithPlayerVictory() {
    openVictoryModal();
}

function openVictoryModal() {
    modal = document.querySelector('#simpleModal');
    modal.style.display = 'block';
}
