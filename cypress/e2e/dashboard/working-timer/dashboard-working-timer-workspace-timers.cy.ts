const workspaceId = "1738675582188";

context("dashboard working timer workspace timers", () => {
  beforeEach(() => {
    cy.visit(`/dashboard/working-timer/${workspaceId}`);

    cy.wait(1000);
  });

  it("should open new timer page and start a instant timer", () => {
    cy.log("start timer");
    cy.log("open new timer form");
    cy.contains("button", "+ TIMER")
      .should("be.visible")
      .click()
      .wait(100);

    cy.log("url has `new` path");
    cy.url().should("include", `/dashboard/working-timer/${workspaceId}/new`);

    cy.log("start timer");
    cy.contains("button", "START NOW")
      .should("be.visible")
      .click()
      .wait(1000);

    const date = new Date();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const createdRowStr = `${day}/${month}/${year}`;
    cy.log("has created timer start row");
    cy.contains("main table tbody tr", createdRowStr)
      .should("be.visible");

    cy.log("has created timer end row");
    cy.contains("main table tbody tr", "Running...")
      .should("be.visible");

    cy.log("has stop record button");
    cy.contains("main table tbody tr", createdRowStr)
      .should("be.visible")
      .click()
      .wait(1000);
  })

  it("should have timers rows", () => {
    cy.log("has page title");
    cy.contains("h1", "Working Timer: ")
      .should("be.visible");

    cy.log("has table tag");
    cy.get("main table")
      .should("be.visible");

    cy.log("has multiple timers rows");
    cy.get("main table tbody tr")
      .should("have.length.greaterThan", 1);

    cy.log("has table start column");
    cy.get("main table thead tr th")
      .contains("Start")
      .should("be.visible");

    cy.log("has table end column");
    cy.get("main table thead tr th")
      .contains("End")
      .should("be.visible");

    cy.log("has table duration column");
    cy.get("main table thead tr th")
      .contains("Duration")
      .should("be.visible");

    cy.log("has table action column");
    cy.get("main table thead tr th")
      .contains("Status")
      .should("be.visible");
  });

  it("should open new timer page, fill form and create a timer", () => {
    cy.log("open new timer form");
    cy.contains("button", "+ TIMER")
      .should("be.visible")
      .click()
      .wait(100);

    cy.log("url has `new` path");
    cy.url().should("include", `/dashboard/working-timer/${workspaceId}/new`);

    cy.log("type start date");
    cy.get('form input[name="startDate"')
      .should("be.visible")
      .type("01/01/2025")
      .wait(100);

    cy.log("type start time");
    cy.get('form input[name="startTime"')
      .should("be.visible")
      .type("09:00")
      .wait(100);

    cy.log("type end date");
    cy.get('form input[name="endDate"')
      .should("be.visible")
      .type("01/01/2025")
      .wait(100);

    cy.log("type end time");
    cy.get('form input[name="endTime"')
      .should("be.visible")
      .type("10:00")
      .wait(100);

    cy.log("submit form");
    cy.contains("button", "CREATE")
      .should("be.visible")
      .click()
      .wait(1000);

    cy.log("has created timer start row");
    cy.contains("main table tbody tr", "01/01/2025, 09:00:00")
      .should("be.visible");

    cy.log("has created timer end row");
    cy.contains("main table tbody tr", "01/01/2025, 10:00:00")
      .should("be.visible");

    cy.log("has created timer duration row");
    cy.contains("main table tbody tr", "01:00:00")
      .should("be.visible");
  });

  it("should delete timer", () => {
    cy.log("delete timer");
    cy.contains("main table tbody tr", "01/01/2025, 09:00:00")
      .should("be.visible")
      .click()
      .wait(1000);

    cy.log("has deleted timer row");
    cy.contains("main table tbody tr", "01/01/2025, 10:00:00")
      .should("not.exist");
  });
})