import { generateNumber, gcd } from '../utils.js';

const gcdGame = () => {
  const rule = 'Find the greatest common divisor of given numbers';

  const questionAndAnswer = () => {
    const maxNumber = 20;
    const firstNum = generateNumber(maxNumber);
    const secondNum = generateNumber(maxNumber);

    const question = `${firstNum} ${secondNum}`;
    const answer = String(gcd(firstNum, secondNum));

    return [question, answer];
  };

  return [rule, questionAndAnswer];
};

export default gcdGame;
