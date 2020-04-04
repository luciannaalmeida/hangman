window.onload = function() { newWord() };
var wrongGuessesCount = 0;

function newWord(){
    let wordContainer = document.querySelector('.secret_word_container')

    wordContainer.innerHTML = '';
    resetHangman();
    resetLettersSelector();

    let word = chooseWordRandomly();
    let letters = word.split('');

    letters.forEach(letter => {
        let output = document.createElement('output');
        output.setAttribute('class','secret_letter');

        output.setAttribute('name',letter)
        wordContainer.appendChild(output);
    })
}

function resetHangman() {
    let hangmanParts = document.querySelectorAll(".hangman_part.active")

    hangmanParts.forEach(function(hangmanPart) { resetHangmanPart(hangmanPart)});
}

function resetHangmanPart(hangmanPartElement) {
    hangmanPartElement.classList.remove("active");
}

function resetLettersSelector() {
    let lettersSelector = document.querySelectorAll('.letter');

    lettersSelector.forEach(letterSelector => {
        letterSelector.disabled = false;
    });
}

function chooseWordRandomly() {
    let randomIndex = Math.ceil(Math.random() * nouns.length) -1;
    let word = nouns[randomIndex];

    return(word);
}

function fillLetter(element){
    let selectedLetter = element.value;
    let wordLettersElements = document.getElementsByClassName("secret_letter")

    Array.prototype.forEach.call(wordLettersElements, function(wordLetterElement) {
        if (wordLetterElement.name == selectedLetter) {
            wordLetterElement.value = selectedLetter;
        }
    });

    element.disabled = true;
}