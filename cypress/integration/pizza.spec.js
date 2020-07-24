// write tests here
describe('Inputs and submit button', () => {
    
    it('can add text to box', () => {
      // grab element (in itself is a test)
      // type something with cy
      // assert that the value of the input is the thing we typed
      cy.get('input[name="name"]')
        .type('Diamond')
        .should('have.value', 'Diamond')
        .clear()
    })
  
  it('can select multiple toppings', () =>{
      
  })
  
  })
  
  describe('Adding and deleting a new quote', () => {
    it('can navigate to the site', () => {
      // repeat minus the check
      cy.visit('http://localhost:1234')
    })
  
    it('can submit a quote', () => {
      // filling out the form and submit it
      // assert that a quote with the given text and author are in the DOM
      cy.get('input[name="text"]').type('Have Fun!')
      cy.get('input[name="author"]').type('Gabe')
      // cy.pause()
      cy.get('#submitBtn').click()
      cy.get(".container").contains('Have Fun!')
    })
  
    it('can delete the newly added quote', () => {
      // find the delete button of the quote, click it,
      // assert that the contents are not in there any more
      cy.contains('Have Fun! (Gabe)').siblings('button:nth-of-type(2)').click()
      cy.contains('Have Fun! (Gabe)').should('not.exist')
    })
  })
  
  describe('Editing a quote', () => {
    beforeEach(() => {
      // cleanup
    })
  
    it('can navigate to the site', () => {
      cy.visit('http://localhost:1234')
    })
  
    it('can submit a quote', () => {
      cy.get('input[name="text"]').type('Have')
      cy.get('input[name="author"]').type('Gabriel')
      cy.get('#submitBtn').click()
    })
  
    it('click the edit button and submit changes', () => {
      cy.contains('Have (Gabriel)').siblings('button:nth-of-type(1)').click()
      cy.get('input[name="text"]').type(' fun!')
      cy.get('input[name="author"]').type(' Cabrejas')
      cy.get('#submitBtn').click()
      cy.contains('Have fun! (Gabriel Cabrejas)')
    })
  
    it('can delete the edited', () => {
      cy.contains('Have fun! (Gabriel Cabrejas)').siblings('button:nth-of-type(2)').click()
      cy.contains('Have fun! (Gabriel Cabrejas)').should('not.exist')
    })
  })
  