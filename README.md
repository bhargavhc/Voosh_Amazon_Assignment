# Amazon Test Automation with Cypress

This repository contains end-to-end (E2E) test automation scripts for [Amazon India](https://www.amazon.in) using [Cypress](https://www.cypress.io/).

## Project Structure

```
AMAZON_TEST/
│── cypress/
│   ├── support/
│   │   ├── commands.js  # Custom commands for reusable actions
│   │── integration/
│   │   ├── navigationTests.cy.js  # Navigation-related test cases
│   │   ├── cartTests.cy.js  # Tests for adding items to the cart
│   │── pageObjects/
│   │   ├── navigationPage.js  # Navigation Page Object
│── package.json  # Dependencies and Cypress configuration
│── cypress.config.js  # Cypress settings
│── README.md  # Project instructions
```

- **cypress/e2e/**: Contains Cypress test files.
- **cypress/fixtures/**: Test data and mock responses.
- **cypress/support/commands.js**: Custom Cypress commands.
- **cypress/support/pageObjects/**: Page Object Model classes for test abstraction.
- **cypress/support/e2e.js**: Cypress support file for global configuration.

## Setup

1. **Install dependencies**

   ```sh
   npm install
   ```

2. **Open Cypress Test Runner**

   ```sh
   npx cypress open
   ```

   Or run tests in headless mode:

   ```sh
   npx cypress run
   ```

## Test Cases

- **Navigation Tests** ([cypress/e2e/amazonMenuTest.cy.js](cypress/e2e/amazonMenuTest.cy.js)):
  - Verify visibility of "Hello, sign in"
  - Redirect to login page
  - Validate trending links and categories
  - Add a mobile phone to cart via menu

- **Sign-In Tests** ([cypress/e2e/signInTest.cy.js](cypress/e2e/signInTest.cy.js)):
  - Input field and button visibility
  - Valid/invalid email and mobile number scenarios
  - Error message verifications

## Custom Commands

Defined in [cypress/support/commands.js](cypress/support/commands.js):

- `cy.signIn(emailOrMobile)`
- `cy.openNavigationMenu()`
- `cy.verifyErrorMessage(expectedMessage)`
- `cy.addItemToCart(itemSelector)`

## Page Objects

- [`NavigationPage`](cypress/support/pageObjects/navigationPage.js): Navigation menu interactions.
- [`SignInPage`](cypress/support/pageObjects/signInPage.js): Sign-in page interactions.

## Configuration

- Base URL is set to `https://www.amazon.in` in [cypress.config.js](cypress.config.js).

