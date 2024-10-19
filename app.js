let displayedWord = document.querySelector(".word");
let enterBtn = document.querySelector(".enter-btn");
let msg=document.querySelector(".msg");
let restart=document.querySelector(".refresh");
let count=0;

const selectWord = () => {
    const wordsList = ["hello", "welcome", "great", "happy", "projects", "winner", "difficult", "dangerous", "curious", "knowledge", "science", "seven", "weekends", "damaging", "repository", "objects"];
    let ranNum = Math.floor(Math.random() * (wordsList.length));
    let givenWord = wordsList[ranNum]
    shuffleLetters(givenWord);
    return givenWord;
}

const shuffleLetters = (word) => {
    let wordSplits = word.split("");
    for (let i = 0; i < wordSplits.length; i++) {
        let ranInd = Math.floor(Math.random() * (wordSplits.length - 1));
        let temp = wordSplits[i];
        wordSplits[i] = wordSplits[ranInd];
        wordSplits[ranInd] = temp;
    }
    displayedWord.innerText = wordSplits.join("");
}

let selectedWord = selectWord();

enterBtn.addEventListener("click", () => {
    checkResult();
});

const checkResult=()=>{
    if(count===0){
        let userInput = document.getElementById("user-input").value;
        if (userInput.length>0){
            if (userInput === selectedWord) {
                msg.innerHTML="Hurry! You guessed it correctly!";
                msg.style.color="green";
            }else{
                msg.innerHTML=`<p class='wrong'>Oops! Wrong answer</p> <p> Correct answer is ${selectedWord}</p>`;
            }
            count++;
        }
    }
    
}

restart.addEventListener("click",()=>{
    selectedWord = selectWord();
    msg.innerHTML="What do you think the word is?";
    msg.style.color="#022707";
    document.getElementById("user-input").value="";
    count=0;
})

