import readlineSync from 'readline-sync';

const playGame = (gameFunc) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const maxNumber = 100;
  const [gameRules, gameQuestionAndAnswer] = gameFunc(maxNumber);
  console.log(gameRules);

  const rounds = 3;
  let rightAnswersCount = 0;

  while (rightAnswersCount < rounds) {
    const [question, rightAnswer] = gameQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      console.log('Correct!');
      rightAnswersCount += 1;
      if (rightAnswersCount === rounds) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}"`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

export default playGame;
