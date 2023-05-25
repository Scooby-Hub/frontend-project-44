#!/usr/bin/env node

import readlineSync from 'readline-sync';

let userName;
const askingName = () => {
  // Wait for user's response.
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

console.log('Welcome to the Brain Games!');
askingName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let randomNumber;
let yesOrNoAnswer;
let rightAnswerCounter = 1;
const yesOrNoFunc = (number) => (number % 2 === 0 ? 'yes' : 'no');
for (let i = 1; i < 5; i += 1) {
  randomNumber = Math.trunc(Math.random() * 100 + 1);
  yesOrNoAnswer = readlineSync.question(`Question: ${randomNumber} `);
  if (yesOrNoFunc(randomNumber) === yesOrNoAnswer) {
    if (i < 4) {
      console.log('Correct!');
      if (rightAnswerCounter === 3) {
        console.log(`Congratulations, ${userName}!!`);
        i = 5;
      }
      rightAnswerCounter += 1;
    }
  } else {
    i = 5;
    console.log(`'${yesOrNoAnswer}' is wrong answer ;(. Correct answer was '${yesOrNoFunc(randomNumber)}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
}
