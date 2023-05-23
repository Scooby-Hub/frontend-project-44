import readlineSync from 'readline-sync';

const askingName = () => {
  // Wait for user's response.
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default askingName;
