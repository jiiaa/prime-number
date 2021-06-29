// Middleware function taking care of unknown paths
const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'Unknown endpoint' });
};

module.exports = {
  unknownEndpoint
};
