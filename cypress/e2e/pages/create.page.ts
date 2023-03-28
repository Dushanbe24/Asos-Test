/// <reference types="cypress" />
import JQuery = Cypress.ChainableMethods;

class CreatePage {
  getElementByTag(tag: string) {
    return cy.get(`[data-testid="${tag}"]`);
  }

  title() {
    return cy.title();
  }

  container() {
    return cy.get(".shelf-container");
  }

  quantti() {}
}

export default new CreatePage();
