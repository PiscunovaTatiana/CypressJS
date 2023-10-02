/// <reference types="cypress" />

import Login from "../../support/selectors2"
const login = new Login

describe('Add employee',()=>{


    it('Check Add employee',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        login.username()
        login.password()
        login.btnLogin()
        cy.get(':nth-child(2) > .oxd-main-menu-item')
          .click()
        cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item')
          .click()
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input')
          .type('Alex')
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input')
          .type('Alex')
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input')
          .type('Der')
        cy.contains('Save')
          .click()

})
})
