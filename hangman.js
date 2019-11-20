
window.onload= function(){
newWord()
}
function newWord(){

    let selectedWord = getRandomWord()
    
    //alert('Uma novo nome pra vc ==> '+ selectedWord)

    let wordSplitedIntoChars = selectedWord.split('')

    addToDOM(wordSplitedIntoChars)
    

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
var words =[
    'THIAGO', 'LUCIANNA', 'LEONNARDO', 'BEBE', 'COCÔ'

]