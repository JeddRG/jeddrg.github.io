
// import swal from 'sweetalert2'
// Swal.fire({
//     title: 'Congratulations',
//     text: 'You completed the Scramble! click "Awesome" to play again',
//     icon: 'Success',
//     confirmButtonText: 'Awesome'
//   })

const wordText = document.querySelector(".word");

// Jedd Rixon Gibb 40485583 Coursework for SET08101 Web Technologies
// This is a website which will host an anagram game called "Scramble"
// This is the Javascript for the webpage

//HTML buttons elements
const refreshButton = document.getElementById("refresh");
const submitButton = document.getElementById("submit");
const inputField = document.getElementById("input");

const wordSelector = () => {

        let rand = words[Math.floor(Math.random()*words.length)]; //this will select a random word from our words.js file
        console.log(rand);
       
        
        let word = rand.word.split(""); //splits the chosen string into characters
        console.log(word);


        correctWord = word.join('');
        console.log(correctWord);

        

    function randomise(word){
        for (let i = word.length - 1; i> 0; i--){
            let j = Math.floor(Math.random()* (i+1));
            [word[i], word[j]] = [word[j], word[i]];
        }
        wordText.innerText = word;
        return word;
    }
    randomise(word);

    //this is the functionalised version of the below code

    // for (let i = word.length - 1; i> 0; i--){
    //     let j = Math.floor(Math.random()* (i+1));
    //     [word[i], word[j]] = [word[j], word[i]];
    // }
    // wordText.innerText = word;
    //correctWord = word;
    // this is a loop that will swap the positions of the characters with eachother
    // i is the position of a character and it will go from the last letter to the first letter for every lenght of word
    // j is going to be a random letter than isnt i (i + 1 means that j != i)
    // we then switch the positions of i and j which scrambles our word

    //this has now been functionalised but I am leaving it in to show the previous version.

    
 //button functionality
    //refresh

    // I would like to properly functionalise this but will wait until rest of the page is completed
    // DONE FOR NOW
    function handleClick() {
        let rand = words[Math.floor(Math.random()*words.length)];
        let word = rand.word.split("");
        randomise(word);
    }
    refreshButton.addEventListener("click", handleClick);

    //submit
    const checkWord = () => {
        const userWord = inputField.value.toLocaleLowerCase();
        console.log(userWord);
        console.log(correctWord);
        function wordCheck(userWord, correctWord){
            if (userWord == correctWord){
                window.alert("Correct! Well done on guessing the word, click 'ok' to play again");
                window.location.reload();
            } else {
                window.alert("Incorrect... close this window and try again. Good Luck!");
                console.log("Fail");
            }
        }
        wordCheck(userWord, correctWord)
    }

    submitButton.addEventListener("click", checkWord);
    
    


    
}
wordSelector();
