const sumAndCheck = (numbers, callback) => {
  // Split numbers to array
  const inArray = numbers.split(',')
    // Convert characters to integers
    .map(item => parseInt(item))
    // Take only numbers and leave other characters out
    .filter(item => !isNaN(item))
    // Calculate the sum of numbers
    .reduce((sum, number) => {
      return sum + number;
    }, 0);

  callback(sumPrime(inArray));
};

const checkPrime = (number, callback) => {
  // Prime number is a natural number greater than 1
  // First prime number is 3
  if (number < 3) {
    return { 'isPrime': false };
  }
  callback(singlePrime(number));
};

const singlePrime = num => {
  for (let i = 2; i < num; i++) {
    if(num % i === 0) return { 'isPrime': false };
  }
  return { 'isPrime': true };
};

const sumPrime = sum => {
  for (let i = 2; i < sum; i++) {
    if(sum % i === 0) return {
      'result': sum,
      'isPrime': false
    };
  }
  return { 'result': sum, 'isPrime': true };
};

module.exports = {
  sumAndCheck,
  checkPrime,
};
