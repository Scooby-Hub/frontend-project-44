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
    const resultAnswer = readlineSync.question(`Question: ${questionNAnswer[0]}\nYour answer: `);
    if (resultAnswer === questionNAnswer[1]) {
      console.log('Correct!');
    }
    if (resultAnswer !== questionNAnswer[1]) {
      console.log(`'${resultAnswer}' is wrong answer ;(. Correct answer was '${questionNAnswer[1]}'.`);
      console.log(`Let's try again, ${userName}!`);
      return 0;
    }
  }

  console.log(`Congratulations, ${userName}!!`);
  return 0;
};

export default commonTemplate;
