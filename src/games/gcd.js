import generateNumber from '../utils.js';
import playGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const getQuestionAndAnswer = () => {
  const maxNumber = 20;
  const firstNum = generateNumber(maxNumber);
  const secondNum = generateNumber(maxNumber);

  const question = `${firstNum} ${secondNum}`;
  const answer = String(getGcd(firstNum, secondNum));

  return [question, answer];
};

const playGcdGame = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default playGcdGame;