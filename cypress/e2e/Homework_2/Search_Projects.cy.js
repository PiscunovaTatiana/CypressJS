/// <reference types="cypress" />

import Login from "../../support/selectors2"
const login = new Login

describe('Search projects',()=>{


    it('Check Search projects by project name',()=>{
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
          .contains('Projects')
          .click()
        cy.get('input[placeholder="Type for hints..."]')
          .first()
          .click()
          .type('ACME Ltd')
        cy.wait(1000)
        cy.get('div[role="listbox"]')
          .first()
          .click()
        cy.get('.oxd-form-actions > .oxd-button--secondary')
          .click({force: true})

})
})