# SauceDemo Test Automation

This project is an automation testing framework for [SauceDemo](https://www.saucedemo.com/) using [Cypress](https://www.cypress.io/) and TypeScript. The tests cover core functionalities such as login and adding items to the cart.

## ⚠️ Intentionally Failing Tests

> **Note:** There are two test cases in this project that are configured to **fail intentionally**. 
> This is done specifically to demonstrate the capabilities of the HTML report and to verify that Cypress correctly captures screenshots on failure and embeds them into the final report.

## Prerequisites

- Node.js (v14 or above)
- npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/fernando-cotrena/saucedemo-test-automation.git
   ```
2. Navigate to the project directory:
   ```bash
   cd saucedemo-test-automation
   ```
3. Install the project dependencies:
   ```bash
   npm install
   ```

## Running the Tests

You can run the tests in a few different ways depending on your needs.

### Interactive Mode (Test Runner)
To open the Cypress application and run tests interactively:
```bash
npm run cy:open
```

### Headless Mode
To run all test suites headlessly (ideal for CI/CD environments):
```bash
npm run cy:run
```

### Specific Browsers
To run tests headlessly in specific browsers:
```bash
npm run cy:chrome
npm run cy:firefox
```

## Viewing the Test Report

This project is configured with `cypress-mochawesome-reporter` to generate rich interactive HTML reports with charts and embedded screenshots for failed tests.

After running the tests (e.g., using `npm run cy:run`), generate and open the report with:

```bash
npm run open-report
```

*(This command will automatically open the generated `reports/index.html` file in your default web browser).*
