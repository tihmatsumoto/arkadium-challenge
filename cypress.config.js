const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: false,
  chromeWebSecurity: false,
  screenshotOnRunFailure: false,
  watchForFileChanges: false,
  viewportHeight: 900,
  viewportWidth: 1400,
  e2e: {
    baseUrl: 'https://www.arkadium.com',
    setupNodeEvents(on, config) {
    },
  },
});