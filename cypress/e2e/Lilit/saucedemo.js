/// <reference types="cypress"/>

describe("Lilit Tests", ()=> {

    it("login", ()=> {
        cy.visit("https://www.saucedemo.com/");

        
        cy.get("[id='user-name']").type("standard_user");
        cy.get("[id='password']").type("secret_sauce"); 
        cy.get("[id='login-button']").click(); 
    

})
})