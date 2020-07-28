import generateNumber from '../utils.js';
import playGame from '../index.js';

const rule = 'What is the result of the expression?';

const getOperation = () => {
  const operations = ['+', '*', '-'];
  const operationIndex = generateNumber(operations.length);

  return operations[operationIndex];
};

const calcNumbers = (operation, firstNumber, secondNumber) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '-':
      return firstNumber - secondNumber;
    default:
      return firstNumber + secondNumber;
  }
};

const maxNumber = 20;

const getQuestionAndAnswer = () => {
  const firstNum = generateNumber(maxNumber);
  const secondNum = generateNumber(maxNumber);

  const operation = getOperation();
  const question = `${firstNum} ${operation} ${secondNum}`;
  const answer = calcNumbers(operation, firstNum, secondNum);

  return [question, String(answer)];
};

const playCalcGame = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default playCalcGame;
