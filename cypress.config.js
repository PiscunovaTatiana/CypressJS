const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for html reports
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); //for html reporter
      // implement node event listeners here
    
    },
    baseUrl:'https://opensource-demo.orangehrmlive.com'
  },
});
