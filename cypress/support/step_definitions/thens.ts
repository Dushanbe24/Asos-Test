import { Then } from "@badeball/cypress-cucumber-preprocessor";
import CreatePage from "../../e2e/pages/create.page";

Then("Customer viewing for a {string} page", function (page: string) {
  expect(cy.contains(page).should("contain", page));
});

Then("I should see in the header {string} logo", (head: string) => {
  expect(CreatePage.getElementByTag("asoslogo").should("be.visible", head));
});

Then(
  "I can see the floornav {string} and {string}",
  (floor: string, floorM) => {
    expect(cy.contains(floor).should("exist", floor));
    expect(cy.get('[data-testid="men-floor"]').should("exist", floorM));
  }
);

Then("I should see the search form {string}", (search: string) => {
  expect(CreatePage.getElementByTag("search-input").should("be.ok", search));
});

Then(
  "User should be see {string} and {string}",
  (saved: string, bag: string) => {
    expect(CreatePage.getElementByTag("savedItemsIcon").should("exist", saved));
    expect(CreatePage.getElementByTag("miniBagIcon").should("be.ok", bag));
  }
);

Then("I should see the following headroom:", (table: any) => {
  const fields = table.raw().flat();
  for (let i = 0; i < fields.length; i++) {
    const fieldsForm = cy.get(".f3gYf7g");
    fieldsForm.contains(fields[i]).should("exist").click();
  }
});

Then("User should see the text {string}", (text: string) => {
  cy.wait(100);
  cy.contains(text).should("be.visible", text);
});

Then("User can click {string}", (view: string) => {
  cy.contains(view).should("exist", view).click({ force: true });
});

Then("Customer viewing the Saved Items", (item: string) => {
  cy.url().should("include", "/saved-lists/?nlid=nav+header");
  // cy.contains(item).should("be.visible", item).click({ force: true });
});

Then("the User should see welcome message {string}", (text: string) => {
  cy.contains(text).should("be.ok", text);
});

Then("The User select button {string}", (button: string) => {
  cy.contains(button).click({ force: true });
});

Then("User select the mini bag Icon", () => {
  cy.get('[data-testid="miniBagIcon"]').click();
});

Then("User should click {string} green button", () => {
  cy.get('[data-test-id="checkout-link"]').click();
});

Then("the customer click {string} button", (green: string) => {
  cy.get('[data-bind="text: buttonText"]')
    .contains(green)
    .click({ altKey: true });
});

Then("Click {string} button", (button: string) => {
  cy.get("#signin").click();
});
