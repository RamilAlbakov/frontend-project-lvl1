import generateNumber from '../utils.js';
import playGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const questionAndAnswer = () => {
  const maxNumber = 1000;
  const question = generateNumber(maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const evenGame = () => {
  playGame(rule, questionAndAnswer);
};

export default evenGame;
