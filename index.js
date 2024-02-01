let firstDice = document.querySelector("#dice1");
let SecondDice = document.querySelector("#dice2");
let randomNumber = Math.floor(Math.random() * 6);
let randomNumber1 = Math.floor(Math.random() * 6);
let result = document.querySelector("#result");
let refresh = document.querySelector(".refreshMe");
let images = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];


refresh.addEventListener("click", ()=>{
    randomNumber = Math.floor(Math.random() * 6);
    randomNumber1 = Math.floor(Math.random() * 6);
    console.log("Clicked")
    console.log(randomNumber);
    console.log(randomNumber1);
    
    let newImageFor1 = "./images/"+images[randomNumber];
    let newImageFor2 = "./images/"+images[randomNumber1];
    firstDice.setAttribute("src", newImageFor1);
    SecondDice.setAttribute("src", newImageFor2);

    if(randomNumber>randomNumber1){
        result.innerHTML = "Player 1 is the Winner !";
    }
    else if(randomNumber<randomNumber1){
        result.innerHTML = "Player 2 is the Winner !";
    }else{
        result.innerHTML = "It's a Draw"
    }
});




