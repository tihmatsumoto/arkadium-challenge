
describe('Test Case: Homepage validation', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  it('Should find login button and verify correct naming', () => {
    cy.get('[data-element-description="nav-login-button"]').should('have.text', 'Login');
  });

  it('Should go to footer and verify if "made in NY" is displayed', () => {
    cy.scrollTo('bottom');
    cy.get('.Footer-madeInNY-yPuokR8q').should('be.visible');
  });
  
  it('Should use search bar and find Jewel Shuffle', () => {
    cy.get('[data-element-description="nav-search-button"]').click();
    cy.get('[data-element-description="search-games"]').type('Jewel Shuffle');
    cy.get('[data-name="22"]').should('contain.text', 'Jewel Shuffle');
  });
});