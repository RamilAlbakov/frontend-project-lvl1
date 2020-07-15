const gcdGame = (maxNumber) => {
  const rule = 'Find the greatest common divisor of given numbers';

  const questionAndAnswer = () => {
    const gcd = (a, b) => {
      if (b === 0) {
        return a;
      }
      return gcd(b, a % b);
    };

    const firstNum = Math.floor(Math.random() * maxNumber);
    const secondNum = Math.floor(Math.random() * maxNumber);

    const question = `${firstNum} ${secondNum}`;
    const answer = String(gcd(firstNum, secondNum));

    return [question, answer];
  };

  return [rule, questionAndAnswer];
};

export default gcdGame;
