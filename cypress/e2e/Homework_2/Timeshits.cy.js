/// <reference types="cypress" />

import Login from "../../support/selectors2"
const login = new Login

describe('Search Timesheets',()=>{

     it('Check search Timesheets for an existing employee ',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        login.username()
        login.password()
        login.btnLogin()
        cy.get(':nth-child(4) > .oxd-main-menu-item')
          .should('be.visible')
          .click()
        cy.get('input[placeholder="Type for hints..."]')
          .type('Collings')
          .click()
        cy.wait(1000)
        cy.get('div[role="listbox"]')
          .first()
          .click()
        cy.get('.oxd-form-actions > .oxd-button')
          .click({force: true})
        
})
})