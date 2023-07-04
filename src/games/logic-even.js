import getRandomNumber from '../utils.js';

const isEven = (number) => (number % 2 === 0);

const getRightAnswerFunction = (booleans) => (booleans ? 'yes' : 'no');

const gameBrain = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = randomNumber.toString();
  const rightAnswer = getRightAnswerFunction(isEven(randomNumber));
  return [question, rightAnswer];
};

export default gameBrain;
