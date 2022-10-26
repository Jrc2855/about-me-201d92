'use strict';

// console.log('hello world');

// let visitorName = prompt('What is your name?');

// alert(`Welcome to my site ${visitorName}! Please answer yes or no to the following questions.`);

let greeting = prompt('What is your name?');
if (greeting != null) {
  document.getElementById('greeting').innerHTML = 
  "Hey " + greeting + "! Thank you for visiting my site!";
};

let questionOne = prompt('Do I have any kids?');
if(questionOne == 'yes' || questionOne == 'y') {
  alert('Yes that is correct!')
  } else {
    alert('No sorry that is incorrect');
};
console.log(questionOne);

let questionTwo = prompt('Was I in the Army?');
if(questionTwo === "no" || questionTwo === "n") {
  alert('Yes that is correct!');
}else {
  alert('No sorry that is incorrect');
};
console.log(questionTwo);

let questionThree = prompt('Am I from Northern Virginia?');
if(questionThree === "yes" || questionThree === "y"){
  alert('Yes that is correct!');
} else {
  alert('No sorry that is incorrect');
};
console.log(questionThree);

let questionFour = prompt('Divinity Original Sin 2 is my current favorite game');
if(questionFour === "yes" || questionFour === "y"){
  alert('Yes that is correct!');
} else {
  alert('No sorry that is incorrect');
};
console.log(questionFour);

let questionFive = prompt('Do I hate painting for fun?');
if(questionFive === "no" || questionFive === "n"){
  alert('Yes that is correct!');
} else {
  alert('No sorry that is incorrect');
};
console.log(questionFive);

// I wasn't able to figure out how to get the prompt to accept non case sensitive replies. 