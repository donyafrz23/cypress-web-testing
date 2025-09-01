describe('Cypress Dummy Test', () => {
  it('Visits example site and checks elements', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink').should('be.visible')
    cy.get('a').first().should('have.attr', 'href')
  })
})
