/// <reference types="cypress" />

import selectors from "./selectors";
const { loginField, passwordField } = selectors;

describe('Add Post',()=>{
    it.only('Check Add Post',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(loginField).type("Admin");
      cy.get(passwordField).type("admin123");
      cy.get('button[type="submit"]').should('be.visible').click();
      cy.get(':nth-child(12) > .oxd-main-menu-item')
        .should('contain','Buzz')
        .click();
      cy.get('.oxd-buzz-post-input').type('Hello everyone') 
      cy.get('.oxd-buzz-post-slot > .oxd-button')
        .should('contain','Post') 
        .click();
        
                
    })
})