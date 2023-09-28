/// <reference types="cypress" />

import selectors from "../support/selectors";
const { loginField, passwordField } = selectors;

describe('Check Add Nationality',()=>{
    it.only('Check Add Nationality',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.viewport(1920, 1080);
      cy.get(loginField).type("Admin");
      cy.get(passwordField).type("admin123");
      cy.get('button[type="submit"]').should('be.visible').click();
      cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
        cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click();
        cy.get('.oxd-button').should('be.visible').click();
        cy.get(':nth-child(2) > .oxd-input').type('Italannn');
        cy.get('.oxd-button--secondary').should('be.visible').click();
    })
})
