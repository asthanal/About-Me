'use strict';

var userPoints = 0;
var question = 0;

alert('Welcome to Lina\'s All About Me Guessing Game!');

// Asking for user name
var user = prompt('What is your name?');

console.log('The user\'s name is ' + user);

alert('Hi ' + user + '! I am so glad you want to play my game.');

//Question 1
var answer1 = prompt('Is Lina a twin?' , 'Type yes or no').toLowerCase();

console.log('The user guessed' + answer1 + ' as to whether Lina is a twin.');

//check if the user's answer is correct
//what is correct?
//find out what the answer is?
//need to use toLowerCare or toUpperCase

if (answer1 === 'yes' || answer1 === 'y') {
  alert('Perfect answer, you got it correct! Lina is a twin!');

  //if it's correct give them a point
  userPoints++;
  question++;
}
else {
  //if it's not correct, tell them they are wrong
  alert('Sorry ' + user + ' you got it wrong. Lina is a twin!');
  question++;
}

// let the user know how many questions they have answered and what are the user's points so far
alert(user + ' you have answered ' + question + ' question and you have ' + userPoints + ' points.');

//Question 2
var answer2 = prompt('Did Lina live in Florida?' , 'Type yes or no').toLowerCase();

console.log('The user guessed' + answer2 + ' as to whether Lina lived in Florida.');

//check if the user's answer is correct
//what is correct?
//find out what the answer is?
//need to use toLowerCare or toUpperCase

if (answer2 === 'no' || answer2=== 'n') {
  alert('Great answer! Lina did not live in Florida!');

  //if it's correct give them a point
  userPoints++;
  question++;
}
else {
  //if it's not correct, tell them to try again
  alert('Sorry ' + user + ' you got it wrong. Lina did not live in Florida!');
  question++;
}

// let the user know how many questions they have answered and what are the user's points so far.
alert(user + ' you have answered ' + question + ' questions and you have ' + userPoints + ' points.');

// Question 3
var answer3 = prompt('Is Lina\'s favorite color red?' , 'Type yes or no').toLowerCase();

console.log('The user guessed' + answer3 + ' as to whether Lina\'s favorite color is red.');

//check if the user's answer is correct
//what is correct?
//find out what the answer is?
//need to use toLowerCare or toUpperCase

if (answer3 === 'yes' || answer3=== 'y') {
  alert('Awesome guess! Lina\'s favorite color is red!');

  //if it's correct give them a point
  userPoints++;
  question++;
}
else {
  //if it's not correct, tell them to try again
  alert('Sorry ' + user + '. Lina\'s favorite color is red!');
  question++;
}

// let the user know how many questions they have answered and what are the user's points so far
alert(user + ' you have answered ' + question + ' questions and you have ' + userPoints + ' points.');

// Question 4
var answer4 = prompt('Does Lina love chocolates?' , 'Type yes or no').toLowerCase();

console.log('The user guessed' + answer4 + ' as to whether Lina loves chocolates.');

//check if the user's answer is correct
//what is correct?
//find out what the answer is?
//need to use toLowerCare or toUpperCase

if (answer4 === 'no' || answer4=== 'n') {
  alert('Great going! Lina doesn\'t like chocolates!');

  //if it's correct give them a point
  userPoints++;
  question++;
}
else {
  //if it's not correct, tell them to try again
  alert('Sorry ' + user + '. As crazy as it may sound, Lina doesn\'t like chocolates!');
  question++;
}

// let the user know how many questions they have answered and what are the user's points so far
alert(user + ' you have answered ' + question + ' questions and you have ' + userPoints + ' points.');

// Question 5
var answer5 = prompt('Is Lina terrified of cockroaches?' , 'Type yes or no').toLowerCase();

console.log('The user guessed' + answer5 + ' as to whether Lina is terrified of cockroaches.');

//check if the user's answer is correct
//what is correct?
//find out what the answer is?
//need to use toLowerCare or toUpperCase

if (answer5 === 'yes' || answer5=== 'y') {
  alert('Well played! Lina is terrified of cockroaches.');
  //if it's correct give them a point
  userPoints++;
  question++;
}
else {
  //if it's not correct, tell them to try again
  alert('Sorry ' + user + '. Lina is terrified of cockroaches!');
  question++;
}

// Question 6
var number = 13;

for (var i=0; i<4; i++) {

  var answer6 = prompt ('Can you guess Lina\'s favorite number? Guess a number between 1 and 20!');
  alert ('You guessed the number ' + answer6);
  if (answer6 > number) {
    if (i===3) {
      alert('You used all of your guesses!');
    }
    else {
      alert ('You guessed too high, try again!');
    }
  }
  else if (answer6 < number){
    if (i===3) {
      alert('You used all of your guesses!');
    }
    else {
      alert ('You guessed too low, try again!');
    }
  }
  else {
    alert('Awesome, you guessed the correct number!');
    userPoints++;
    break;
  }
}

question++;

console.log('The user guessed' + answer6 + ' as to what is Lina\'s favorite number.');

//Question 7
var fruits = ['orange', 'mango', 'apple'];

for (var i=0; i<6; i++) {
  if (correct) {
    break;
  }
  var answer7 = prompt ('Can you guess one of Lina\'s favorite fruits?').toLowerCase();

  alert('You guessed the fruit ' + answer7);

  for (var j=0; j<fruits.length; j++){
    if (answer7 === fruits[j]){
      var correct=true;
      alert('Awesome, you guessed one of Lina\'s favorite fruits! Her favorite fruits are ' + fruits + ' .');
      userPoints++;
      break;
    }
    else if (j===2) {
      if (i===5) {
        alert('You used all of your guesses!');
      }
      else {
        alert ('Sorry, you didn\'t guess the fruit that Lina likes, please try again!');
      }
    }
  }
}

question++;

console.log('The user guessed' + answer7 + ' as to what is one of Lina\'s favorite fruit.');

// let the user know how many questions they have answered and what are the user's points so far

if (userPoints <= 2) {
  alert(user + ' you have answered all ' + question + ' questions and you have ' + userPoints + ' points. You still need to know me more!');
}
else if (userPoints >2 && userPoints <=4){
  alert(user + ' you have answered all ' + question + ' questions and you have ' + userPoints + ' points. You are getting to know me pretty well!');
}
else {
  alert(user + ' you have answered all ' + question + ' questions and you have ' + userPoints + ' points. Well done! you know me so well!');
}
