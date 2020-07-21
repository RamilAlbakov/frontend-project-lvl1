import generateNumber from '../utils.js';
import playGame from '../index.js';

const rule = 'What is the result of the expression?';

const getOperation = () => {
  const operations = ['+', '*', '-'];
  const operationIndex = generateNumber(operations.length);

  return operations[operationIndex];
};

const calcNumbers = (operation, firstNumber, secondNumber) => {
  let result;

  switch (operation) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    default:
      break;
  }

  return result;
};

const questionAndAnswer = () => {
  const maxNumber = 20;
  const firstNum = generateNumber(maxNumber);
  const secondNum = generateNumber(maxNumber);

  const operation = getOperation();
  const question = `${firstNum} ${operation} ${secondNum}`;
  const answer = calcNumbers(operation, firstNum, secondNum);

  return [question, String(answer)];
};

const calcGame = () => {
  playGame(rule, questionAndAnswer);
};

export default calcGame;
