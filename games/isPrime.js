const isPrimeGame = (maxNumber) => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

  const questionAndAnswer = () => {
    const question = Math.floor(Math.random() * maxNumber);

    const isPrime = (num) => {
      if (num <= 1 || num % 2 === 0) return false;
      if (num <= 3) return true;

      for (let i = 3; i <= num / 2; i += 1) {
        if (num % i === 0) return false;
      }

      return true;
    };

    const answer = isPrime(question) ? 'yes' : 'no';

    return [question, answer];
  };

  return [rule, questionAndAnswer];
};

export default isPrimeGame;
