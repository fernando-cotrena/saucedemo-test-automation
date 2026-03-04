🧪 SauceDemo Test Automation

UI & API automation framework built with Cypress + TypeScript to validate login and shopping cart functionalities on SauceDemo.

📌 Project Overview

This project implements a modular automation framework to validate:

🔐 Login functionality

🛒 Add-to-cart functionality

🌐 API interaction with Mercado Libre

The framework is designed with scalability, maintainability, and clean architecture principles in mind.

🏗 Architecture

The framework follows a layered structure:

Pages → UI element locators

Actions → UI interactions

Assertions → Validations

API Services → REST interactions

This separation ensures:

Clear responsibilities

Reusability

Maintainability

SOLID principles alignment

📂 Project Structure
cypress/
 ├── e2e/
 │    ├── ui/
 │    │    ├── login/
 │    │    ├── cart/
 │    ├── api/
 │         ├── mercadolibre/
 │
 ├── support/
 │    ├── ui/
 │    │    ├── pages/
 │    │    ├── actions/
 │    │    ├── assertions/
 │    ├── api/
 │    │    ├── services/
 │
 ├── fixtures/
 ├── screenshots/
 ├── reports/
🚀 Tech Stack

Cypress

TypeScript

Mochawesome (HTML reporting)

Mocha + Chai (built-in Cypress assertions)

🔐 UI Test Coverage
Login

Positive Scenarios

Valid login

Performance user login

Negative Scenarios

Locked user

Invalid password

Empty credentials

At least 2 scenarios automated.

Add to Cart

Positive Scenarios

Add single product

Add multiple products

Negative / Validation Scenario

Incorrect cart badge validation (intentionally failing test)

At least 2 scenarios automated.

🌐 API Test

Endpoint tested:

GET https://www.mercadolibre.com.ar/menu/departments

Validations:

Status code 200

Response contains departments

Departments list is not empty

⚠️ Intentional Failing Test

One test intentionally validates an incorrect cart badge value to:

Demonstrate failure handling

Trigger screenshot capture

Validate reporting functionality

📊 Reporting

Mochawesome HTML report generation

Automatic screenshot capture on test failure

Execution results stored under /reports

⚙️ Environment Configuration

Even though only one environment is used, the framework supports parameterization.

Example:

npx cypress run --env environment=qa

Base URLs and environment variables can be configured via cypress.config.ts.

🖥 Installation
npm install
▶️ Run Tests

Open Cypress UI:

npx cypress open

Run headless:

npx cypress run
🧠 Design Decisions

Avoided over-engineering (no unnecessary abstraction layers)

Clean separation of concerns

Modular architecture

Prepared for scalability

UI and API testing in a single framework

📎 Notes

This project was created as a technical automation challenge demonstrating:

Framework design

UI automation

API testing

Reporting integration

Failure management

TypeScript usage