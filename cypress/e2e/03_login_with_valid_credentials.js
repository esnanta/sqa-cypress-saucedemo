describe('login', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('Login with valid credentials.', () => {
	  
	// We'll store our item text in a variable so we can reuse it
    const username = 'standard_user'
	const password = 'secret_sauce'
	
    cy.get('[data-test="username"]').type(username)
	cy.get('[data-test="password"]').type(password)
	
    cy.contains('Login').click()
	cy.get('.title').should('have.text', 'Products')

  })

})