const evenGame = (maxNumber) => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no"';
  const questionAndAnswer = () => {
    const question = Math.floor(Math.random() * maxNumber);
    const answer = question % 2 === 0 ? 'yes' : 'no';
    return [question, answer];
  };

  return [rule, questionAndAnswer];
};

export default evenGame;
