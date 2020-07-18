import { generateNumber } from '../utils.js';

const calcGame = () => {
  const rule = 'What is the result of the expression?';

  const questionAndAnswer = () => {
    const maxNumber = 20;
    const firstNum = generateNumber(maxNumber);
    const secondNum = generateNumber(maxNumber);

    const operations = ['+', '*', '-'];
    const operationsNum = operations.length;
    const operationIndex = generateNumber(operationsNum);

    let question;
    let answer;

    switch (operationIndex) {
      case 0:
        answer = firstNum + secondNum;
        question = `${firstNum} + ${secondNum}`;
        break;
      case 1:
        answer = firstNum * secondNum;
        question = `${firstNum} * ${secondNum}`;
        break;
      case 2:
        answer = firstNum - secondNum;
        question = `${firstNum} - ${secondNum}`;
        break;
      default:
        break;
    }

    return [question, String(answer)];
  };

  return [rule, questionAndAnswer];
};

export default calcGame;
