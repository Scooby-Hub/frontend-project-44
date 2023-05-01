#!/usr/bin/env node

import readlineSync from 'readline-sync';

let userName;
export const greetingsFuncExp = () => {
  console.log('Welcome to the Brain Games!');
  // Wait for user's response.
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const questionFuncExp = (questionNAnswerInArr) => {
  console.log('What number is missing in the progression?');
  const resultAnswer = readlineSync.question(`Question: ${questionNAnswerInArr[0]}\nYour answer: `);
  if (questionNAnswerInArr[1] === resultAnswer) {
    console.log('Correct!');
    return 1;
  }
  if (questionNAnswerInArr[1] !== resultAnswer) {
    console.log(`'${resultAnswer}' is wrong answer ;(. Correct answer was '${questionNAnswerInArr[1]}'.`);
    console.log(`Let's try again, ${userName}!`);
    return -3;
  }
  return 0;
};

export const endsGameFuncExp = () => {
  console.log(`Congratulations, ${userName}!!`);
};
