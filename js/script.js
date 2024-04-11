
// Jedd Rixon Gibb 40485583 Coursework for SET08101 Web Technologies
// This is a website which will host an anagram game called "Scramble"
// This is the Javascript for the webpage

// ACKNOWLEDGEMENTS

// Most of this website has been made from previous experience, W3 schools and A LOT of trial and error
// But I would like to acknowledge a youtube video I found when trying to implement the randomisation.
// It builds a similar anagaram game but I only used it as reference when figuring out how to randomise the words.
// it is by @CodingNepal on youtube
// https://www.youtube.com/watch?v=4-s3g_fU7Vg&list=PLGDAzc2DJDfKRwFkIwoqhZFgwfzxiG7cx
// timestamp : 10.00 - 10.16 - this is the implementation for the randomisation

// timestamp : 11.04 - This is the part which implements the scrambling of the word - 
// I have done a similar algorithm in a previous course, so while I did use this as inspiration, 
// the only part I used from the video is line 46 as I hadn't used Math.floor.... before


const wordText = document.querySelector(".word");

//HTML buttons elements
const refreshButton = document.getElementById("refresh");
const submitButton = document.getElementById("submit");
const inputField = document.getElementById("input");

//matching the button id's from indexHTML to variables in this script

const wordSelector = () => {

        let rand = words[Math.floor(Math.random()*words.length)]; //this will select a random word from our words.js file and store as Object {word: "example"}
        console.log(rand); //checking the word is selected
       
        
        let word = rand.word.split(""); //splits the chosen string into characters, is kept as Array(7) {'e','x','a','m','p','l','e'}
        console.log(word); //checking that the split matches rand


        correctWord = word.join(''); //this takes the characters from words and joins them together from e,x,a,m,p,l,e to example
        console.log(correctWord); //checking that correctWord matches word

        

    function randomise(word){ //function to randomise the characters of the chosen word
        for (let i = word.length - 1; i> 0; i--){  //this will loop through from the end of the word to the start
            let j = Math.floor(Math.random()* (i+1)); // math.random will create a random number and Math.floor will rown down to the nearest whole number,
                                                      // we multiply math.random by i+1 so that j will never be the same as i  
            [word[i], word[j]] = [word[j], word[i]]; // this will switch the places of the characters which allows us to scramble our word
        }
        wordText.innerText = word;  //we then join our characters together and return it so that we can then call it later
        return word;
    }
    randomise(word); //we call the function so that when the page loads we will have a word randomised

    
    //button functionality 

    //refresh
    function handleClick() {
        let rand = words[Math.floor(Math.random()*words.length)]; 
        let word = rand.word.split("");
        randomise(word);
    }
    // we are repeating lines 31 and 35 and then calling the randomise function in order to have a new Scrambled word for the user
    // I would prefer to functionalise everything so that I could just call each respective function, but I don't think I will have the time for that
    // so for now this is my implementation

    refreshButton.addEventListener("click", handleClick,); //this is the event handler which allows us to add the functionality to the button

    //submit
    const checkWord = () => {
        const userWord = inputField.value.toLocaleLowerCase();
        console.log(userWord);
        console.log(correctWord);
        function wordCheck(userWord, correctWord){
            if (userWord == correctWord){ //if the user solves the scramble then this statement will execute
                window.alert("Correct! Well done on guessing the word, click 'OK' to play again"); //this is the text in the alert that pops up when the user inputs the corrcet word
                window.location.reload(); // when the user closes the pop up the page will reload and they can play the game again
            } else { //if the user is incorrect then this statement will execute
                window.alert("Incorrect... close this window and try again. Good Luck!"); // this is the pop up when a user is incorrect
                console.log("Fail");
            }
        }
        wordCheck(userWord, correctWord)
    }

    submitButton.addEventListener("click", checkWord,);




    //Timer

    //Here I have implmented the timer. It will be 30seconds and will only restart when the page is reloaded or the word is reloaded

    let time = 15;
    const timeButton = document.getElementById('timer');
    let timer = setInterval(countdown, 1000);

    function countdown(){
        if (time == 0) {
            window.alert("Oh No! You ran out of time... Click 'OK' to try again");
            clearTimeout(timer);
            window.location.reload();
        } else {
            timeButton.innerHTML = time;
            time--;
        }
    }
    
    countdown();
    


    
}
wordSelector();




// import swal from 'sweetalert2'
// Swal.fire({
//     title: 'Congratulations',
//     text: 'You completed the Scramble! click "Awesome" to play again',
//     icon: 'Success',
//     confirmButtonText: 'Awesome'
//   })

//potentially using this to make the alert boxes fancier, but not sure yet.

//