const generateNumber = (maxNumber) => Math.floor(Math.random() * maxNumber);

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const isPrime = (num) => {
  if (num <= 1 || num % 2 === 0) return false;
  if (num <= 3) return true;

  for (let i = 3; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};
export { generateNumber, gcd, isPrime };
