const gameBrain = () => {
  const randNumberFunc = (measureNum) => (Math.trunc(Math.random() * (measureNum + 1)));

  const startOfProgressiion = randNumberFunc(100);
  const stepOfProgressiion = randNumberFunc(10);
  const numberElementForDots = randNumberFunc(7);
  const progressionArr = [];

  for (let i = 0; i < 8; i += 1) {
    progressionArr.push(startOfProgressiion + stepOfProgressiion * i);
  }

  const replacedDotsElement = progressionArr[numberElementForDots];
  const rightAnswerInStrType = replacedDotsElement.toString();
  progressionArr[numberElementForDots] = '..';
  const question = progressionArr.join(' ');

  return [question, rightAnswerInStrType];
};

export default gameBrain;
