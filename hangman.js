
function fillLetter(element){
    alert(element.value);
    
    let button = element;
    let selectedLetter = element.value;

    let wordLetters = document.getElementsByClassName('letter_label')

    wordLetters.array.forEach(wordLetter => {
        if (wordLetter.value == selectedLetter) {
            wordLetter.innerText = selectedLetter;
            button.disabled = true;
        }
    });

    
    




}