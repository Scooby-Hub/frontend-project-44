const gameBrain = () => {
  const randNumberFunc = (measureNum) => (Math.trunc(Math.random() * (measureNum + 1)));

  const [dividedA, dividerB] = [randNumberFunc(1000), randNumberFunc(1000)];
  const arrOfAandB = [dividedA, dividerB];
  let maxNum = (Math.max(...arrOfAandB));
  let minNum = (Math.min(...arrOfAandB));
  let reminderResultD;
  let gcd;
  const question = `${dividedA} ${dividerB}`;

  do {
    if (maxNum % minNum !== 0) {
      reminderResultD = maxNum % minNum;
      maxNum = minNum;
      minNum = reminderResultD;
    }
    if (maxNum % minNum === 0) {
      gcd = minNum;
    }
  } while (maxNum % minNum !== 0);
  const rightAnswerInStrType = gcd.toString();
  return [question, rightAnswerInStrType];
};

export default gameBrain;
