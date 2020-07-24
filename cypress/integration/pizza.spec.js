// write tests here
describe('Inputs and submit button', () => {

    it('can navigate to the site', () =>{
        cy.visit('http://localhost:3000/pizza')
    })
    
    it('can add text to box', () => {
   
      cy.get('input[name="name"]')
        .type('Diamond')
        .should('have.value', 'Diamond')
        .clear()
    })
  
  it('can select multiple toppings', () =>{

    cy.get('input[name="cheese"]').click()
    cy.get('input[name="pineapple"]').click()
    cy.get('input[name="bacon"]').click()

  })

  it('can submit form', () =>{

    cy.get('input[name="name"]').type('Diamond')
    cy.get('select').select('medium')
    cy.get('input[name="cheese"]').click()
    cy.get('.btn').click()
  })
  
  })
  
