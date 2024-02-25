describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/') // change URL to match your dev URL
	cy.get('.login_logo').should('have.text', 'Swag Labs')
  })
})