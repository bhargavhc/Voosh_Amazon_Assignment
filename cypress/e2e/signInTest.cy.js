import SignInPage from '../support/pageObjects/signInPage';

describe('Amazon Sign-in Page Tests', () => {
    beforeEach(() => {
        SignInPage.visitSignInPage();
    });

    it('TC_20 - Verify email/mobile input field visibility', () => {
        SignInPage.verifyInputFieldVisible();
    });

    it('TC_21 - Verify presence of Continue button', () => {
        SignInPage.verifyContinueButtonVisible();
    });

    it('TC_22 - Verify text content of form', () => {
        SignInPage.verifyPageTextContent();
    });

    it('TC_23 - Valid email entry', () => {
        SignInPage.enterEmailOrMobile('testuser@example.com');
        SignInPage.clickContinue();
        cy.url().should('include', 'ap/signin');
    });

    it('TC_24 - Valid mobile number entry', () => {
        SignInPage.enterEmailOrMobile('9876543210');
        SignInPage.clickContinue();
        cy.url().should('include', 'ap/signin');
    });

    it('TC_25 - Invalid email format', () => {
        SignInPage.enterEmailOrMobile('abc@');
        SignInPage.clickContinue();
        SignInPage.verifyErrorMessage('Invalid email format');
    });

    it('TC_26 - Empty input field', () => {
        SignInPage.clickContinue();
        SignInPage.verifyErrorMessage('Enter your email or mobile phone number');
    });

    it('TC_27 - Non-existent account email', () => {
        SignInPage.enterEmailOrMobile('nonexistent@example.com');
        SignInPage.clickContinue();
        SignInPage.verifyErrorMessage('We cannot find an account with that email address');
    });

    it('TC_28 - Non-numeric mobile number', () => {
        SignInPage.enterEmailOrMobile('abcd');
        SignInPage.clickContinue();
        SignInPage.verifyErrorMessage('Invalid phone number');
    });
});