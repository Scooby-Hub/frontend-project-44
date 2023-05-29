import { greetingsFuncExp, questionFuncExp, endsGameFuncExp } from '../index.js';

const gameEven = () => {
  const gameBrain = () => {
    const randomNumber = Math.trunc(Math.random() * 100 + 1);
    const rightAnswerFunc = (number) => (number % 2 === 0 ? 'yes' : 'no');
    const rightAnswer = rightAnswerFunc(randomNumber);
    return [randomNumber, rightAnswer.toString()];
  };

  greetingsFuncExp('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  for (let i = 1; i < 4; i += 1) {
    counter += questionFuncExp(gameBrain());
    if (counter < 0) {
      i = 3;
    }
    if (counter === 3) {
      endsGameFuncExp();
      i = 3;
    }
  }
};

export default gameEven;
