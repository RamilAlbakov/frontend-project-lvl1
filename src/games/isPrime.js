import { generateNumber, isPrime } from '../utils.js';

const isPrimeGame = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

  const questionAndAnswer = () => {
    const maxNumber = 100;
    const question = generateNumber(maxNumber);
    const answer = isPrime(question) ? 'yes' : 'no';

    return [question, answer];
  };

  return [rule, questionAndAnswer];
};

export default isPrimeGame;
