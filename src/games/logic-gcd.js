import getRandomNumber from '../utils.js';

const getGcd = (maximal, minimal) => {
  let maximalNumber = maximal;
  let minimalNumber = minimal;
  let gcd;
  do {
    if (maximalNumber % minimalNumber !== 0) {
      const remainderResultD = maximalNumber % minimalNumber;
      maximalNumber = minimalNumber;
      minimalNumber = remainderResultD;
    }
    if (maximalNumber % minimalNumber === 0) {
      gcd = minimalNumber;
    }
  } while (maximalNumber % minimalNumber !== 0);
  return gcd;
};

const gameBrain = () => {
  const [dividendA, divisorB] = [getRandomNumber(1, 1000), getRandomNumber(1, 1000)];
  const arrayOfaAndB = [dividendA, divisorB];
  const numberMaximal = (Math.max(...arrayOfaAndB));
  const numberMinimal = (Math.min(...arrayOfaAndB));

  const question = `${dividendA} ${divisorB}`;
  const rightAnswer = getGcd(numberMaximal, numberMinimal);

  return [question, rightAnswer.toString()];
};

export default gameBrain;
