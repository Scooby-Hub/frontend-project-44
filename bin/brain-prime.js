#!/usr/bin/env node

import { greetingsFuncExp, questionFuncExp, endsGameFuncExp } from '../src/index.js';

// Иселючен ноль в функции 'randNumberFunc'
const randNumberFunc = (measureNum) => (Math.trunc(Math.random() * (measureNum) + 1));

const gameBrain = (randNumber) => {
  const sqRootArr = []; // Массив для чисел для проверки простое/составное

  // Наполнение массива для чисел для проверки простое/составное, но без единицы
  for (let i = 0; i < randNumber - 1; i += 1) {
    const sqrtNumber = Math.sqrt(randNumber - i);
    if (sqrtNumber === Math.trunc(sqrtNumber)) {
      sqRootArr.unshift(sqrtNumber);
    }
  }

  // Счетчик 'counter' считает кол-во делителей
  for (let i = 0; i < sqRootArr.length; i += 1) {
    if (randNumber % sqRootArr[i] === 0) {
      return [randNumber, 'no'];
    }
  }

  return [randNumber, 'yes'];
};

const theGame = () => {
  greetingsFuncExp('Answer "yes" if given number is prime. Otherwise answer "no".');
  let counter = 0;
  for (let i = 1; i < 4; i += 1) {
    counter += questionFuncExp(gameBrain(randNumberFunc(100)));
    if (counter < 0) {
      i = 3;
    }
    if (counter === 3) {
      endsGameFuncExp();
    }
  }
};

theGame();
