import getRandomNumber from '../utils.js';

const getRightAnswerFunction = (randomNumber1, randomNumber2, signIndex) => {
  let answer;
  switch (signIndex) {
    case 0:
      answer = (randomNumber1 + randomNumber2);
      break;
    case 1:
      answer = (randomNumber1 - randomNumber2);
      break;
    case 2:
      answer = (randomNumber1 * randomNumber2);
      break;
    default:
  }
  return answer;
};

const gameBrain = () => {
  const arithmeticSign = ['+', '-', '*'];
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const signIndex = getRandomNumber(0, 2);

  const question = `${randomNumber1} ${arithmeticSign[signIndex]} ${randomNumber2}`;

  const rightAnswer = getRightAnswerFunction(randomNumber1, randomNumber2, signIndex);

  return [question, rightAnswer.toString()];
};

export default gameBrain;
