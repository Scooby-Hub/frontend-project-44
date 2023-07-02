import randNumberFunc from '../utils.js';

const isEven = (number) => (number % 2 === 0);

const getRightAnswerFunc = (bool) => (bool ? 'yes' : 'no');

const gameBrain = () => {
  const randomNumber = randNumberFunc(1, 100);
  const question = randomNumber.toString();
  const rightAnswer = getRightAnswerFunc(isEven(randomNumber));
  return [question, rightAnswer];
};

export default gameBrain;
