/* eslint-disable @typescript-eslint/no-unused-expressions */
describe('🐱 Cat List Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('loads initial cat cards', () => {
    cy.get('[data-testid="cat-card"]').should('have.length.at.least', 1)
  })

  it('loads more cats when clicking "Load More Cats"', () => {
    cy.get('[data-testid="cat-card"]').then(initialCats => {
      const initialCount = initialCats.length

      cy.get('[data-testid="load-more-cats-btn"]').should('be.visible').click()

      cy.get('[data-testid="cat-card"]', { timeout: 5000 }).should(
        'have.length.greaterThan',
        initialCount,
      )
    })
  })

  it('opens and closes modal via Preview button', () => {
    cy.get('[data-testid="cat-card"]')
      .first()
      .trigger('mouseover')
      .within(() => {
        cy.get('[data-testid="preview-cat"]').first().click({ force: true })
      })

    cy.get('[data-testid="modal"]').should('exist')
    cy.get('[data-testid="modal"]').within(() => {
      cy.get('img').should('be.visible')
      cy.contains(/mark as favourite/i)
    })

    cy.get('body').type('{esc}')
    cy.get('[data-testid="modal"]').should('not.exist')
  })
})

describe('⭐️ Favouriting', () => {
  it('favourites a cat and shows it in Favourites section', () => {
    cy.visit('/')

    cy.get('[data-testid="cat-card"]').first().trigger('mouseover')
    cy.get('[data-testid="preview-cat"]').first().click()

    cy.get('[data-testid="modal"]').should('exist')
    cy.get('[data-testid="modal"] img').should('be.visible')

    cy.get('[data-testid="favourite-cat-action"]')
      .should('exist')
      .invoke('attr', 'data-cat-id')
      .then(favouritedId => {
        cy.get('[data-testid="favourite-cat-action"]').click()
        cy.get('[data-testid="close-modal"]').click()

        cy.get('a[href="/favourites"]').click()

        cy.get('[data-testid="favourite-cat"]')
          .should('exist')
          .should($cards => {
            const match = $cards
              .toArray()
              .some(el => el.getAttribute('data-cat-id') === favouritedId)
            expect(match, `Expect cat ID ${favouritedId} in favourites`).to.be.true
          })
      })
  })
})

describe('🔄 Modal Persistence via URL', () => {
  it('reopens modal from direct URL with ?cat=', () => {
    cy.visit('/')

    cy.get('[data-testid="cat-card"]').first().trigger('mouseover')
    cy.get('[data-testid="preview-cat"]').first().click()

    cy.location('search').then(search => {
      const params = new URLSearchParams(search)
      const catId = params.get('cat')
      expect(catId, 'cat ID should be present in query').to.not.be.null

      cy.visit(`/?cat=${catId}`)

      cy.get('[data-testid="modal"]').should('exist')
      cy.get('[data-testid="modal"] img').should('be.visible')
    })
  })
})
