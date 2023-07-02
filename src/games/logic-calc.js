import getRandom from '../utils.js';

const getRightAnswerFunc = (rndNum1, rndNum2, signIndex) => {
  let answer;
  switch (signIndex) {
    case 0:
      answer = (rndNum1 + rndNum2);
      break;
    case 1:
      answer = (rndNum1 - rndNum2);
      break;
    case 2:
      answer = (rndNum1 * rndNum2);
      break;
    default:
  }
  return answer;
};

const gameBrain = () => {
  const arithmeticSign = ['+', '-', '*'];
  const randomNumber1 = getRandom(1, 100);
  const randomNumber2 = getRandom(1, 100);
  const signIndex = getRandom(0, 2);

  const question = `${randomNumber1} ${arithmeticSign[signIndex]} ${randomNumber2}`;

  const rightAnswer = getRightAnswerFunc(randomNumber1, randomNumber2, signIndex);

  return [question, rightAnswer.toString()];
};

export default gameBrain;
