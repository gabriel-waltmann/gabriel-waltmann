context("index", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.wait(1000);
  });

  it("should have header elements", () => {
    cy.log("has header tag");
    cy.get("header").should("be.visible");

    cy.log("has profile image element");
    cy.get("header figure img").should("be.visible");

    cy.log("has email link element");
    cy.get("header ul li a[href='mailto:gabrielwaltmann@gmail.com']").should(
      "be.visible"
    );

    cy.log("has instagram link element");
    cy.get(
      "header ul li a[href='https://www.instagram.com/waltmanngabriel']"
    ).should("be.visible");

    cy.log("has github link element");
    cy.get("header ul li a[href='https://github.com/gabriel-waltmann']").should(
      "be.visible"
    );

    cy.log("has linkedin link element");
    cy.get("header ul li a[href='https://www.linkedin.com/in/gabrielwaltmann']")
      .should("be.visible")
      .should("be.visible")
      .should("be.visible")
      .should("be.visible");
  });
});
