
//this function get the computer random output for the play
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];

    //this gets a random number bewteen 0 and 2, to get an element of the array
    let randomNumberSelection = Math.floor(Math.random() * 3);
    let result = options[randomNumberSelection];

    return result;
  }

  //this funcion normalize the input to make it the same as the option array inside getComputerChoice
  function normalizeInput(input) {
    // Convert everything to lowercase.
    const normalizedInput = input.toLowerCase();

    return normalizedInput;
  }

  // Function to get user choice, with validation for "rock", "paper", or "scissors"
  function getUserChoice() {
    while (true) {
      let userInput = prompt('Enter rock, paper, or scissors:');
      let normalizedInput = normalizeInput(userInput);
  
      if (normalizedInput === "rock" || normalizedInput === "paper" || normalizedInput === "scissors") {
        return normalizedInput;
      } else {
        alert('Invalid input. Please enter rock, paper, or scissors.');
      }
    }
  }
  
  //this function starts the game, using only one round
  function playRound(computerSelection, playerSelection) {
    let finalResult;

    console.log('Computer choice: ' + computerSelection);
    console.log('Your choice: ' + playerSelection);

    // Psoible game results depending on player and computer selections
    if (computerSelection === playerSelection) {
    winner ='Draw';
    } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')
    ) {
    winner = 'Computer Wins';
    } else {
    winner = 'You win';
    }

    return winner;
  }


//this is the main code of the game

//geting selections
let optionAI = getComputerChoice();
let playerOption = getUserChoice();

//starting round
console.log(playRound(optionAI, playerOption));