'use strict'; 

var userPoints = 0;
var question = 0;
var user = "";
var questionArray = [' is a twin?', ' lived in Florida?', ' loves wild animal safaris?', ' loves chocolates?', ' is terrified of cockroaches?'];

var responseArray = [true, false, true, false, true];

var correctAnswerArray = ['Perfect answer!', 'You are absolutely right!', 'Awesome guess!', 'Great going!', 'Well played!'];

alert('Welcome to Laboni\'s All About Me Guessing Game!');

// Asking for user name
user = prompt('What is your name?');

alert(user + ' , I am so glad you want to play my game!');

console.log('The user\'s name is ' + user + ' I am so glad you want to play my game.');

//questions 1 to 5
function firstToFifthQuestion(questionNum) {
  var userResponse;
  var userAnswer = prompt('Guess if Laboni ' + questionArray[questionNum], 'Type yes or no').toLocaleLowerCase();
  console.log('The user guessed' + userAnswer + 'for ' + questionNum + '.');
  if(userAnswer === 'yes') {
    userResponse = true;
  } 
  else if (userAnswer === 'no') {
    userResponse = false;
  }
  else {}

  if(responseArray[questionNum] === userResponse) {
    alert(correctAnswerArray[questionNum]);
    userPoints++;
  }
  else {
    alert('Sorry ' + user + ', you didn\'t get the correct answer.  Better luck next time!');
  }

  question++;
  alert('You currently have ' + userPoints + ' points and you have answered ' + question + ' questions!');
}

for(var questionNum = 0; questionNum < 5; questionNum++) {
  firstToFifthQuestion(questionNum);
}

// Question 6
var number = 13;

for (var i=0; i<4; i++) {

  var answer6 = prompt ('Can you guess Laboni\'s favorite number? Guess a number between 1 and 20!');
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

console.log('The user guessed' + answer6 + ' as to what is Laboni\'s favorite number.');

//Question 7
var fruits = ['orange', 'mango', 'apple'];

for (var i=0; i<6; i++) {
  if (correct) {
    break;
  }
  var answer7 = prompt ('Can you guess one of Laboni\'s favorite fruits?').toLowerCase();

  alert('You guessed the fruit ' + answer7);  
    
  for (var j=0; j<fruits.length; j++){
    if (answer7 === fruits[j]){
      var correct=true;
      alert('Awesome, you guessed one of Laboni\'s favorite fruits! Her favorite fruits are ' + fruits + ' .');
      userPoints++;
      break;
    }
    else if (j===2) {
      if (i===5) {
        alert('You used all of your guesses!');
      } 
      else {
        alert ('Sorry, you didn\'t guess the fruit that Laboni likes, please try again!');
      }
    }
  }
}

question++;

console.log('The user guessed' + answer7 + ' as to what is one of Laboni\'s favorite fruit.');

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
