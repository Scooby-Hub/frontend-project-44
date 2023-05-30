import { greetingsFuncExp, questionFuncExp, endsGameFuncExp } from '../index.js';

const gameBrain = () => {
  const randNumberFunc = (measureNum) => (Math.trunc(Math.random() * (measureNum + 1)));

  const startOfProgressiion = randNumberFunc(100); // Начало прогрессии
  const stepOfProgressiion = randNumberFunc(10); // Шаг
  const numberElementToDots = randNumberFunc(7); // Номер элемента для замены в массиве
  const progressionArr = []; // Массив
  // Массив от 0 до 7
  for (let i = 0; i < 8; i += 1) {
    progressionArr.push(startOfProgressiion + stepOfProgressiion * i);
  }

  const replacedDotsElement = progressionArr[numberElementToDots]; // Сохранить значение элемента
  progressionArr[numberElementToDots] = '..'; // Замена элемента массива на две точки
  const progressionStr = progressionArr.join(' '); // Массив перевод в строку

  return [progressionStr, replacedDotsElement.toString()];
};

const gameProgression = () => {
  const theGame = () => {
    greetingsFuncExp('What number is missing in the progression?');
    let counter = 0;
    for (let i = 1; i <= 3; i += 1) {
      counter += questionFuncExp(gameBrain());
      if (counter === 3) {
        endsGameFuncExp();
      } else if (Math.sign(counter) === -1) {
        return 0;
      }
    }
    return 0;
  };

  theGame();
};

export default gameProgression;
