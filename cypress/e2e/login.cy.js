describe('login', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('type user and password', () => {
	  
	// We'll store our item text in a variable so we can reuse it
    const username = 'standard_user'
	const password = 'secret_sauce'
	
    cy.get('[data-test="username"]').type(username)
	cy.get('[data-test="password"]').type(password)

  })
  
  
})