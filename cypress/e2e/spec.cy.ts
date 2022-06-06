describe('Wuolah app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Universities page can be opened', () => {
    cy.contains('Wuolah');
    cy.contains('Universidades');
  });

  it('load data and navigate', () => {
    cy.get('#university-1').scrollIntoView().click({ force: true });
    cy.contains('Descarga ');
    cy.contains('Universidades');
    cy.get('#back-button').click({ force: true });
    cy.contains('Wuolah');
    cy.contains('Universidades');
  });
});
