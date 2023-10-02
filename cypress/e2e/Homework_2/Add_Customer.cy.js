//// <reference types="cypress" />

import Login from "../../support/selectors2"
const login = new Login

describe('Add customer',()=>{

    it('Check Add customer',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        login.username()
        login.password()
        login.btnLogin()
        cy.get(':nth-child(4) > .oxd-main-menu-item')
          .should('be.visible')
          .click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)')
          .click()
        cy.get('ul[class="oxd-dropdown-menu"]')
          .find('li')
          .contains('Customers')
          .click()
        cy.contains('Add')
          .click()
        cy.get(':nth-child(2) > .oxd-input')
          .type('Global__area')
        cy.get('.oxd-textarea')
          .type('Hello')
        cy.get('.oxd-button--secondary')
          .click()

})
})