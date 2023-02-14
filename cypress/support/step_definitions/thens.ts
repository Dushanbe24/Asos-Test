import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I viewing for a {string} page", function (page: string) {
  expect(cy.contains(page).should("be.visible"));
});

Then("I should see in the header {string} logo", (head: string) => {
  cy.get('[data-testid="asoslogo"]').should("be.visible");
  //data-testid="asoslogo"
});
Then("I can see the floornav {string} and {string}", (floor: string) => {
  cy.contains(floor).should("be.visible");
  //data-testid="women-floor"
  //data-testid="men-floor"
});

Then("I should see the search form {string}", (search: string) => {
  cy.get('[data-testid="search-input"]').should("be.visible", search);
});

Then(
  "Then User should be see {string} and {string}",
  (saved: string, bag: string) => {
    cy.get('[data-testid="savedItemsIcon"]').should("be.enabled");
    cy.get('[data-testid="miniBagIcon"]').should("be.enabled");
  }
);

Then("I should see the following headroom:", (table: any) => {
  const fields = table.raw().flat();
  for (let i = 0; i < fields.length; i++) {
    const fieldsForm = cy.get(".f3gYf7g");
    fieldsForm.contains(fields[i]).should("be.visible");
  }
});
