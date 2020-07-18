import { generateNumber } from '../utils.js';

const progressionGame = () => {
  const rule = 'What number is missing in the progression?';

  const questionAndAnswer = () => {
    const progressionLength = 10;
    const maxProgressionStep = 10;
    const maxNumber = 100;

    let progressionNum = generateNumber(maxNumber);
    const progressionStep = generateNumber(maxProgressionStep) + 1;

    const progression = [];
    for (let i = 0; i < progressionLength; i += 1) {
      progression.push(progressionNum);
      progressionNum += progressionStep;
    }

    const indexOfAnswer = generateNumber(progressionLength);
    const answer = String(progression[indexOfAnswer]);

    progression[indexOfAnswer] = '..';
    const question = progression.join(' ');

    return [question, answer];
  };

  return [rule, questionAndAnswer];
};

export default progressionGame;
