
window.onload= function(){
   restartGame();
}
var selectedWord
var wordSplitedIntoChars
var alphaKeyboard=[]

function restartGame(){
    cleanAll()
    createAlphabetickeyboard()
    newWord()
}
function createAlphabetickeyboard(){
    
    let keyboardContainer = document.getElementById('keyboard')    
    for(i=9;++i<36;){
        let letter = i.toString(36)
        let alphaButton = document.createElement("a")
        alphaButton.innerHTML = letter
        alphaButton.setAttribute("id","button"+(i-9))
        alphaButton.addEventListener('click',checkLetter,false)  
        keyboardContainer.appendChild(alphaButton)

    }

}

function checkLetter(event){
    let button = event.target
    
    for(i=0;i<wordSplitedIntoChars.length;i++){
        if(button.text===wordSplitedIntoChars[i]){
            let letter  = document.getElementById('letter'+i)
            letter.setAttribute("class","showLetter")
            
        }
    }
    button.setAttribute("class","hiddeButton")
    button.disabled = true;
}

function newWord(){

    
    selectedWord = getRandomWord()
    
    //alert('Uma novo nome pra vc ==> '+ selectedWord)

    wordSplitedIntoChars = selectedWord.split('')

    addToDOM(wordSplitedIntoChars)
    

}

function cleanAll(){

    selectedWord = undefined
    wordSplitedIntoChars = undefined
    alphaKeyboard=[]
    document.getElementById('wordContainer').innerHTML = ""; 
    document.getElementById('keyboard').innerHTML = ""; 
}

function getRandomWord(){
    let selectedRandomIndex = Math.ceil(Math.random() * words.length) -1 
    return words[selectedRandomIndex]
}

function addToDOM(wordSplitedIntoChars){
    let wordContainer = document.getElementById('wordContainer');
    for(i=0;i<wordSplitedIntoChars.length;i++){
        let letterDiv = document.createElement("li")
        letterDiv.setAttribute("id","letter"+i)
        letterDiv.setAttribute("class","hiddenChar")
        letterDiv.innerHTML= wordSplitedIntoChars[i]
        wordContainer.appendChild(letterDiv)
    }
}
