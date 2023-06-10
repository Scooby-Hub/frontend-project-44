import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const commonTemplate = (description, questionNAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 1; i < 4; i += 1) {
    const [question, answer] = questionNAnswer();
    console.log(`Question: ${question}`);
    const resultAnswer = readlineSync.question('Your answer: ');
    if (resultAnswer === answer) {
      console.log('Correct!');
    }
    if (resultAnswer !== answer) {
      console.log(`'${resultAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return 0;
    }
  }

  console.log(`Congratulations, ${userName}!!`);
  return 0;
};

export default commonTemplate;
