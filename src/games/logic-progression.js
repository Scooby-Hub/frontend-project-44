import getRandomNumber from '../utils.js';

const getProgression = (progressionStart, progressionStep, progressionElementsNumber) => {
  const progressionArray = [];
  for (let i = 0; i <= progressionElementsNumber; i += 1) {
    progressionArray.push(progressionStart + progressionStep * i);
  }
  return progressionArray;
};

const getRightAnswerFunction = (arrayProgression, elementsNumber) => {
  const answer = arrayProgression[elementsNumber];
  return answer;
};

const gameBrain = () => {
  const startOfProgressiion = getRandomNumber(1, 100);
  const stepOfProgressiion = getRandomNumber(1, 10);
  const numberOfElements = getRandomNumber(5, 10);
  const numberElementForDots = getRandomNumber(1, numberOfElements);

  const progressionArr = getProgression(startOfProgressiion, stepOfProgressiion, numberOfElements);
  const rightAnswer = getRightAnswerFunction(progressionArr, numberElementForDots);
  progressionArr[numberElementForDots] = '..';
  const question = progressionArr.join(' ');
  return [question, rightAnswer.toString()];
};

export default gameBrain;
