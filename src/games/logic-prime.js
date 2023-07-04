import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  const squareRootArray = [];
  for (let i = 0; i < number; i += 1) {
    const squareRootNumber = Math.sqrt(number - i);
    if (squareRootNumber === Math.trunc(squareRootNumber)) {
      squareRootArray.unshift(squareRootNumber);
    }
  }

  for (let i = 1; i < squareRootArray.length; i += 1) {
    if (number % squareRootArray[i] === 0) {
      return false;
    }
  }
  return true;
};

const getRightAnswerFunction = (booleans) => (booleans ? 'yes' : 'no');

const gameBrain = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = randomNumber;
  const rightAnswer = getRightAnswerFunction(isPrime(randomNumber));
  return [question, rightAnswer];
};

export default gameBrain;
