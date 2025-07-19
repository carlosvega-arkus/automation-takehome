
# Task-home exercise

## Description

Test automation framework built with Cypress and JavaScript. This project implements the Page Object Model (POM) pattern and uses Mochawesome for reporting.

## Objectives

- Automate end-to-end (E2E) tests for Todo application
- Implement API testing
- Generate detailed reports with Mochawesome
- Maintain clean and maintainable code using POM
- Provide multiple ways to run tests

## Technologies Used

- Cypress - E2E testing framework
- JavaScript - Programming language
- Mochawesome Reporter - Report generation
- Faker.js - Test data generation
- Page Object Model - Design pattern
- @cypress/grep - Test filtering and tagging
  
## Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Steps

1. Clone the repository

    ```bash
    git clone 'https://github.com/carlosvega-arkus/automation-takehome.git'
    cd Take-home\
    ```

2. Install dependencies

    npm install

3. Run tests to verify everything works

    npm run cypress:run

## Test Credentials

TEST_USER_USERNAME=your_username
TEST_USER_PASSWORD=your_password

## Cypress Configuration

CYPRESS_BASE_URL=https://demo.playwright.dev/todomvc
CYPRESS_API_BASE_URL=https://dummyjson.com

### Configuration Files

- cypress.config.js - Main Cypress configuration
- .env.example - Environment variables template
- .gitignore - Excludes sensitive files

## Test Commands

### Interactive Mode

- `npm run cypress:open` - Open Cypress Test Runner
- `npm run open:ui` - Open UI tests only
- `npm run open:api` - Open API tests only

### Headless Mode

- `npm run cypress:run` - Run all tests
- `npm run run:ui` - Run UI tests only
- `npm run run:api` - Run API tests only

### Test Categories

- `npm run run:ui-e2e` - Run UI E2E tests
- `npm run run:ui-isolated` - Run UI isolated tests
- `npm run run:api-happy` - Run API happy path tests
- `npm run run:api-negative` - Run API negative tests

### Execution Modes

- `npm run run:headless` - Run tests without browser UI
- `npm run run:headed` - Run tests with browser UI

### Tagged Tests

- `npm run open:ui-e2e` - Open tests with @e2e tags
- `npm run open:ui-isolated` - Open tests with @isolated tags
- `npm run open:api-happy` - Open tests with @happyPath tags
- `npm run open:api-negative` - Open tests with @negativePath tags

### Open Report

- `npm run open:report` - Open generated report

## Environment Configuration

The framework supports test execution across different environments using environment variables.

### Environment Files

- `.env` - Default configuration
- `.env.dev` - Development environment
- `.env.stg` - Staging environment

### Environment Variables

```bash
API_BASE_URL=https://dummyjson.com
UI_BASE_URL=https://demo.playwright.dev/todomvc
TEST_USER_USERNAME=your_username
TEST_USER_PASSWORD=your_password
```

### Environment Commands

#### Development

npm run test:dev
npm run open:dev

#### Staging

npm run test:staging
npm run open:staging

### Custom Environment Usage

```bash
# Run API tests in development
NODE_ENV=dev cypress run --spec 'cypress/e2e/api/**/*.cy.js'

# Run UI tests in staging
NODE_ENV=stg cypress run --spec 'cypress/e2e/ui/**/*.cy.js'

## Test Scenarios

### API Testing

#### Endpoints Covered

- POST /users/add - Create a new user
- GET /users/{id} - Fetch user details
- DELETE /users/{id} - Delete a user
- POST /auth/login - Authenticate user and get token

#### API Test Categories

- Happy Path Tests (@happyPath)
  - Successful user creation
  - Successful user retrieval
  - Successful user deletion
  - Successful authentication

- Negative Path Tests (@negativePath)
  - Invalid credentials
  - Non-existent user ID

### UI Testing

#### Covered Scenarios

- Add Todo (@isolated)
  - Create new todo items
  - Validate todo appears in list

- Complete Todo (@isolated)
  - Mark todos as completed
  - Validate completion status

- Delete Todo (@isolated)
  - Remove completed todos
  - Validate removal from list

- End-to-End Flow (@e2e)
  - Complete todo
  - Add → Complete → Delete

#### Not Covered Scenarios

- Filter Todos (Active, Completed)
- Select all Todos
- Edge cases (limit of Todos)

## Reports

### Mochawesome Reports

Reports are automatically generated after each test execution.

#### Report Location

- HTML: cypress/reports/execution-report.html

## General Notes

Originally, the task was intnded to use [dummyapi.io](https://dummyapi.io/docs) but for some unknown reason, I was unable to create an account and consquently unable to get the app-id key needed to connect with the APIs, instead I used [dummyjson.com](https://dummyjson.com) since it has almost the same functionalities.
