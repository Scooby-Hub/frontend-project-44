import { greetingsFuncExp, questionFuncExp, endsGameFuncExp } from '../index.js';

const gamePrime = () => {
  // Иселючен ноль в функции 'randNumberFunc'
  const randNumberFunc = (measureNum) => (Math.trunc(Math.random() * (measureNum) + 1));

  const fillSqRootArrA = (randNumber) => {
    const sqRootArr = []; // Массив для чисел для проверки простое/составное

    // Наполнение массива для чисел для проверки простое/составное, но без единицы
    for (let i = 0; i < randNumber - 1; i += 1) {
      const sqrtNumber = Math.sqrt(randNumber - i);
      if (sqrtNumber === Math.trunc(sqrtNumber)) {
        sqRootArr.unshift(sqrtNumber);
      }
    }
    return [randNumber, ...sqRootArr];
  };

  const gameBrain = (randNumberAndsqRootArr) => {
    // Счетчик 'counter' считает кол-во делителей
    for (let i = 1; i < randNumberAndsqRootArr.length; i += 1) {
      if (randNumberAndsqRootArr[0] % randNumberAndsqRootArr[i] === 0) {
        return [randNumberAndsqRootArr[0], 'no'];
      }
    }

    return [randNumberAndsqRootArr[0], 'yes'];
  };

  greetingsFuncExp('Answer "yes" if given number is prime. Otherwise answer "no".');
  let counter = 0;
  for (let i = 1; i < 4; i += 1) {
    const sqRootArr = fillSqRootArrA(randNumberFunc(100));
    counter += questionFuncExp(gameBrain(sqRootArr));
    if (counter < 0) {
      i = 3;
    }
    if (counter === 3) {
      endsGameFuncExp();
    }
  }
};

export default gamePrime;
