describe("website", () => {
  it("user visit homepage and see hero video", () => {
    // HOMEPAGE
    // user visit homepage
    cy.visit("http://localhost:5206/");
    //user see website from mobile viewpoint
    cy.viewport("iphone-6");
    //user see website from laptop viewpoint
    cy.viewport("macbook-13");
    // homepage contains title
    cy.contains("HELSINKI CITY BIKES");
    cy.title().should("include", "Helsinki City Bikes");
    //homepage contains links to the page Journeys
    cy.contains("Journeys").click();

    // user can click to navbar which contains URL
    cy.url().should("include", "/journeys");
    // use can click back to hompage URL
    cy.url().should("include", "/");

    //homepage contains links to the page Stations
    cy.contains("Stations").click();
    // user can click to navbar which contains URL
    cy.url().should("include", "/stations");
    //  JOURNEYS
    // user see table which contains its children:  thead, tbody, trow, td
    cy.get("table").children();

    // STATIONS
    // user see table which contains its children:  thead, tbody, trow, td
    cy.get("table").children();
  });
});
