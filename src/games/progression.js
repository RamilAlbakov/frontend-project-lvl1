import generateNumber from '../utils.js';
import playGame from '../index.js';

const rule = 'What number is missing in the progression?';

const generateProgression = (startElem, length, step) => {
  const progression = [];
  let progressionNum = startElem;

  for (let i = 0; i < length; i += 1) {
    progression.push(progressionNum);
    progressionNum += step;
  }

  return progression;
};

const questionAndAnswer = () => {
  const maxNumber = 100;
  const progressionLength = 10;
  const maxProgressionStep = 10;

  const firstNum = generateNumber(maxNumber);
  const progressionStep = generateNumber(maxProgressionStep) + 1;
  const progression = generateProgression(firstNum, progressionLength, progressionStep);

  const indexOfAnswer = generateNumber(progressionLength);
  const answer = String(progression[indexOfAnswer]);
  progression[indexOfAnswer] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const progressionGame = () => {
  playGame(rule, questionAndAnswer);
};

export default progressionGame;
