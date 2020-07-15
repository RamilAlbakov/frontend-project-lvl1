const progressionGame = (maxNumber) => {
  const rule = 'What number is missing in the progression?';

  const questionAndAnswer = () => {
    const progressiomLength = 10;
    const maxProgressionStep = 10;

    const firstNum = Math.floor(Math.random() * maxNumber);
    const progressionStep = Math.floor(Math.random() * maxProgressionStep) + 1;

    const questionArr = [firstNum];
    for (let i = 1; i < progressiomLength; i += 1) {
      questionArr[i] = questionArr[i - 1] + progressionStep;
    }

    const indexOfAnswer = Math.floor(Math.random() * progressiomLength);
    const answer = String(questionArr[indexOfAnswer]);

    questionArr[indexOfAnswer] = '..';
    const question = questionArr.join(' ');

    return [question, answer];
  };

  return [rule, questionAndAnswer];
};

export default progressionGame;
