const gameBrain = () => {
  const arithmeticSign = ['+', '-', '*'];

  const randNumberFunc = (measureNum) => (Math.trunc(Math.random() * (measureNum + 1)));

  const randomNumber1 = randNumberFunc(100);
  const randomNumber2 = randNumberFunc(100);
  const rndForSign = randNumberFunc(2);

  const question = `${randomNumber1} ${arithmeticSign[rndForSign]} ${randomNumber2}`;

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
  const rightAnswerInStrType = rightAnswer.toString();
  return [question, rightAnswerInStrType];
};

export default gameBrain;
