'use strict';

console.log('is this thing on?');

// Full Class notes on the github repo for class 4 inclass code review folder
let correctNumber = 22;
let attempts = 4;
while (attempts) {
  let userGuess = +prompt(`Guess a number between 1 and 50`);
  // By adding a plus sign in front of a prompt, it lets us force the user to enter a number
  if (userGuess === correctNumber){
    alert(`That's Correct!`);
    break;
  }
  attempts--;
  if(attempts === 0){
    alert(`The correct answer was ${correctNumber}`)
  }
}



let halloweenStuff = ['black cats','pumpkins','candy','costumes'];

for (let i = 0; i < 6; i++){
  let halloweenGuess = prompt('Guess my favorite parts about Halloween').toLowerCase();

  for (let j = 0; j < halloweenStuff.length; j++);
  if (halloweenGuess === halloweenStuff[j]){
    alert('That is correct!');
    i = 6;
    break;

  }  
}

alert(`All possible answers are: ${halloweenStuff}`);