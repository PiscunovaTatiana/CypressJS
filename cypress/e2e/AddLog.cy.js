/// <reference types="cypress" />

import selectors from "./selectors";
const { loginField, passwordField } = selectors;

describe('Add Log',()=>{
    it.only('Check add logs to My Trackers',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(loginField).type("Admin");
      cy.get(passwordField).type("admin123");
      cy.get('button[type="submit"]').should('be.visible').click();
      cy.get(':nth-child(7) > .oxd-main-menu-item')
        .should('contain','Performance') 
        .click();
      cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click();
      cy.contains('View').click();
      cy.get('.oxd-button').click();
      cy.get(':nth-child(2) > .oxd-input').type('hello');
      cy.get('.oxd-textarea').type('ok');
      cy.get('.oxd-form-actions > .oxd-button--secondary').click();
                
    })
})