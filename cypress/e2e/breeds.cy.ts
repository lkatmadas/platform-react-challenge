/* eslint-disable @typescript-eslint/no-unused-expressions */
describe('🐾 Cat Breeds Page', () => {
  beforeEach(() => {
    cy.visit('/breeds')
  })

  it('displays first 2 cat breed items with thumbnail and title', () => {
    cy.wait(2000) // wait for breed data to load

    cy.get('[data-testid="cat-breed-item"]')
      .should('have.length.at.least', 2)
      .then($items => {
        // Limit to first 2 items
        const firstTwo = Cypress.$($items).slice(0, 2)

        cy.wrap(firstTwo).each($item => {
          cy.wrap($item)
            .find('img[data-testid="breed-thumbnail"]')
            .should('exist')
            .and('have.attr', 'src')
            .and('include', 'cdn2.thecatapi.com')

          cy.wrap($item).find('h2').should('exist').and('not.be.empty')
        })
      })
  })

  it('opens modal when the first breed item is clicked and shows breed image', () => {
    cy.get('[data-testid="cat-breed-item"]').first().click()
    cy.get('[data-testid="modal"]').should('exist').and('be.visible')
    cy.get('[data-testid="breed-cat-image"]', { timeout: 5000 }).should('exist').and('be.visible')
  })

  it('shows action button on hover over breed image', () => {
    cy.visit('/breeds')
    cy.wait(2000)
    cy.get('[data-testid="cat-breed-item"]').first().click()
    cy.get('[data-testid="modal"]').should('exist').and('be.visible')
    cy.get('[data-testid="breed-cat-image"]').first().find('[data-testid="button"]').click()
  })

  it('navigates to correct cat detail URL on preview button click', () => {
    cy.visit('/breeds')
    cy.wait(2000)
    cy.get('[data-testid="cat-breed-item"]').first().click()
    cy.get('[data-testid="modal"]').should('exist').and('be.visible')

    // Find the first card and extract its cat ID
    cy.get('[data-testid="breed-cat-image"]')
      .first()
      .then($card => {
        const catId = $card.attr('data-cat-id')
        expect(catId, 'Cat ID should be present on card').to.exist

        // Hover and click the "View" button inside it
        cy.wrap($card).trigger('mouseover', { force: true })
        cy.get('[data-testid="breed-cat-image"]').first().find('[data-testid="button"]').click()

        // Confirm the redirection includes the correct query param
        cy.location('search').should('eq', `?cat=${catId}`)
      })
  })
})
