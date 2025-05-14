class SignInPage {
    visitSignInPage() {
        cy.visit('/ap/signin');
    }

    enterEmailOrMobile(inputValue) {
        cy.get('#ap_email_login').type(inputValue);
    }

    clickContinue() {
        cy.get('#continue-announce').click();
    }

    verifyInputFieldVisible() {
        cy.get('#ap_email_login').should('be.visible');
    }

    verifyContinueButtonVisible() {
        cy.get('#continue-announce').should('be.visible');
    }

    verifyPageTextContent() {
        cy.contains('Sign in or create account').should('be.visible');
    }

    verifyErrorMessage(expectedMessage) {
        cy.verifyErrorMessage(expectedMessage); 
    }
}

export default new SignInPage();