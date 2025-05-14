Cypress.Commands.add('signIn', (emailOrMobile) => {
    cy.visit('/ap/signin');
    cy.get('#ap_email').type(emailOrMobile);
    cy.get('#continue').click();
});

Cypress.Commands.add('openNavigationMenu', () => {
    cy.get('.hm-icon-label').click();
});

Cypress.Commands.add('verifyErrorMessage', (expectedMessage) => {
    cy.get('.a-alert-content', { timeout: 5000 }).should('be.visible').and('contain', expectedMessage);
});

Cypress.Commands.add('addItemToCart', (itemSelector) => {
    cy.get(itemSelector).scrollIntoView().should('be.visible').click();
cy.contains('Add to Cart', { timeout: 10000 })
  .should('be.visible')
  .scrollIntoView()
  .click({ force: true });
    cy.get('#confirmation-message', { timeout: 5000 }).should('be.visible');
});