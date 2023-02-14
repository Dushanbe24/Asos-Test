/// <reference types="cypress" />
import JQuery = Cypress.ChainableMethods;

class HomePage {
  getElementByTag(tag: string) {
    return cy.get("");
  }

  title() {
    return cy.title();
  }
}

export default new HomePage();
