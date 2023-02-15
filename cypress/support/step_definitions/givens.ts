import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given(/^I navigate to the Home Page$/, function () {
  cy.visit("/", { timeout: 10000 });
});

Given("I click the cookiy button", function () {
  cy.wait(100);
  cy.get("#onetrust-accept-btn-handler").click();
});

Given("I select the button {string}", function (button: string) {
  cy.contains(button).should("be.visible").click();
});
