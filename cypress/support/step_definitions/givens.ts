import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given(/^I navigate to the Home Page$/, function () {
  cy.visit("/", { timeout: 10000 });
});

Given("I click the cookiy button", function () {
  cy.wait(500);
  cy.get("#onetrust-accept-btn-handler").click();
});
