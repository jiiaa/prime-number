describe('Prime Number application', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000');
  });

  // Find the text withing the page
  it('front page can be opened', function() {
    cy.contains('The Prime Number Application');
  });

  // Get by class of the element
  it('font page contains two sections', function() {
    cy.get('.multinumbers')
      .get('.singlenumber');
  });

  // Get by element type and position within a set of DOM elements
  it('front page contains two forms', function() {
    cy.get('form:first')
      .get('form:last');
  });
});

describe('Prime Number logic with multiple numbers', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000');
  });

  // Get by element type and position withing a set of DOM elements
  // Get by class
  it('Entering numbers and getting sum 13 and prime number as yes', function() {
    cy.get('input:first').type('3,7,3')
      .get('input').eq(1).click()
      .get('.result-multi').contains('13')
      .get('.prime-multi').contains('Yes');
  });

  it('Entering numbers and getting sum 24 and prime number as not', function() {
    cy.get('input:first').type('3,7,3,8,2,1')
      .get('input').eq(1).click()
      .get('.result-multi').contains('24')
      .get('.prime-multi').contains('Not');
  });

  // Get element by type and relations in the DOM
  it('Entering numbers and alphabets including whitespaces and getting sum 73 and prime number as yes', function() {
    cy.get('form > input').eq(0).type('11 , a, 23, z,b, 9, 30 ')
      .get('input').eq(1).click()
      .get('.result-multi').contains('73')
      .get('.prime-multi').contains('Yes');
  });

  it('Sending empty value and getting error response', function() {
    cy.get('input').eq(1).click();

    cy.get('strong')
      .should('contain', 'Numbers are missing or invalid')
      .and('have.css', 'color', 'rgb(251, 147, 52)');
  });
});

describe('Prime Number logic with single number', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000');
  });

  // Get by ID and the next element in the DOM
  it('Entering number 11 returns yes', function() {
    cy.get('#number').type('11')
      .next().click()
      .get('.result-prime').contains('Yes');
  });

  // Get by element type and input type
  // Get by element type and position in a set of DOM elements from the end
  it('Entering number 32 returns not', function() {
    cy.get('input[type="number"]').type('32')
      .get('input').eq(-1).click()
      .get('.result-prime').contains('Not');
  })

  it('Sending empty value and getting error response', function() {
    cy.get('input[type="submit"]').eq(1).click();

    cy.get('.error')
      .should('contain', 'Number is invalid')
      .and('have.css', 'color', 'rgb(251, 147, 52)')
  });
})
