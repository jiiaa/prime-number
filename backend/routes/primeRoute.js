const router = require('express').Router();
const primeNumber = require('../services/primeNumber');

router.get('/', (req, res) => {
  // Get the query parameters
  const action = req.query.action;
  const numbers = req.query.numbers;
  const number = parseInt(req.query.number);
  // Check if action is valid
  if (!action || (action !== 'sumandcheck' && action !== 'checkprime')) {
    return res.status(400).json({ message: 'Bad action or action missing' });
  }
  // Check if multiple numbers are provided
  if (action === 'sumandcheck' &&
    (numbers === undefined ||
      numbers.length < 1)
  ) {
    return res.status(400).json({ message: 'Numbers are missing or invalid' });
  }
  // Check if single number is provided and is a positive number
  if (
    action  === 'checkprime' &&
    (number === undefined ||
      isNaN(number) ||
      number < 0)
  ) {
    return res.status(400).json({ message: 'Number is invalid' });
  }

  // Call the method based on the action and send response
  switch (action) {
  case 'sumandcheck':
    primeNumber.sumAndCheck(numbers, function(response) {
      res.json(response);
    });
    break;
  case 'checkprime':
    primeNumber.checkPrime(number, function(response) {
      res.json(response);
    });
    break;
  default:
    res.json({ status: 200, action, numbers, number });
  }
});

module.exports = router;
