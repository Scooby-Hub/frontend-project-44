const gameBrain = () => {
  const randNumberFunc = (measureNum) => (Math.floor(Math.random() * (measureNum - 1)) + 2);
  const randNumber = randNumberFunc(100);
  const question = randNumber.toString();
  const sqRootArr = [];
  for (let i = 0; i < randNumber; i += 1) {
    const sqrtNumber = Math.sqrt(randNumber - i);
    if (sqrtNumber === Math.trunc(sqrtNumber)) {
      sqRootArr.unshift(sqrtNumber);
    }
  }

  let rightAnswerInStrType;

  for (let i = 1; i < sqRootArr.length; i += 1) {
    if (randNumber % sqRootArr[i] === 0) {
      rightAnswerInStrType = 'no';
      return [question, rightAnswerInStrType];
    }
  }
  rightAnswerInStrType = 'yes';
  return [question, rightAnswerInStrType];
};

export default gameBrain;
