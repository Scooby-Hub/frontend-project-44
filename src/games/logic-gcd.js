import getRandom from '../utils.js';

const getGcd = (max, min) => {
  let maxNum = max;
  let minNum = min;
  let gcd;
  do {
    if (maxNum % minNum !== 0) {
      const reminderResultD = maxNum % minNum;
      maxNum = minNum;
      minNum = reminderResultD;
    }
    if (maxNum % minNum === 0) {
      gcd = minNum;
    }
  } while (maxNum % minNum !== 0);
  return gcd;
};

const gameBrain = () => {
  const [dividedA, dividerB] = [getRandom(1, 1000), getRandom(1, 1000)];
  const arrOfAandB = [dividedA, dividerB];
  const maxNumber = (Math.max(...arrOfAandB));
  const minNumber = (Math.min(...arrOfAandB));

  const question = `${dividedA} ${dividerB}`;
  const rightAnswer = getGcd(maxNumber, minNumber);

  return [question, rightAnswer.toString()];
};

export default gameBrain;
