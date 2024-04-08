const initGame = () => {
    let randomObj = words[Math.floor(Math.random()*words.length)]; //getting random object from words
    console.log(randomObj);
}
initGame();