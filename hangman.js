function newWord(){
    let wordContainer = document.querySelector('.secret_word_container')
    
    let word = nouns[0];
    let letters = word.split('');
    
    letters.forEach(letter => {
        let output = document.createElement('output');
    output.setAttribute('class','secret_letter');

    output.setAttribute('name',letter)
    wordContainer.appendChild(output);

    })
    

    
}

function fillLetter(element){
    let selectedLetter = element.value;
    let wordLettersElements = document.getElementsByClassName("secret_letter")

    Array.prototype.forEach.call(wordLettersElements, function(wordLetterElement) {
        console.log(wordLetterElement.name);
        if (wordLetterElement.name == selectedLetter) {
            wordLetterElement.value = selectedLetter;
        }
    });

    element.disabled = true;
}