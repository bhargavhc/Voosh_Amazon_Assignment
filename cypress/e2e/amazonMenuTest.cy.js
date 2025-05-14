import NavigationPage from '../support/pageObjects/navigationPage';

describe('Amazon Navigation Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('TC_01 - Verify "Hello, sign in" visibility', () => {
        NavigationPage.openNavigationMenu();
        NavigationPage.verifySignInVisible();
    });

    it('TC_02 - Verify redirect to login page', () => {
        NavigationPage.openNavigationMenu();
        NavigationPage.clickSignIn();
        cy.url().should('include', 'signin');
    });

    it('TC_03 - Validate visibility of trending links', () => {
        NavigationPage.openNavigationMenu();
        NavigationPage.verifyTrendingLinks();
    });

    it('TC_09 - Validate that categories are visible', () => {
        NavigationPage.openNavigationMenu();
        NavigationPage.verifyCategoriesVisible();
    });

    it('TC_29 - Navigate to a mobile phone via menu and add to cart', () => {
        NavigationPage.openNavigationMenu();
        NavigationPage.addMobileToCart(); 
    });
});