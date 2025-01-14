context("techs", () => {
  beforeEach(() => {
    cy.visit("/techs");

    cy.wait(1000);
  });

  it("should have techs cards", () => {
    cy.log("has ul tag");
    cy.get("main ul").should("be.visible");

    cy.log("has multiple tech cards");
    cy.get("main ul li").should("have.length.greaterThan", 3);

    cy.log("card has link");
    cy.get("main ul li").first().find("a").should("be.visible");

    cy.log("card has img");
    cy.get("main ul li").first().find("img").should("be.visible");
  });
});
