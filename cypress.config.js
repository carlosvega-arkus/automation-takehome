require('dotenv').config();
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
    retries: {
      runMode: 2, // Número de reintentos en modo run (headless)
      openMode: 1  // Número de reintentos en modo open (interactivo)
    }
  },
  env: {
    apiBaseUrl: process.env.API_BASE_URL || 'https://api.realworld.io/api',
    grepFilterSpecs: true,
    grepOmitFiltered: true
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'execution-report',
    reportPageTitle: 'Execution Report',
    reportPageHeading: 'Test Results',
  }
});
