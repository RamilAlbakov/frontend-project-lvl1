const calcGame = (maxNumber) => {
  const rule = 'What is the result of the expression?';

  const questionAndAnswer = () => {
    const firstNum = Math.floor(Math.random() * maxNumber);
    const secondNum = Math.floor(Math.random() * maxNumber);

    const operationsNum = 3; // used 3 operations '+', '-', '*'
    const operation = Math.floor(Math.random() * operationsNum);

    let question;
    let answer;

    switch (operation) {
      case 0:
        answer = firstNum + secondNum;
        question = `${firstNum} + ${secondNum}`;
        break;
      case 1:
        answer = firstNum * secondNum;
        question = `${firstNum} * ${secondNum}`;
        break;
      case 2:
        if (firstNum > secondNum) {
          answer = firstNum - secondNum;
          question = `${firstNum} - ${secondNum}`;
        } else {
          answer = secondNum - firstNum;
          question = `${secondNum} - ${firstNum}`;
        }
        break;
      default:
        break;
    }

    return [question, String(answer)];
  };

  return [rule, questionAndAnswer];
};

export default calcGame;
