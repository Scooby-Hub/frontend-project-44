import readlineSync from 'readline-sync';

const askingName = () => {
  // Wait for user's response.
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default askingName;
