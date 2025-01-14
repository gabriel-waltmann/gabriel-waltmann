const techMock = {
  name: "Test",
  nameEdited: "Test Edited",
  linkName: "test.com",
  link: "https://test.com/",
}

context("dashboard techs", () => {
  beforeEach(() => {
    cy.visit("/dashboard/techs")

    cy.wait(1000)
  })

  it("should have tech cards" , () => {    
    cy.log("has page title")
    cy.get("h1").should("be.visible")
      .and("have.text", "Techs") 

    cy.log("has ul tag")
    cy.get("main ul").should("be.visible");

    cy.log("has multiple tech cards")
    cy.get("main ul li").should("have.length.greaterThan", 3);
  })

  it("should open tech dialog, fill form and create tech" , () => {
    cy.log("open tech form")
    cy.contains("button", "+ Tech")
      .should("be.visible")
      .click()
      .wait(100);

    cy.log("type tech name")
    cy.get('form input[name="name"')
      .should("be.visible")
      .type(techMock.name)
      .wait(100);

    cy.log("type tech link")
    cy.get('form input[name="link"')
      .should("be.visible")
      .type(techMock.link)
      .wait(100);

    cy.log("has typed tech link name")
    cy.get('form input[name="linkName"')
      .should("be.visible")
      .should("have.value", techMock.linkName)
      .wait(100);

    cy.log("upload image")
    cy.contains("label", "SELECIONAR IMAGEM")
      .should("be.visible")
      .selectFile("cypress/fixtures/test.png")
      .wait(1000);  

      cy.log("has image preview")
      cy.get("li img")
        .should("be.visible")
        .and("have.attr", "src")

    cy.log("submit form")
    cy.contains("button", "CADASTRAR")
      .should("be.visible")
      .click()
      .wait(100);

    cy.log("has tech card")
    cy.contains("main ul li", techMock.name)
      .should("be.visible");
  })
  
  it("should open tech dialog and edit tech name" , () => {
    cy.log("open tech form")
    cy.contains("main ul li", techMock.name)
      .should("be.visible")
      .find("button")
      .click()
      .wait(100);

    cy.log("edit tech name")
    cy.get('form input[name="name"')
      .should("be.visible")
      .type("...")
      .clear()
      .type(techMock.nameEdited)
      .wait(100);

    cy.log("save tech")
    cy.contains("button", "ALTERAR")
      .should("be.visible")
      .click()
      .wait(1000);

    cy.log("has tech card with edited name")
    cy.contains("main ul li", techMock.nameEdited)
      .should("be.visible")
      .find("button")
      .wait(1000);
  })

  it("should open tech dialog and delete" , () => {
    cy.log("open tech form")
    cy.contains("main ul li", techMock.nameEdited)
      .should("be.visible")
      .find("button")
      .click()
      .wait(100);

    cy.log("delete tech")
    cy.contains("button", "DELETAR")
      .should("be.visible")
      .click()
      .wait(1000);

    cy.log("has no tech card")
    cy.contains("main ul li", techMock.nameEdited)
      .should("not.exist");
  })
})