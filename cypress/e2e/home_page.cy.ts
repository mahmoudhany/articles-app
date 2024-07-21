/// <reference types="cypress" />

const mockArticles = [
  {
    uri: "nyt://article/8fa396fe-db12-5e85-aa5b-a1b26d640cd6",
    url: "https://www.nytimes.com/2024/07/20/us/usha-vance-indian-americans-politics.html",
    id: 100000009576943,
    asset_id: 100000009576943,
    source: "New York Times",
    published_date: "2024-07-20",
    updated: "2024-07-20 05:03:01",
    section: "U.S.",
    subsection: "",
    nytdsection: "u.s.",
    adx_keywords:
      "Presidential Election of 2024;Asian-Americans;Vice Presidents and Vice Presidency (US);Foreign Workers;Chinese-Americans;Politics and Government;Race and Ethnicity;Immigration and Emigration;Indian-Americans;Gopalan, Shyamala;Haley, Nikki R;Harris, Kamala D;Jindal, Bobby;Ramaswamy, Vivek (1985- );Trump, Donald J;Vance, J D;Pew Research Center;University of California, Berkeley;University of California, San Diego;Yale University;California;Europe;India;San Diego (Calif)",
    column: null,
    byline: "By Amy Qin and Jonathan Wolfe",
    type: "Article",
    title:
      "Indian Americans Become a Political Force, Just as Usha Vance’s Profile Rises",
    abstract:
      "Indian Americans are now the largest and most politically active group among Asian Americans. Among their recent milestones: Vice President Kamala Harris, two G.O.P. presidential candidates — and a possible second lady.",
    des_facet: [
      "Presidential Election of 2024",
      "Asian-Americans",
      "Vice Presidents and Vice Presidency (US)",
      "Foreign Workers",
      "Chinese-Americans",
      "Politics and Government",
      "Race and Ethnicity",
      "Immigration and Emigration",
      "Indian-Americans",
    ],
    org_facet: [
      "Pew Research Center",
      "University of California, Berkeley",
      "University of California, San Diego",
      "Yale University",
    ],
    per_facet: [
      "Gopalan, Shyamala",
      "Haley, Nikki R",
      "Harris, Kamala D",
      "Jindal, Bobby",
      "Ramaswamy, Vivek (1985- )",
      "Trump, Donald J",
      "Vance, J D",
    ],
    geo_facet: ["California", "Europe", "India", "San Diego (Calif)"],
    media: [
      {
        type: "image",
        subtype: "photo",
        caption:
          "Usha Vance, who could become the second lady, is something of a political enigma. She was registered as a Democrat as recently as 2014 and has said little about her own politics.",
        copyright: "Haiyun Jiang for The New York Times",
        approved_for_syndication: 1,
        "media-metadata": [
          {
            url: "https://static01.nyt.com/images/2024/07/20/multimedia/20nat-usha-vance-TOP-kfgc/20nat-usha-vance-TOP-kfgc-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
          },
          {
            url: "https://static01.nyt.com/images/2024/07/20/multimedia/20nat-usha-vance-TOP-kfgc/20nat-usha-vance-TOP-kfgc-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
          },
          {
            url: "https://static01.nyt.com/images/2024/07/20/multimedia/20nat-usha-vance-TOP-kfgc/20nat-usha-vance-TOP-kfgc-mediumThreeByTwo440.jpg",
            format: "mediumThreeByTwo440",
            height: 293,
            width: 440,
          },
        ],
      },
    ],
    eta_id: 0,
  },
]
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
