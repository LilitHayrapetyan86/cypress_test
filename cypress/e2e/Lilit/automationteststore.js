/// <reference types="cypress"/>

describe("Lilit Tests", ()=> {

  beforeEach (() => { 
    cy.visit("https://automationteststore.com/")

  })

    it(" search function checking", ()=> {
       
        cy.get("[name='filter_keyword']").type("Creme Precieuse Nuit 50ml");
        cy.get("[class='fa fa-search']").click(); 
        
        cy.get("[class='bgnone']")
          .should("have.text", "Creme Precieuse Nuit 50ml");                
    })
    

    it("check minimum amount error", ()=> {
        
        cy.get("[name='filter_keyword']").type("Benefit Bella Bamba");
        cy.get("[class='fa fa-search']").click();
        cy.get("#product_quantity").clear().type(1); 
        cy.get(".cart").click();
        
        cy.get("[class='alert alert-error alert-danger']")
          .should("contain.text", "Allowed product's quantity is below minimum required. Quantity was set to minimum amount.");                
    })

    it("Human verification error ", ()=> {
        
        cy.get('#block_frame_featured_1769 > div > div:nth-child(1) > div.thumbnail > a > img').click();
        cy.get('#myTab > li:nth-child(2) > a').click();
        cy.get('#rating1 > a').click(); 
        cy.get('#name').type("Lilit");
        cy.get("[name='text']").type("Lilit");
        cy.get('#review_submit').click(); 
        
        cy.get("[class='alert alert-error alert-danger']")
          .should("contain.text", "Human verification has failed! Please try again.");               
    })


    it(" titel check", ()=> {
       
      cy.get(':nth-child(3) > [href="https://automationteststore.com/index.php?rt=product/category&path=36"').click();
      cy.get(':nth-child(1) > .mt10 > a').click();
      
      
      cy.title().should('include','Cheeks');                
  })
    
})

