const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

describe('Validate the logic checking if the number is a prime number', () => {

  test('number 89 is confirmed to be a prime number', async () => {
    const response = await api
      .get('/myapi/?action=checkprime&number=89')
      .expect(200)
      .expect('Content-Type', /application\/json/);

    expect(response.body.isPrime).toBe(true);
  });

  test('number 24 is  confirmed not to be a prime number', async () => {
    const response = await api
      .get('/myapi/?action=checkprime&number=24')
      .expect(200)
      .expect('Content-Type', /application\/json/);

    expect(response.body.isPrime).toBe(false);
  });
});

describe('When sending a false request', () => {

  test('a string of letters is rejected as invalid number', async () => {
    const response = await api
      .get('/myapi/?action=checkprime&number=xyz')
      .expect(400)
      .expect('Content-Type', /application\/json/);

    expect(response.body.message).toBe('Number is invalid');
  });

  test('no number at all is rejected as invalid number', async () => {
    const response = await api
      .get('/myapi/?action=checkprime&number=')
      .expect(400)
      .expect('Content-Type', /application\/json/);

    expect(response.body.message).toBe('Number is invalid');
  });

  test('a wrong action if rejected as missing action', async () => {
    const response = await api
      .get('/myapi/?action=checkingprime&number=7')
      .expect(400)
      .expect('Content-Type', /application\/json/);

    expect(response.body.message).toBe('Bad action or action missing');
  });
});
