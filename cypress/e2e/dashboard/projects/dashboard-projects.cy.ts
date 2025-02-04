const projectMock = {
  title: "Cypress Project",
  titleEdited: "Cypress Project Edited",
  description: "Cypress Project Description",
};

context("dashboard projects", () => {
  beforeEach(() => {
    cy.visit("/dashboard/project");

    cy.wait(1000);
  });

  it("should have project cards", () => {
    cy.log("has page title");
    cy.get("h1").should("be.visible").and("have.text", "Projects");

    cy.log("has ul tag");
    cy.get("main ul").should("be.visible");

    cy.log("has multiple project cards");
    cy.get("main ul li").should("have.length.greaterThan", 3);
  });

  it("should open project dialog, fill form and create project", () => {
    cy.log("open project form");
    cy.contains("button", "+ Project").should("be.visible").click().wait(1000);

    cy.log("is on general tab");
    cy.contains("button", "General")
      .should("be.visible")
      .should("have.class", "Mui-selected");

    cy.log("type project name");
    cy.get('form input[name="title"')
      .should("be.visible")
      .type(projectMock.title)
      .wait(100);

    cy.log("type project description");
    cy.get('form textarea[name="description"')
      .should("be.visible")
      .type(projectMock.description)
      .wait(100);

    cy.log("has files tab");
    cy.contains("button", "Files")
      .should("be.visible")
      .should("have.class", "Mui-disabled");

    cy.log("has techs tab");
    cy.contains("button", "Techs")
      .should("be.visible")
      .should("have.class", "Mui-disabled");

    cy.log("submit form");
    cy.contains("button", "CREATE").should("be.visible").click().wait(1000);

    cy.log("has project card");
    cy.contains("main ul li button", projectMock.title).should("be.visible");
  });

  it("should open project dialog and upload image", () => {
    cy.log("open project form");
    cy.contains("main ul li button", projectMock.title)
      .should("be.visible")
      .click()
      .wait(100);

    cy.log("is on general tab");
    cy.contains("button", "General")
      .should("be.visible")
      .should("have.class", "Mui-selected");

    cy.log("go to files tab");
    cy.contains("button", "Files").should("be.visible").click().wait(100);

    cy.log("is on files tab");
    cy.contains("button", "Files")
      .should("be.visible")
      .should("have.class", "Mui-selected");

    cy.log("upload image");
    cy.contains("label", "ADICIONAR ARQUIVOS")
      .should("be.visible")
      .selectFile("cypress/fixtures/test.png")
      .wait(1000);

    cy.log("has image preview");
    cy.get("li img")
      .should("be.visible");
  });

  it("should open project dialog and delete image", () => {
    cy.log("open project form");
    cy.contains("main ul li button", projectMock.title)
      .should("be.visible")
      .click()
      .wait(100);

    cy.log("is on general tab");
    cy.contains("button", "General")
      .should("be.visible")
      .should("have.class", "Mui-selected");

    cy.log("go to files tab");
    cy.contains("button", "Files").should("be.visible").click().wait(100);

    cy.log("is on files tab");
    cy.contains("button", "Files")
      .should("be.visible")
      .should("have.class", "Mui-selected");

    cy.log("delete image");
    cy.get(".test-delete-button").should("be.visible").click().wait(1000);
  });

  it("should open project dialog and add tech", () => {
    cy.log("open project form");
    cy.contains("main ul li button", projectMock.title)
      .should("be.visible")
      .click()
      .wait(100);

    cy.log("is on general tab");
    cy.contains("button", "General")
      .should("be.visible")
      .should("have.class", "Mui-selected");

    cy.log("go to techs tab");
    cy.contains("button", "Techs").should("be.visible").click().wait(100);

    cy.log("is on techs tab");
    cy.contains("button", "Techs")
      .should("be.visible")
      .should("have.class", "Mui-selected");

    cy.log("has project techs section");
    cy.contains("section", "Techs do projeto").should("be.visible");

    cy.log("has available techs section");
    cy.contains("section", "Techs disponiveis").should("be.visible");

    cy.log("select cypress chip");
    cy.contains("section ul li", "Cypress")
      .should("be.visible")
      .click()
      .wait(1000);
  });

  it("should open project dialog and delete tech", () => {
    cy.log("open project form");
    cy.contains("main ul li button", projectMock.title)
      .should("be.visible")
      .click()
      .wait(100);

    cy.log("is on general tab");
    cy.contains("button", "General")
      .should("be.visible")
      .should("have.class", "Mui-selected");

    cy.log("go to techs tab");
    cy.contains("button", "Techs").should("be.visible").click().wait(100);

    cy.log("is on techs tab");
    cy.contains("button", "Techs")
      .should("be.visible")
      .should("have.class", "Mui-selected");

    cy.log("has project techs section");
    cy.contains("section", "Techs do projeto").should("be.visible");

    cy.log("has available techs section");
    cy.contains("section", "Techs disponiveis").should("be.visible");

    cy.log("select cypress chip");
    cy.contains("section ul li", "Cypress")
      .should("be.visible")
      .click()
      .wait(1000);
  });

  it("should open project dialog and edit tech name", () => {
    cy.log("open project form");
    cy.contains("main ul li button", projectMock.title)
      .should("be.visible")
      .click()
      .wait(100);

    cy.log("is on general tab");
    cy.contains("button", "General")
      .should("be.visible")
      .should("have.class", "Mui-selected");

    cy.log("type project name");
    cy.get('form input[name="title"]')
      .should("be.visible")
      .type("...")
      .clear()
      .type(projectMock.titleEdited)
      .wait(100);

    cy.log("save project");
    cy.contains("button", "CHANGE").should("be.visible").click().wait(1000);

    cy.log("has project card with edited description");
    cy.contains("main ul li button", projectMock.title)
      .should("be.visible");
 });

  it("should open project dialog and delete project", () => {
    cy.log("open project form");
    cy.contains("main ul li button", projectMock.title)
      .should("be.visible")
      .click()
      .wait(100);

    cy.log("is on general tab");
    cy.contains("button", "General")
      .should("be.visible")
      .should("have.class", "Mui-selected");

    cy.log("delete project");
    cy.contains("button", "DELETE").should("be.visible").click().wait(1000);

    cy.log("has no project card");
    cy.contains("main ul li button", projectMock.title).should("not.exist");
  });
});
