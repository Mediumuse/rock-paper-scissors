console.log("I would like to play a little game...");

//rock paper scissors game function 
function playgame(){

//initialize global variable score counters to 0 
let playerscore = 0
let computerscore = 0

//function of user choice prompt
function pChoice() {
    
    let choice = prompt("Rock, Paper or Scissors? (First press F12 to view the console)").toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    }

    else alert("Invalid input! Please enter 'rock', 'paper', or 'scissors'.");
    return pChoice(); //recall the function until choice is correct
}
//function of random computer choice
function npChoice() { 

    const npchoice = (Math.floor(Math.random()*(3)+1)); 

    if (npchoice === 1 ) return ("rock");
    if (npchoice === 2) return ("paper");
    else return ("scissors");
}

//function to play one round 
function playround (playerchoice, computerchoice){

    if (playerchoice === computerchoice)
    {
        console.log(`It's a tie! \nPlayer score: ${playerscore} \nComputer score: ${computerscore}`);
    }

    else if 
        ((playerchoice === "rock" && computerchoice === "scissors") || 
        (playerchoice === "paper" && computerchoice === "rock") ||
        (playerchoice === "scissors" && computerchoice === "paper"))
    {
        playerscore++; 
        console.log(`You win! ${playerchoice} beats ${computerchoice}! \nPlayer score: ${playerscore} \nComputer score: ${computerscore}`);
    }
         
    else 
    {    
        computerscore++;
        console.log(`You lose! ${computerchoice} beats ${playerchoice}! \nPlayer score: ${playerscore} \nComputer score: ${computerscore}`);
    } 

}       

//loop for 5 rounds
    for (let i = 1; i <= 5; i++) {
        
        console.log(`\nRound: ${i}`);

        const playerchoice = pChoice();
        const computerchoice = npChoice(); 

        console.log(`Player chose: ${playerchoice}`)
        console.log(`Computer chose: ${computerchoice}`);

        playround(playerchoice, computerchoice);
    }

if (playerscore > computerscore) console.log(`\n${playerscore} vs ${computerscore} \nYou win! ✊\nPress F5 to play again!`);
if (playerscore < computerscore) console.log(`\n${playerscore} vs ${computerscore} \nYou lose! 😔\nPress F5 to play again!`);
if (playerscore === computerscore) console.log(`\n${playerscore} vs ${computerscore} \nIt's a tie! 🤝\nPress F5 to play again!`)  
    
}

//call the game function
playgame();


