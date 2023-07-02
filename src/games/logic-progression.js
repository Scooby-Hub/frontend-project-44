import randNumberFunc from '../utils.js';

const getProgression = (progStart, progStep, progElementsNum) => {
  const progressionArr = [];
  for (let i = 0; i <= progElementsNum; i += 1) {
    progressionArr.push(progStart + progStep * i);
  }
  return progressionArr;
};

const getRightAnswerFunc = (arrProgression, elementsNum) => {
  const answer = arrProgression[elementsNum];
  return answer;
};

const gameBrain = () => {
  const startOfProgressiion = randNumberFunc(1, 100);
  const stepOfProgressiion = randNumberFunc(1, 10);
  const numberOfElements = randNumberFunc(3, 10);
  const numberElementForDots = randNumberFunc(1, numberOfElements);

  const progressionArr = getProgression(startOfProgressiion, stepOfProgressiion, numberOfElements);
  const rightAnswer = getRightAnswerFunc(progressionArr, numberElementForDots);
  progressionArr[numberElementForDots] = '..';
  const question = progressionArr.join(' ');
  return [question, rightAnswer.toString()];
};

export default gameBrain;
