describe('I arrive at product page', () => {
  beforeEach(() => {
    cy.visit('/')
	
    const username = 'standard_user'
	const password = 'secret_sauce'
	
    cy.get('[data-test="username"]').type(username)
	cy.get('[data-test="password"]').type(password)
	
    cy.contains('Login').click()
	cy.get('.title').should('have.text', 'Products')
  })
  
  it('Verify that the inventory page is displayed', () => {
	const TShirtRed = 'Test.allTheThings() T-Shirt (Red)'
	
    cy.get('.inventory_item_name').first().should('have.text', 'Sauce Labs Backpack')
    cy.get('.inventory_item_name').last().should('have.text', TShirtRed)
  })
  
  it('I press filter to sort data', () => {
	
	const TShirtRed = 'Test.allTheThings() T-Shirt (Red)'
	
	//filter by alphabet a to z
	cy.get('select').select("az")
	cy.get('.inventory_item_name').first().should('have.text', 'Sauce Labs Backpack')
    cy.get('.inventory_item_name').last().should('have.text', TShirtRed)
	  
	//filter by alphabet z to a
	cy.get('select').select("za")
	cy.get('.inventory_item_name').first().should('have.text', TShirtRed)
    cy.get('.inventory_item_name').last().should('have.text', 'Sauce Labs Backpack')
	
	//filter by price low to high
	cy.get('select').select("lohi")
	cy.get('.inventory_item_price').first().should('have.text', '$7.99')
    cy.get('.inventory_item_price').last().should('have.text', '$49.99')
	
	//filter by price high to low
	cy.get('select').select("hilo")
	cy.get('.inventory_item_price').first().should('have.text', '$49.99')
    cy.get('.inventory_item_price').last().should('have.text', '$7.99')
  })
})