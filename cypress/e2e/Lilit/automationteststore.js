/// <reference types="cypress"/>

describe("Lilit Tests", ()=> {

  beforeEach (() => { 
    cy.visit("https://automationteststore.com/")

  })

    it("Checking  'Search' Function ", ()=> {
       
        cy.get("[name='filter_keyword']").type("Creme Precieuse Nuit 50ml");
        cy.get("[class='fa fa-search']").click(); 
        
        cy.get("[class='bgnone']")
          .should("have.text", "Creme Precieuse Nuit 50ml");                
    })
    

    it("Minimum quantity limit checking", ()=> {
        
        cy.get("[name='filter_keyword']").type("Benefit Bella Bamba");
        cy.get("[class='fa fa-search']").click();
        cy.get("#product_quantity").clear().type(1); 
        cy.get(".cart").click();
        
        cy.get("[class='alert alert-error alert-danger']")
          .should("contain.text", "Allowed product's quantity is below minimum required. Quantity was set to minimum amount.");                
    })

    it("Add а review without verification code entered ", ()=> {
        
        cy.get('#block_frame_featured_1769 > div > div:nth-child(1) > div.thumbnail > a > img').click();
        cy.get('#myTab > li:nth-child(2) > a').click();
        cy.get('#review_submit').click(); 
        
        cy.get("[class='alert alert-error alert-danger']")
          .should("contain.text", "Human verification has failed! Please try again.");               
    })


    it(" Title changes checking", ()=> {
       
      cy.get(':nth-child(3) > [href="https://automationteststore.com/index.php?rt=product/category&path=36"').click();
      cy.get(':nth-child(1) > .mt10 > a').click();
      
      
      cy.title().should('include','Cheeks');                
  })
    
  it("Checking  'Check order' Function with unreal user value", ()=> {
        
    cy.get("#topnav > .form-control").select("Check Your Order");
    cy.get("[name='order_id']").type(123);
    cy.get("[id='CheckOrderFrm_email']").type("lilit@mail.ru"); 
    cy.get("[title='Continue']").click();
    
    cy.get("[class='contentpanel']")
      .should("contain.text", "The order you have requested could not be found!");                
})
})

