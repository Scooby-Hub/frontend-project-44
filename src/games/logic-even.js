const gameBrain = () => {
  const randomNumber = Math.trunc(Math.random() * 100 + 1);
  const rightAnswerFunc = (number) => (number % 2 === 0 ? 'yes' : 'no');
  const question = randomNumber.toString();
  const rightAnswer = rightAnswerFunc(randomNumber);
  const rightAnswerInStrType = rightAnswer.toString();
  return [question, rightAnswerInStrType];
};

export default gameBrain;
