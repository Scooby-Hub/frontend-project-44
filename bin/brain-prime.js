#!/usr/bin/env node

import { greetingsFuncExp, questionFuncExp, endsGameFuncExp } from '../src/index.js';

const randNumberFunc = (measureNum) => (Math.trunc(Math.random() * (measureNum) + 1));

const gameBrain = (randNumber) => {
  // Иселючен ноль в функции 'randNumberFunc'

  const randomNumber = randNumber; // Число для проверки простое/составное
  const sqRootArr = []; // Массив для чисел для проверки простое/составное
  let rightAnswer = '';

  // Наполнение массива для чисел для проверки простое/составное, но без единицы
  for (let i = 0; i < randomNumber - 1; i += 1) {
    const sqrtNumber = Math.sqrt(randomNumber - i);
    if (sqrtNumber === Math.trunc(sqrtNumber)) {
      sqRootArr.unshift(sqrtNumber);
    }
  }

  // Счетчик 'counter' считает кол-во делителей
  let counter = 0;
  for (let i = 0; i < sqRootArr.length; i += 1) {
    if (randomNumber % sqRootArr[i] === 0) {
      counter += 1;
    }
  }

  // Если counter = 0 - число простое, если counter > 0 - составное
  rightAnswer = counter < 1 ? 'yes' : 'no';

  return [randomNumber, rightAnswer];
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
