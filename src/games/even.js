import { generateNumber } from '../utils.js';

const evenGame = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no"';
  const questionAndAnswer = () => {
    const maxNumber = 1000;
    const question = generateNumber(maxNumber);
    const answer = question % 2 === 0 ? 'yes' : 'no';
    return [question, answer];
  };

  return [rule, questionAndAnswer];
};

export default evenGame;
