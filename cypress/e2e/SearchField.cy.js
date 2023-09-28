/// <reference types="cypress" />

import selectors from "../support/selectors";
const { loginField, passwordField } = selectors;

describe('Search field',()=>{
    it.only('Check search field',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(loginField).type("Admin");
      cy.get(passwordField).type("admin123");
      cy.get('button[type="submit"]').should('be.visible').click();
      cy.get('.oxd-input').type('time').should('have.value','time');
                
    })
})