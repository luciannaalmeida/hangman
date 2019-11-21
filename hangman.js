
function fillLetter(element){
    let selectedLetter = element.value;
    let wordLettersElements = document.getElementsByClassName("letter_label")

    Array.prototype.forEach.call(wordLettersElements, function(wordLetterElement) {
        console.log(wordLetterElement.name);
        if (wordLetterElement.name == selectedLetter) {
            wordLetterElement.value = selectedLetter;
        }
    });

    element.disabled = true;
}