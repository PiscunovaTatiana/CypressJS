/// <reference types="cypress" />

import Login from "../../support/selectors2"
const login = new Login

describe('Contact Details',()=>{


    it('Check Add Contact Details',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        login.username()
        login.password()
        login.btnLogin()
        cy.get(':nth-child(6) > .oxd-main-menu-item')
          .click()
        cy.get(':nth-child(2) > .orangehrm-tabs-item')
          .click({force: true})
        cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input')
          .clear()
          .type('5252522')
        cy.get('input[modelmodifiers="[object Object]"]')
          .first()
          .clear()
          .type('+236236236')
        cy.get('input[modelmodifiers="[object Object]"]')
          .last()
          .clear()
          .type('112-898-7612')
        cy.contains('Save')
          .click()

})
})