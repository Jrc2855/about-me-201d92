'use strict';

let greeting = prompt('What is your name?');
if (greeting != null) {
  document.getElementById('greeting').innerHTML = 
  "Hey " + greeting + "! Thank you for visiting my site!";
};

function firstQuestion () {
let questionOne = prompt('Do I have any kids?');
if(questionOne == 'yes' || questionOne == 'y') {
  alert('Yes that is correct!')
  } else {
    alert('No sorry that is incorrect');
};
console.log(questionOne);
};
firstQuestion ();

function secondQuestion () {
let questionTwo = prompt('Was I in the Army?');
if(questionTwo === "no" || questionTwo === "n") {
  alert('Yes that is correct!');
}else {
  alert('No sorry that is incorrect');
};
console.log(questionTwo);
};
secondQuestion ();

function thirdQuestion () {
let questionThree = prompt('Am I from Northern Virginia?');
if(questionThree === "yes" || questionThree === "y"){
  alert('Yes that is correct!');
} else {
  alert('No sorry that is incorrect');
};
console.log(questionThree);
}
thirdQuestion ();

function fourthQuestion (){
let questionFour = prompt('Divinity Original Sin 2 is my current favorite game');
if(questionFour === "yes" || questionFour === "y"){
  alert('Yes that is correct!');
} else {
  alert('No sorry that is incorrect');
};
console.log(questionFour);
}
fourthQuestion ();

function fifthQuestion (){
let questionFive = prompt('Do I hate painting for fun?');
if(questionFive === "no" || questionFive === "n"){
  alert('Yes that is correct!');
} else {
  alert('No sorry that is incorrect');
};
console.log(questionFive);
};
fifthQuestion ();

function sixthQuestion (){
let correctAnswer = 5;
let guesses = 4;
let questionSix = prompt('Can you guess the correct number between 1 and 10?');
for(let i = 0; i < guesses; i++) {
  if (questionSix > correctAnswer) {
    alert('Too High Try Again');
    prompt('Can you guess the correct number between 1 and 10?'
    );
  } else if 
    (questionSix < correctAnswer) {
    alert('Too Low Try Again');
    prompt('Can you guess the correct number between 1 and 10?');
  } else if 
      (questionSix = correctAnswer) {
        alert('That is Correct! Great Job!');
        {break;}
    }
  }
  if(guesses = 0){
    alert('The correct number is 5!');
}
};
sixthQuestion ();

function seventhQuestion () { 
let questionSevenGuesses = 6;
let questionSevenArray = [0,1,2,3,4,5,6,7,8,9,10];
let questionSevenAnswer = questionSevenArray[6];
let questionSeven = prompt('Can you guess which of my favorite Rick and Morty episodes was the first one I saw?');
for(let x = 0; x < questionSevenGuesses; x++){
  if (questionSeven != questionSevenAnswer) {
    alert('Sorry that is incorrect');
  } else {
    alert('Yes! Get Schwifty was the first episode I saw!');
  }
}
};


