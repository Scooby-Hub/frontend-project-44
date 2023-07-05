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
  const [valueA, valueB] = [getRandomNumber(1, 20), getRandomNumber(1, 20)];
  const numberMaximal = Math.max(valueA, valueB);
  const numberMinimal = Math.min(valueA, valueB);

  const question = `${valueA} ${valueB}`;
  const rightAnswer = getGcd(numberMaximal, numberMinimal);

  return [question, rightAnswer.toString()];
};

export default gameBrain;
