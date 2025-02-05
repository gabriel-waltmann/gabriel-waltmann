const workspaceMock = {
    name: "Test workspace",
    nameEdited: "Test workspace edited",
    priceByHour: 0,
  };
  

context("dashboard working timer workspace", () => {
  beforeEach(() => {
      cy.visit("/dashboard/working-timer");
  
      cy.wait(1000);
  });

  it("should have workspace rows", () => {
      cy.log("has page title");
      cy.contains("h1", "Working Timer")
        .should("be.visible");
  
      cy.log("has table tag");
      cy.get("main table")
        .should("be.visible");
  
      cy.log("has multiple workspaces rows");
      cy.get("main table tbody tr")
        .should("have.length.greaterThan", 1);
  });

  it("should open workspace page, fill form and create a workspace", () => {
    cy.log("open workspace form");
    cy.contains("button", "+ WORKSPACE")
      .should("be.visible")
      .click()
      .wait(1000);

    cy.log("url has `new` path");
    cy.url().should("include", "/dashboard/working-timer/new");

    cy.log("type workspace name");
    cy.get('form input[name="name"')
      .should("be.visible")
      .type(workspaceMock.name)
      .wait(100);

    cy.log("type workspace price by hour");
    cy.get('form input[name="priceByHour"')
      .should("be.visible")
      .type(String(workspaceMock.priceByHour))
      .clear()
      .type(String(workspaceMock.priceByHour))
      .wait(100);
        
    cy.log("submit form");
    cy.contains("button", "CREATE")
      .should("be.visible")
      .click()
      .wait(100);

    cy.log("url has id in the path");
    cy.url().then((url) => {
      const urlArray = url.split("/");
      const id = urlArray[urlArray.length - 1];
      cy.log(`url has id ${id} in the path`);

      expect(id).to.not.be.empty;
    });

        
    cy.log("has workspace name");
    cy.contains("main h1", workspaceMock.name)
      .should("be.visible");
  });

  it("should open workspace page and edit name", () => {
    cy.log("open workspace page");
    cy.contains("main table tbody tr", workspaceMock.name)
      .should("be.visible")
      .click()
      .wait(1000);

    cy.log("open edit page");
    cy.contains("button", "EDIT")
      .should("be.visible")
      .click()
      .wait(100);
    

    cy.log("edit workspace name");
    cy.get('form input[name="name"')
      .should("be.visible")
      .type("...")
      .clear()
      .type(workspaceMock.nameEdited)
      .wait(100);

    cy.log("save workspace");
    cy.contains("button", "CHANGE")
      .should("be.visible")
      .click()
      .wait(1000);

    cy.log("url has id in the path");
    cy.url().then((url) => {
      const urlArray = url.split("/");
      const id = urlArray[urlArray.length - 1];
      cy.log(`url has id ${id} in the path`);

      expect(id).to.not.be.empty;
    });
    
    cy.log("has edited workspace name");
    cy.contains("main h1", workspaceMock.nameEdited)
      .should("be.visible");
  });

  it("should open workspace page and delete", () => {
    cy.log("open tech form");
    cy.contains("main table tbody tr", workspaceMock.nameEdited)
      .should("be.visible")
      .click()
      .wait(100);

    cy.log("delete tech");
    cy.contains("button", "DELETE")
      .should("be.visible")
      .click()
      .wait(1000);

    cy.log("has no tech row");
    cy.contains("main table tbody tr", workspaceMock.nameEdited).should("not.exist");
  });
})