import readlineSync from 'readline-sync';

const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const evenGame = (name) => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no"';
  console.log(rule);

  const maxNumber = 1000;
  const rounds = 3;
  let rightAnswersCount = 0;

  while (rightAnswersCount < rounds) {
    const num = Math.floor(Math.random() * maxNumber);
    const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${num}`);

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

export { evenGame, greeting };
