import { When } from "@badeball/cypress-cucumber-preprocessor";

When("I select the button {string}", function (button: string) {
  cy.contains(button).should("be.visible").click();
});

When("User see in the header widget icon {string}", (icon: string) => {
  cy.get('[data-testid="myAccountIcon"]').should("be.visible", icon);
});

When(
  "In the My Account icon user can select the {string}",
  (dropdown: string) => {
    cy.get('[data-testid="myaccount-dropdown"]')
      .should("be.visible", dropdown)
      .click();
  }
);
When(/^the (.*) User should see field$/, function (dropdown) {
  cy.wait(500);
  cy.get(".signin-link").should("be.visible", dropdown);
});

//data-testid="signin-link"
//data-testid="signup-link"
// #data-testid="myaccount-link"
// #data-testid="myorders-link"
// #data-testid="myreturns-link"
// #data-testid="returnsinformation-link"
// #data-testid="contactpreferences-link"
//myAccountIcon
