# SauceDemo Test

This project contains an automated test scenario for the SauceDemo website using Cypress.

## Prerequisites

- Node.js
- Cypress
- Browser (Chrome, or Firefox, or Electron)

## Setup

1. Install Node.js.
2. run (`npm init`)
3. run (`npm install cypress --save-dev`)

Please read <a href="https://docs.cypress.io/guides/getting-started/installing-cypress">official instruction</a>.

## Test Scenario

The test scenario performs the following steps:

1. Create a browser instance and set up the test environment.
2. Open the login page and verify the Swag Labs logo.
3. Login with valid credentials.
4. Open the menu to access the Logout button and verify its presence.
5. Verify that the inventory page is displayed.
6. Navigate to the product detail page and verify the product name.
7. Add the item to the cart and verify the "Remove" button.
8. Navigate to the shopping cart page and verify the item in the cart.
9. Continue with the checkout process and verify the checkout page.
10. Enter required shipping and payment information.
11. Proceed to the confirmation page and verify the item in the overview.
12. Logout from the website.
13. Tear down the test environment.

## Running the Test
 

- The test will be executed with the provided test data (username and password). If the test passes, the message "test passed" will be displayed.
