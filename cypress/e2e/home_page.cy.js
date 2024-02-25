describe('The Home Page', () => {
  it('Open the login page and verify the Swag Labs logo', () => {
    cy.visit('/') // change URL to match your dev URL
	cy.get('.login_logo').should('have.text', 'Swag Labs')
  })
})