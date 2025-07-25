require('dotenv').config({
  path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env'
});
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.UI_BASE_URL || 'https://demo.playwright.dev/todomvc',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    retries: 3,
  
  },
  env: {
    apiBaseUrl: process.env.API_BASE_URL || 'https://dummyjson.com',
    testUserUsername: process.env.TEST_USER_USERNAME || 'emilys',
    testUserPassword: process.env.TEST_USER_PASSWORD || 'emilyspass',
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'execution-report',
    reportPageTitle: 'Execution Report',
    reportPageHeading: 'Test Results',
  },
  failOnStatusCode: false,

});
