const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  e2e: {
    baseUrl: 'https://dashboard.reap.global',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
