#!/usr/bin/env node

import { greetingsFuncExp, questionFuncExp, endsGameFuncExp } from '../src/index.js';

const gameBrain = () => {
  const randNumberFunc = (measureNum) => (Math.trunc(Math.random() * (measureNum + 1)));

  // Применен алгоритм Евклида для поиска НОД (a / b = c остаток d)
  // gcd - GCD - Greatest Common Divisor - НОД
  const [dividedA, dividerB] = [randNumberFunc(1000), randNumberFunc(1000)];
  const arrOfAandB = [dividedA, dividerB]; // Массив из деструктуризированных переменных
  let maxNum = (Math.max(...arrOfAandB)); // Самый большой элемент массива
  let minNum = (Math.min(...arrOfAandB)); // Самый маленький элемент массива
  let reminderResultD; // Остаток
  let gcd; // НОД
  const questNumbers = `${dividedA} ${dividerB}`; // Два случайных числа для поиска НОД в формате string

  // Алгоритм Евклида
  do {
    if (maxNum % minNum !== 0) {
      reminderResultD = maxNum % minNum;
      maxNum = minNum;
      minNum = reminderResultD;
    }
    if (maxNum % minNum === 0) {
      gcd = minNum;
    }
  } while (maxNum % minNum !== 0);

  return [questNumbers, gcd.toString()];
};

const theGame = () => {
  greetingsFuncExp('Find the greatest common divisor of given numbers.');
  let counter = 0;
  for (let i = 1; i < 4; i += 1) {
    switch (counter) {
      case 3:
        endsGameFuncExp();
        break;
      case -1:
      case -2:
      case -3:
        return 0;
      default:
        counter += questionFuncExp(gameBrain());
    }
  }
  return 0;
};

theGame();
