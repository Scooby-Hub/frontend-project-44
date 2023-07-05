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
  const [value1, value2] = [getRandomNumber(0, 20), getRandomNumber(0, 20)];
  const numberMaximal = Math.max(value1, value2);
  const numberMinimal = Math.min(value1, value2);

  const question = `${value1} ${value2}`;
  const rightAnswer = getGcd(numberMaximal, numberMinimal);

  return [question, rightAnswer.toString()];
};

export default gameBrain;
