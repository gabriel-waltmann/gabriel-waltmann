context("projects", () => {
  beforeEach(() => {
    cy.visit("/projects");

    cy.wait(1000);
  });

  it("should have projects cards", () => {
    cy.log("has ul tag");
    cy.get("main ul").should("be.visible");

    cy.log("has multiple project slides");
    cy.get("main ul li").should("have.length.greaterThan", 3);

    cy.log("card has infos");
    cy.get("main ul li").first().find("article").should("be.visible");

    cy.log("card has imgs");
    cy.get("main ul li").first().find("img").should("be.visible");
  });
});
