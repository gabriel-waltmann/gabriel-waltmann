const techMock = {
  name: "Test",
  nameEdited: "Test Edited",
  linkName: "test.com",
  link: "https://test.com/",
};

context("dashboard techs", () => {
  beforeEach(() => {
    cy.visit("/dashboard/tech");

    cy.wait(1000);
  });

  it("should have tech rows", () => {
    cy.log("has page title");
    cy.get("h1").should("be.visible").and("have.text", "Techs");

    cy.log("has table tag");
    cy.get("main table").should("be.visible");

    cy.log("has multiple tech rows");
    cy.get("main table tbody tr").should("have.length.greaterThan", 3);
  });

  it("should open tech dialog, fill form and create tech", () => {
    cy.log("open tech form");
    cy.contains("button", "+ Tech").should("be.visible").click().wait(100);

    cy.log("type tech name");
    cy.get('form input[name="name"')
      .should("be.visible")
      .type(techMock.name)
      .wait(100);

    cy.log("type tech link");
    cy.get('form input[name="link"')
      .should("be.visible")
      .type(techMock.link)
      .wait(100);

    cy.log("has typed tech link name");
    cy.get('form input[name="linkName"')
      .should("be.visible")
      .should("have.value", techMock.linkName)
      .wait(100);

    cy.log("upload image");
    cy.contains("label", "SELECIONAR IMAGEM")
      .should("be.visible")
      .selectFile("cypress/fixtures/test.png")
      .wait(1000);

    cy.log("has image preview");
    cy.get("img").should("be.visible").and("have.attr", "src");

    cy.log("submit form");
    cy.contains("button", "CREATE").should("be.visible").click().wait(100);

    cy.log("has tech row");
    cy.contains("main table tbody tr", techMock.name).should("be.visible");
  });

  it("should open tech dialog and edit tech name", () => {
    cy.log("open tech form");
    cy.contains("main table tbody tr", techMock.name)
      .should("be.visible")
      .click()
      .wait(100);

    cy.log("edit tech name");
    cy.get('form input[name="name"')
      .should("be.visible")
      .type("...")
      .clear()
      .type(techMock.nameEdited)
      .wait(100);

    cy.log("save tech");
    cy.contains("button", "CHANGE").should("be.visible").click().wait(1000);

    cy.log("has tech row with edited name");
    cy.contains("main table tbody tr", techMock.nameEdited)
      .should("be.visible");
  });

  it("should open tech dialog and delete", () => {
    cy.log("open tech form");
    cy.contains("main table tbody tr", techMock.nameEdited)
      .should("be.visible")
      .click()
      .wait(100);

    cy.log("delete tech");
    cy.contains("button", "DELETE").should("be.visible").click().wait(1000);

    cy.log("has no tech row");
    cy.contains("main table tbody tr", techMock.nameEdited).should("not.exist");
  });
});
