/// <reference types="cypress" />

import Login from "../../support/selectors2"
const login = new Login

describe('Search Reports',()=>{


    it('Check search report by report name',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        login.username()
        login.password()
        login.btnLogin()
        cy.get(':nth-child(2) > .oxd-main-menu-item')
          .click()
        cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item')
          .click()
        cy.get('input[placeholder="Type for hints..."]')
          .type('PIM Sample Report')
          .click()
        cy.wait(2000)
        cy.get('div[role="listbox"]')
          .first()
          .click()
        cy.get('.oxd-form-actions > .oxd-button--secondary')
          .click({force: true})
   
})
})
