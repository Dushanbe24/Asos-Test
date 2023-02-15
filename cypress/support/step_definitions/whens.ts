import { When } from "@badeball/cypress-cucumber-preprocessor";

When("User see in the header widget icon {string}", (icon: string) => {
  cy.get('[data-testid="myAccountIcon"]').should("be.visible", icon);
});

When(
  "In the My Account icon user can select the {string}",
  (dropdown: string) => {
    cy.get('[data-testid="myaccount-dropdown"]')
      .should("be.ok", dropdown)
      .click({ force: true });
  }
);
When(/^the (.*) User should see field$/, function (dropdown) {
  cy.wait(100);
  cy.get('[data-testid="signin-link"]').should("be.visible", dropdown);
  cy.get('[data-testid="signup-link"]').should("be.visible", dropdown);
  cy.get('[data-testid="myaccount-link"]').should("be.visible", dropdown);
  cy.get('[data-testid="myreturns-link"]').should("be.visible", dropdown);
  cy.get('[data-testid="returnsinformation-link"]').should(
    "be.visible",
    dropdown
  );
  cy.get('[data-testid="contactpreferences-link"]').should(
    "be.visible",
    dropdown
  );
});

When("The customer select {string} button", (primary: string) => {
  cy.wait(100);
  cy.get(".f3gYf7g").eq(4).should("be.visible", primary).click();
});

When(
  "Customer should see the following in the Shop by Product:",
  (table: any) => {
    const fields = table.raw().flat();
    for (let i = 0; i < fields.length; i++) {
      const fieldsForm = cy.get('[class="_1g1PWkA _1rF5dEp"]');
      fieldsForm.contains(fields[i]).should("not.be.visible");
    }
  }
);

When(
  "Customer selects the {string} product from the dropdown",
  (product: string) => {
    cy.get("#b690737b-bd19-4d49-83e4-e3ca6986fb65")
      .get(
        '[data-testid="secondarynav-container"] > ._2u0LGMW > [data-testid="secondarynav-flyout"] > :nth-child(1) > ._1PXCics > :nth-child(5)'
      )
      .contains(product)
      .click({
        altKey: true,
      });
    cy.url().should("include", "women/sportswear/accessories/cat/?cid=27162");
  }
);

When(/^Customer select the Item saved$/, function (header: string) {
  cy.get("#product-203925257 > .saveForLater_mm1gc > .container_p0yFn").click();
});

When(/^Customer click the icon "(.*)"$/, function (dropdown: string) {
  cy.get('[data-testid="savedItemsIcon"]')
    .scrollIntoView({ easing: "linear" })
    .should("exist", dropdown)
    .click({ force: true });
});

When("Customer choose the Product Description", () => {
  cy.get('[data-testid="close-button"]').click();
  cy.get('[class="productDescription_sryaw"]')
    .contains("Casio GMA-S2100SK watch in clear blue")
    .should("exist", "Casio GMA-S2100SK watch in clear blue", "{enter}");
});

When("the Client click {string}", function (button: string) {
  cy.get('[data-testid="signin-link"]').should("be.ok", button).click();
});

When(
  "Client add cridentials {string} and {string}",
  function (user: string, password: string) {
    cy.get("#EmailAddress").type("ferosha2015@gmail.com");
    cy.get("#Password").type("Amina2011@");
  }
);

When(
  "Customer click sort button and choose {string}",
  function (option: string) {
    cy.get('[data-auto-id="sort"]').click();
    cy.get('[class="sortItem_CAVeh"]').contains(option).click({ force: true });
  }
);
