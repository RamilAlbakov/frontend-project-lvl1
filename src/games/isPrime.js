import generateNumber from '../utils.js';
import playGame from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num);) {
    if (num % i === 0) return false;
    i += i === 2 ? 1 : 2;
  }

  return num > 1;
};

const questionAndAnswer = () => {
  const maxNumber = 100;
  const question = generateNumber(maxNumber);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const isPrimeGame = () => {
  playGame(rule, questionAndAnswer);
};

export default isPrimeGame;
