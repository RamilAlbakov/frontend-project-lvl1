import readlineSync from 'readline-sync';

const playGame = (gameFunc) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const [gameRules, gameQuestionAndAnswer] = gameFunc();
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
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}"`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (rightAnswersCount === rounds) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default playGame;
