context("dashboard index", () => {
  beforeEach(() => {
    cy.visit("/dashboard");

    cy.wait(1000);
  });

  it("should have header elements", () => {
    cy.log("has header tag");
    cy.get("header").should("be.visible");

    cy.log("has home link element");
    cy.get("header nav a[href='/dashboard']").should("be.visible");

    cy.log("has projects link element");
    cy.get("header nav a[href='/dashboard/project']").should("be.visible");

    cy.log("has techs link element");
    cy.get("header nav a[href='/dashboard/tech']").should("be.visible");
  });

  it("should have page title", () => {
    cy.log("has page title");
    cy.get("h1").should("be.visible").and("have.text", "Dashboard");
  });

  it("should have navigation links", () => {
    cy.log("has nav tag");
    cy.get("main nav").should("be.visible");

    cy.log("has projects link element");
    cy.get("main nav button a[href='/dashboard/project']").should("be.visible");

    cy.log("has techs link element");
    cy.get("main nav button a[href='/dashboard/tech']").should("be.visible");
  });
});
