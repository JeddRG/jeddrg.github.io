const wordText = document.querySelector(".word");

//HTML buttons elements
const refreshButton = document.getElementById("refresh");
const submitButton = document.getElementById("submit");
const inputField = document.querySelector("input");

const wordSelector = () => {
    let rand = words[Math.floor(Math.random()*words.length)]; //this will select a random word from our words.js file
    let word = rand.word.split(""); //splits the chosen string into characters


    for (let i = word.length - 1; i> 0; i--){
        let j = Math.floor(Math.random()* (i+1));
        [word[i], word[j]] = [word[j], word[i]];
    }
    // this is a loop that will swap the positions of the characters with eachother
    // i is the position of a character and it will go from the last letter to the first letter for every lenght of word
    // j is going to be a random letter than isnt i (i + 1 means that j != i)
    // we then switch the positions of i and j which scrambles our word
    wordText.innerText = word;
    correctWord = wordText.innerText;


    //button functionality
    //refresh
    function handleClick() {
        window.location.reload();
    }
    refreshButton.addEventListener("click", handleClick);

    //submit
    const checkWord = () => {
        let userWord = inputField.value.toLocaleLowerCase();
        console.log(userWord);
    }
    submitButton.addEventListener("click", checkWord);
}
wordSelector();