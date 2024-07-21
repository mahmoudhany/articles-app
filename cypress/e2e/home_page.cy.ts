/// <reference types="cypress" />

describe("articles", () => {
  it("displays loading spinner when loading", () => {
    cy.intercept("GET", "**/mostpopular/v2/viewed/1.json*", {
      delay: 1000,
      fixture: "articles.json",
    }).as("getArticles")
    cy.visit("/")
    cy.get("div").contains("Loading...").should("be.visible")
  })

  it("displays error message on error", () => {
    // Mock error state
    cy.intercept("GET", "**/mostpopular/v2/viewed/1.json*", {
      statusCode: 500,
      body: "Something went wrong",
    }).as("getArticles")
    cy.visit("/")
    // Ensure error message is displayed
    cy.get("div").contains("Something went wrong").should("be.visible")
  })

  it("renders articles correctly", () => {
    cy.visit("/")
    cy.get("[data-cy=article-card]").should("have.length", 20)
  })

  it("calls setDuration on duration change", () => {
    cy.visit("/")
    cy.get('select[name="duration"]').select("7")
    cy.get("[data-cy=article-card]").should("have.length", 20)
  })

  it("clicks the first card", () => {
    cy.visit("/")
    cy.get("[data-cy=article-card]").first().click()
    cy.url().should("include", "/article/")
    cy.get("[data-cy=details-title]").should("be.visible")
  })
})
