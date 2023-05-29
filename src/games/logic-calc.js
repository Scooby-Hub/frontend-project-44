import { greetingsFuncExp, questionFuncExp, endsGameFuncExp } from '../index.js';

const gameCalc = () => {
  const gameBrain = () => {
    const arithmeticSign = ['+', '-', '*'];

    const randNumberFunc = (measureNum) => (Math.trunc(Math.random() * (measureNum + 1)));

    const randomNumber1 = randNumberFunc(100);
    const randomNumber2 = randNumberFunc(100);
    const rndForSign = randNumberFunc(2);

    const randomArithmeticExample = `${randomNumber1} ${arithmeticSign[rndForSign]} ${randomNumber2}`;

    let rightAnswer;
    if (rndForSign === 0) {
      rightAnswer = (randomNumber1 + randomNumber2);
    }
    if (rndForSign === 1) {
      rightAnswer = (randomNumber1 - randomNumber2);
    }
    if (rndForSign === 2) {
      rightAnswer = (randomNumber1 * randomNumber2);
    }
    return [randomArithmeticExample, rightAnswer.toString()];
  };

  greetingsFuncExp('What is the result of the expression?');
  let counter = 0;
  for (let i = 1; i < 4; i += 1) {
    counter += questionFuncExp(gameBrain());
    if (counter < 0) {
      i = 3;
    }
    if (counter === 3) {
      endsGameFuncExp();
    }
  }
};

export default gameCalc;
