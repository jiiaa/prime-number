const router = require('express').Router();
const primeNumber = require('../services/primeNumber');

router.get('/', (req, res) => {
  // Get the query parameters
  const action = req.query.action;
  const numbers = req.query.numbers;
  const number = parseInt(req.query.number);
  console.log('numbers', numbers);
  // Check if action is valid
  if (!action || (action !== 'sumandcheck' && action !== 'checkprime')) {
    return res.send('Action is missing or invalid');
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
