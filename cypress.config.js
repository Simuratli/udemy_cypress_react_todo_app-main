const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'jp6h9s',
  e2e: {
    retries: 2,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
