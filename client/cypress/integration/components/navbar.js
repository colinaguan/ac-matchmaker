describe('Navigation Bar Tests', function() {
  it('navigation bar renders', function() {
    cy.visit('localhost:3000');
    cy.get('#navbar-logged-out').should('exist');
  });
});
