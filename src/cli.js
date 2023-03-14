import readlineSync from 'readline-sync';

const askingName = () => {
    // Wait for user's response.
    let userName = readlineSync.question('May I have your name? ');
    console.log('Hi ' + userName + '!');
};

export {askingName};