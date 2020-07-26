const generateNumber = (maxNumber, start = 0) => (start
  + Math.floor(Math.random() * (maxNumber - start)));

export default generateNumber;
