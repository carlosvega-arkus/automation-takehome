
# Task-home exercise

## INSTALL

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Web browser (Chrome, Firefox, Edge)

### Steps

1. Clone the repository
    git clone ''
    cd Take-home\

2. Install dependencies
    npm install

3. Run tests to verify everything works
    npm run cypress:run

## Test Commands

### Basic Commands

- `npm run cypress:open` - Open Cypress Test Runner (interactive mode)
- `npm run cypress:run` - Run all tests in headless mode

### Test Categories

- `npm run test:ui` - Run all UI tests
- `npm run test:api` - Run all API tests

### Execution Modes

- `npm run test:headless` - Run tests without browser UI
- `npm run test:headed` - Run tests with browser UI

### Filtered Tests

- `npm run test:e2d` - Run tests with tag 'e2e'
- `npm run test:isolated` - Run tests with tag 'isolated'

### Open Test Execution Report

- `npm run opem:report` - Open test execution report

## Framework pattern: Page Object Model

## Test Scenarios

### API Testing

- Endpoints
- - POST /users – Create a new user
- - GET /users/{id} – Fetch user details
- - DELETE /users/{id} – Delete a user
- - POST /login – Authenticate user and get token

### UI Testing

- Covered Scenarios:
  Add ToDo
  Complete ToDo
  Delete ToDo
- No covered Scenarios:
  Filter ToDo;s (Active, Completed)
  Select all ToDo's
  Edge cases (limit of ToDos)
