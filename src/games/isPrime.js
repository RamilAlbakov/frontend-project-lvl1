import generateNumber from '../utils.js';
import playGame from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num % 2 === 0) return false;

  for (let i = 3; i <= num / 2; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
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
