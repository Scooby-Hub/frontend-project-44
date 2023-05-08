#!/usr/bin/env node

import { greetingsFuncExp, questionFuncExp, endsGameFuncExp } from '../src/index.js';

const gameBrain = () => {
  // Иселючен ноль в функции 'randNumberFunc'
  const randNumberFunc = (measureNum) => (Math.trunc(Math.random() * (measureNum) + 1));

  const randomNumber = randNumberFunc(100); // Число для проверки простое/составное
  const sqRootArr = []; // Массив для чисел для проверки простое/составное
  let rightAnswer = '';

  // Наполнение массива для чисел для проверки простое/составное, но без единицы
  for (let i = 0; i < randomNumber - 1; i += 1) {
    if (Math.sqrt(randomNumber - i) === Math.trunc(Math.sqrt(randomNumber - i))) {
      sqRootArr.unshift(Math.sqrt(randomNumber - i));
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

greetingsFuncExp('Answer "yes" if given number is prime. Otherwise answer "no".');
let counter = 0;
for (let i = 1; i < 4; i += 1) {
  counter += questionFuncExp(gameBrain());
  if (counter < 0) {
    i = 3;
  }
  if (counter === 3) {
    endsGameFuncExp();
  }
}
