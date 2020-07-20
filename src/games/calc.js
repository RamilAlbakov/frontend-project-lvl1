import generateNumber from '../utils.js';
import playGame from '../index.js';

const rule = 'What is the result of the expression?';

const getOperation = () => {
  const operations = ['+', '*', '-'];
  const operationsNum = operations.length;
  const operationIndex = generateNumber(operationsNum);

  return operations[operationIndex];
};

const questionAndAnswer = () => {
  const maxNumber = 20;
  const firstNum = generateNumber(maxNumber);
  const secondNum = generateNumber(maxNumber);

  let question;
  let answer;
  const operation = getOperation();

  switch (operation) {
    case '+':
      answer = firstNum + secondNum;
      question = `${firstNum} + ${secondNum}`;
      break;
    case '*':
      answer = firstNum * secondNum;
      question = `${firstNum} * ${secondNum}`;
      break;
    case '-':
      answer = firstNum - secondNum;
      question = `${firstNum} - ${secondNum}`;
      break;
    default:
      break;
  }

  return [question, String(answer)];
};

const calcGame = () => {
  playGame(rule, questionAndAnswer);
};

export default calcGame;
