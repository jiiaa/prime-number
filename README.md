# PRIME NUMBER APPLICATION - A Recruitment Task

The task was to develop a full stack application which has a backend API (in my case Node.js) and a React frontend.

The backend features two methods of which one accepts a list of intergers, calculates the sum of those and tells if the sum is a prime number, and the other accepts an integer and tells if it is a prime number.

The frontend provides an interface for testing/using th backend. One should be able to enter 1-n numbers to be sent to the backend and enter an integer to be sent to the backend.

The format of the requests to the backend would be:

- `GET http://localhost/myapi/?action=sumandcheck&numbers=1,2,3`
- `GET http://localhost/myapi/?action=checkprime&number=89`

The responses would be respectively:

- `{"result": 6, "isPrime": false}`
- `{"isPrime": true}`

## Technology Stack

Backend

- Node.js
- Express
- Dotenv
- Morgan
- Jest
- Supertest

Frontend

- React
- React Hooks
- Axios
- CSS
- Cypress

## Developing and Testing The Application

First clone the repository. Next install the dependencies of the backend and the frontend.

    https://github.com/jiiaa/prime-number.git

    cd prime-number/backend
    npm install

    cd ../frontend
    npm install

When those are ready you can start the backend and the frontend by running command `npm start` in the respective folders.

There are some tests in the backend folder to test the endpoint/methods. There are also some test in the frontend for end-to-end testing.

To run the test backend tests in the backedn folder:

`npm test`

To run the e2e tests in the frontend first start both and then run in the frontend folder:

`npm run test:e2e`
