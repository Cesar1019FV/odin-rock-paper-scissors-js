
//this function get the computer random output for the play
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];

    //this gets a random number bewteen 0 and 2, to get an element of the array
    let randomNumberSelection = Math.floor(Math.random() * 3);
    let result = options[randomNumberSelection];

    return {
        optionString: result,
        optionNumber: randomNumberSelection
      };
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
  
