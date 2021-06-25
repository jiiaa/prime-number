const sumAndCheck = (numbers, callback) => {
  // If numbers parameter or numbers are missing
  if (!numbers) {
    return callback({ 'status': 400, 'message': 'Numbers missing or invalid' });
  }
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
  const checkThis = parseInt(number);

  // If the character is not a number return error
  if (isNaN(checkThis)) {
    return callback({ status: 400, message: 'Invalid number' });
  // Prime number is a natural number greater than 1
  // First prime number is 3
  } else if (checkThis < 3) {
    return callback({ status: 400, message: 'Prime number must be bigger than 2' });
  }

  callback(singlePrime(checkThis));
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
