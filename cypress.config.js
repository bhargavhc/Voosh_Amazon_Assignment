const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.amazon.in", // Set the base URL
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
