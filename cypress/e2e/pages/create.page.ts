/// <reference types="cypress" />
import JQuery = Cypress.ChainableMethods;

class CreatePage {
  getElementByTag(tag: string) {
    return cy.get(`[data-testid="${tag}"]`);
  }
  title() {
    return cy.title();
  }

  header() {
    return cy.get("asoslogo").parent();
  }
}

export default new CreatePage();
