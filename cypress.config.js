const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
	baseUrl: 'https://www.saucedemo.com',
	pageLoadTimeout: 5000,
	chromeWebSecurity: false
  },
});