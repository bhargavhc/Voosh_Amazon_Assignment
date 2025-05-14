class NavigationPage {
    openNavigationMenu() {
        cy.openNavigationMenu(); 
    }

    verifySignInVisible() {
        cy.contains('Hello, sign in', { timeout: 10000 }).should('be.visible');
    }

    clickSignIn() {
        cy.contains('Hello, sign in', { timeout: 10000 }).should('be.visible').click();
    }

    verifyTrendingLinks() {
        cy.contains('Bestsellers', { timeout: 10000 }).should('be.visible').scrollIntoView();
        cy.contains('New Releases', { timeout: 10000 }).should('be.visible').scrollIntoView();
        cy.contains('Movers and Shakers', { timeout: 10000 }).should('be.visible').scrollIntoView();
    }

    verifyCategoriesVisible() {
        cy.contains('Mobiles, Computers', { timeout: 10000 }).should('be.visible').scrollIntoView();
        cy.contains('TV, Appliances, Electronics', { timeout: 10000 }).should('be.visible').scrollIntoView();
        cy.contains("Men's Fashion", { timeout: 10000 }).should('be.visible').scrollIntoView();
        cy.contains("Women's Fashion", { timeout: 10000 }).should('be.visible').scrollIntoView();
    }

    navigateToCategory(categoryName) {
        cy.contains(categoryName, { timeout: 10000 }).should('be.visible').click({ force: true });
    }

    navigateToSubCategory(parentCategory, subCategory) {
        cy.contains(parentCategory, { timeout: 10000 }).should('be.visible').click();
        cy.contains(subCategory, { timeout: 10000 }).should('be.visible').click();
    }

    addMobileToCart() {
    this.navigateToSubCategory('Shop by Category', 'Mobiles, Computers');
    this.navigateToCategory('All Mobile Phones');
    //cy.get('img[alt="Neo 10R"]').scrollIntoView().should('be.visible').click();
    cy.addItemToCart('img[alt="Neo 10R"]'); 
}
}

export default new NavigationPage();