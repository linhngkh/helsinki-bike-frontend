describe("website", () => {
  it("user visit homepage", () => {
    // HOMEPAGE
    // user visit homepage
    cy.visit("http://localhost:5206/");
    //user see website from mobile viewpoint
    cy.viewport("iphone-6");
    // toogle button will be shown from mobile device
    cy.get("#toggle").click();
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

    // STATIONS
    // user see table which contains its children:  thead, tbody, trow, td

    // make an assertion on the input value
  });
  //  JOURNEYS
  // it("user goes to journey page", () => {
  //   // user see table which contains its children:  thead, tbody, trow, td
  //   // cy.get("table").children();
  // });
});

// API TESTING
describe("Basic API Testing", () => {
  beforeEach(function () {
    cy.request("GET", "http://localhost:5000/api/journeys").as("journeys");
  });

  // journey endpoint should show body with data of 3000
  it("journey API", () => {
    cy.request("http://localhost:5000/api/journeys")
      .its("body")
      .should("have.length", 3000);
  });

  // JSON SCHEMA CHECK
  it("json schema check", () => {
    cy.request("http://localhost:5000/api/journeys")
      .its("body")
      .each((value) => {
        expect(value).to.have.all.keys(
          "_id",
          "Departure",
          "Return",
          "Departure_station_id",
          "Departure_station_name",
          "Return_station_id",
          "Return_station_name",
          "Covered_distance",
          "Duration"
        );
      });
  });
  // station endpoint should show body with data of 457
  it("station API", () => {
    cy.request("http://localhost:5000/api/stations")
      .its("body")
      .should("have.length", 457);
  });

  // JSON SCHEMA CHECK
  it("json schema check", () => {
    cy.request("http://localhost:5000/api/stations")
      .its("body")
      .each((value) => {
        expect(value).to.have.all.keys(
          "_id",
          "FID",
          "ID",
          "Nimi",
          "Namn",
          "Osoite",
          "Name",
          "Kaupunki",
          "Adress",
          "Stad",
          "Operaattor",
          "Kapasiteet",
          "x",
          "y"
        );
      });
  });
});
