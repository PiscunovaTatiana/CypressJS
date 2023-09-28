/// <reference types="cypress" />

import selectors from "./selectors";
const { loginField, passwordField } = selectors;

describe('Check LogIn',()=>{
    it.only('Verify LogIn',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(loginField).type("Admin");
      cy.get(passwordField).type("admin123");
      cy.get('button[type="submit"]').should('be.visible').click();
    })
})