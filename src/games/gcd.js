import generateNumber from '../utils.js';
import playGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const questionAndAnswer = () => {
  const maxNumber = 20;
  const firstNum = generateNumber(maxNumber);
  const secondNum = generateNumber(maxNumber);

  const question = `${firstNum} ${secondNum}`;
  const answer = String(gcd(firstNum, secondNum));

  return [question, answer];
};

const gcdGame = () => {
  playGame(rule, questionAndAnswer);
};

export default gcdGame;
