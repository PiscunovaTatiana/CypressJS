/// <reference types="cypress" />

import Login from "../../support/selectors2"
const login = new Login

describe('Personal Details',()=>{


    it('Check change Personal Details',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        login.username()
        login.password()
        login.btnLogin()
        cy.get(':nth-child(6) > .oxd-main-menu-item')
          .click()
        cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input')
          .clear()
          .type('Lorenio')
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
          .clear()
          .type('053')
        cy.get('[type="submit"]')
          .first()
          .should('be.visible')
          .click();

})
})