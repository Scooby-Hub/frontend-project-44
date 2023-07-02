import getRandom from '../utils.js';

const isPrime = (number) => {
  const sqRootArr = [];
  for (let i = 0; i < number; i += 1) {
    const sqrtNumber = Math.sqrt(number - i);
    if (sqrtNumber === Math.trunc(sqrtNumber)) {
      sqRootArr.unshift(sqrtNumber);
    }
  }

  for (let i = 1; i < sqRootArr.length; i += 1) {
    if (number % sqRootArr[i] === 0) {
      return false;
    }
  }
  return true;
};

const getRightAnswerFunc = (bool) => (bool ? 'yes' : 'no');

const gameBrain = () => {
  const randNumber = getRandom(1, 100);
  const question = randNumber;
  const rightAnswer = getRightAnswerFunc(isPrime(randNumber));
  return [question, rightAnswer];
};

export default gameBrain;
